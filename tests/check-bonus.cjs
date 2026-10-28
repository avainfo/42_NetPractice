// Run with: node tests/check-bonus.cjs
// Use the real rendering setup and simulator, with a minimal DOM in memory.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const solutions = require('./bonus-solutions.json');
function board(level, login = 'training') {
    const elements = new Map();
    function element() {
        return {style: {}, appendChild() {}, setAttribute() {}, set innerHTML(html) {
            this.html = html;
            for (const match of html.matchAll(/<input[^>]*id=([^\s>]+)[^>]*value="([^"]*)"/g))
                elements.set(match[1], {value: match[2]});
        }, get innerHTML() { return this.html || ''; }};
    }
    for (const id of ['root_id', 'sl', 'goals_id', 'logs_id', 'logs_container_id', 'logs_button_id']) elements.set(id, element());
    const context = vm.createContext({console, document: {
        getElementById(id) { assert(elements.has(id), `Missing element ${id}`); return elements.get(id); },
        createElement: element, createElementNS: element,
    }, localStorage: {getItem(key) { return key === 'g_my_login' ? login : null; }}, window: {}});
    for (const file of [`js/level${level}.js`, 'js/show.js', 'js/sim.js'])
        vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
    vm.runInContext('load_board()', context);
    return {context, elements};
}
let checked = 0;
for (let level = 11; level <= 30; level++) {
    for (const login of ['ava', 'another-login', '']) {
        const {context: c, elements} = board(level, login);
        assert(c.goals.some(g => c.sim_goal(g).status === 0), `Level ${level} already solved`);
        for (const [collection, idField, fields] of [['ifs', 'if', ['ip', 'mask']], ['routes', 'rid', ['route', 'gate']]]) {
            for (const row of c[collection]) {
                const answer = solutions[level][collection][row[idField]];
                for (const field of fields) {
                    if (row[field + '_edit'] === 'true') {
                        assert.equal(typeof answer[field], 'string');
                        elements.get(field + '_' + row[idField]).value = answer[field];
                    } else assert.equal(answer[field], undefined, 'Solution must not change locked fields');
                }
            }
        }
        for (const g of c.goals) {
            const result = c.sim_goal(g);
            assert.equal(result.status, 1, `Level ${level}, goal ${g.id}: ${result.text}\n${c.g_sim_logs}`);
            checked++;
        }
        c.all_goals();
        assert.match(elements.get('goals_id').innerHTML, level < 30 ? /Next level/ : /Complete!/);
        assert.match(fs.readFileSync(path.join(root, `level${level}.html`), 'utf8'), new RegExp(`js/level${level}\\.js`));
    }
}
// Original training and evaluation boards still initialize without bonus metadata.
for (let level = 1; level <= 10; level++) {
    board(level);
    board(level, '');
}
console.log(`20 bonus levels solved; ${checked} bidirectional goal checks passed across 3 login contexts. Original 10 boards initialized in training and evaluation modes.`);
