// Bonus training exercise. Fixed addresses; independent of the login.
var level = 20;

var level_title = "Deux routeurs : réparer les interfaces";

var hosts = [
  {
    "id": "R1",
    "type": "router",
    "name": "R1",
    "geometry": "200x200+400+750",
    "img": "router.png",
    "labelpos": "-70,-210"
  },
  {
    "id": "R2",
    "type": "router",
    "name": "R2",
    "geometry": "200x200+1050+750",
    "img": "router.png",
    "labelpos": "-70,-210"
  },
  {
    "id": "A",
    "type": "host",
    "name": "A",
    "geometry": "200x200+400+1250",
    "img": "host.png",
    "labelpos": "0,220"
  },
  {
    "id": "B",
    "type": "host",
    "name": "B",
    "geometry": "200x200+1050+1250",
    "img": "host.png",
    "labelpos": "0,220"
  }
];

var routes = [
  {
    "hid": "A",
    "rid": "Ar1",
    "route": "default",
    "gate": "0.0.0.0",
    "route_edit": "false",
    "gate_edit": "true"
  },
  {
    "hid": "B",
    "rid": "Br1",
    "route": "default",
    "gate": "0.0.0.0",
    "route_edit": "false",
    "gate_edit": "true"
  },
  {
    "hid": "R1",
    "rid": "R1r1",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  },
  {
    "hid": "R2",
    "rid": "R2r1",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  }
];

var ifs = [
  {
    "if": "R1L1",
    "hid": "R1",
    "ip": "198.18.20.1",
    "mask": "/32",
    "ip_edit": "false",
    "mask_edit": "true",
    "type": "std",
    "pos": "0,190"
  },
  {
    "if": "A1",
    "hid": "A",
    "ip": "0.0.0.0",
    "mask": "/32",
    "ip_edit": "true",
    "mask_edit": "true",
    "type": "std",
    "pos": "0,-80"
  },
  {
    "if": "R2L2",
    "hid": "R2",
    "ip": "198.18.20.65",
    "mask": "/32",
    "ip_edit": "false",
    "mask_edit": "true",
    "type": "std",
    "pos": "0,190"
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
    "if": "R1E",
    "hid": "R1",
    "ip": "198.19.20.1",
    "mask": "/32",
    "ip_edit": "false",
    "mask_edit": "true",
    "type": "std",
    "pos": "190,20"
  },
  {
    "if": "R2W",
    "hid": "R2",
    "ip": "0.0.0.0",
    "mask": "/30",
    "ip_edit": "true",
    "mask_edit": "false",
    "type": "std",
    "pos": "-190,20"
  }
];

var links = [
  {
    "if1": "A1",
    "if2": "R1L1"
  },
  {
    "if1": "B1",
    "if2": "R2L2"
  },
  {
    "if1": "R1E",
    "if2": "R2W"
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

