// Bonus training exercise. Fixed addresses; independent of the login.
var level = 12;

var level_title = "Un petit lien en /30";

var hosts = [
  {
    "id": "A",
    "type": "host",
    "name": "A",
    "geometry": "200x200+250+400",
    "img": "host.png",
    "labelpos": "0,220"
  },
  {
    "id": "B",
    "type": "host",
    "name": "B",
    "geometry": "200x200+900+400",
    "img": "host.png",
    "labelpos": "0,220"
  }
];

var routes = [];

var ifs = [
  {
    "if": "A1",
    "hid": "A",
    "ip": "198.18.12.129",
    "mask": "/30",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "0,-80"
  },
  {
    "if": "B1",
    "hid": "B",
    "ip": "0.0.0.0",
    "mask": "/30",
    "ip_edit": "true",
    "mask_edit": "false",
    "type": "std",
    "pos": "0,-80"
  }
];

var links = [
  {
    "if1": "A1",
    "if2": "B1"
  }
];

var goals = [
  {
    "id": "1",
    "type": "reach",
    "id1": "A",
    "id2": "B"
  }
];

