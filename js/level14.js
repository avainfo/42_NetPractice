// Bonus training exercise. Fixed addresses; independent of the login.
var level = 14;

var level_title = "Quatre machines en /26";

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
  },
  {
    "id": "C",
    "type": "host",
    "name": "C",
    "geometry": "200x200+250+950",
    "img": "host.png",
    "labelpos": "0,220"
  },
  {
    "id": "D",
    "type": "host",
    "name": "D",
    "geometry": "200x200+900+950",
    "img": "host.png",
    "labelpos": "0,220"
  },
  {
    "id": "S",
    "type": "switch",
    "name": "S",
    "geometry": "200x200+570+700",
    "img": "switch.png",
    "labelpos": "0,220"
  }
];

var routes = [];

var ifs = [
  {
    "if": "A1",
    "hid": "A",
    "ip": "198.18.14.129",
    "mask": "/26",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "0,-80"
  },
  {
    "if": "B1",
    "hid": "B",
    "ip": "0.0.0.0",
    "mask": "/32",
    "ip_edit": "true",
    "mask_edit": "true",
    "type": "std",
    "pos": "0,-80"
  },
  {
    "if": "C1",
    "hid": "C",
    "ip": "0.0.0.0",
    "mask": "/32",
    "ip_edit": "true",
    "mask_edit": "true",
    "type": "std",
    "pos": "0,-80"
  },
  {
    "if": "D1",
    "hid": "D",
    "ip": "0.0.0.0",
    "mask": "/32",
    "ip_edit": "true",
    "mask_edit": "true",
    "type": "std",
    "pos": "0,-80"
  },
  {
    "if": "S1",
    "hid": "S",
    "ip": "0.0.0.0",
    "mask": "/32",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "hidden",
    "pos": "0,-80"
  }
];

var links = [
  {
    "if1": "A1",
    "if2": "S1"
  },
  {
    "if1": "B1",
    "if2": "S1"
  },
  {
    "if1": "C1",
    "if2": "S1"
  },
  {
    "if1": "D1",
    "if2": "S1"
  }
];

var goals = [
  {
    "id": "1",
    "type": "reach",
    "id1": "A",
    "id2": "B"
  },
  {
    "id": "2",
    "type": "reach",
    "id1": "A",
    "id2": "C"
  },
  {
    "id": "3",
    "type": "reach",
    "id1": "A",
    "id2": "D"
  },
  {
    "id": "4",
    "type": "reach",
    "id1": "B",
    "id2": "C"
  },
  {
    "id": "5",
    "type": "reach",
    "id1": "B",
    "id2": "D"
  },
  {
    "id": "6",
    "type": "reach",
    "id1": "C",
    "id2": "D"
  }
];

