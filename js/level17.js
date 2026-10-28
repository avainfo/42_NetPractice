// Bonus training exercise. Fixed addresses; independent of the login.
var level = 17;

var level_title = "Des masques de tailles différentes";

var hosts = [
  {
    "id": "R1",
    "type": "router",
    "name": "R1",
    "geometry": "200x200+800+650",
    "img": "router.png",
    "labelpos": "-70,-210"
  },
  {
    "id": "A",
    "type": "host",
    "name": "A",
    "geometry": "200x200+150+1250",
    "img": "host.png",
    "labelpos": "0,220"
  },
  {
    "id": "B",
    "type": "host",
    "name": "B",
    "geometry": "200x200+800+1250",
    "img": "host.png",
    "labelpos": "0,220"
  },
  {
    "id": "C",
    "type": "host",
    "name": "C",
    "geometry": "200x200+1450+1250",
    "img": "host.png",
    "labelpos": "0,220"
  }
];

var routes = [
  {
    "hid": "A",
    "rid": "Ar1",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  },
  {
    "hid": "B",
    "rid": "Br1",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  },
  {
    "hid": "C",
    "rid": "Cr1",
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
    "ip": "198.18.17.1",
    "mask": "/32",
    "ip_edit": "false",
    "mask_edit": "true",
    "type": "std",
    "pos": "-190,40"
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
    "if": "R1L2",
    "hid": "R1",
    "ip": "198.18.17.65",
    "mask": "/32",
    "ip_edit": "false",
    "mask_edit": "true",
    "type": "std",
    "pos": "20,190"
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
    "if": "R1L3",
    "hid": "R1",
    "ip": "198.18.17.129",
    "mask": "/32",
    "ip_edit": "false",
    "mask_edit": "true",
    "type": "std",
    "pos": "190,40"
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
  }
];

var links = [
  {
    "if1": "A1",
    "if2": "R1L1"
  },
  {
    "if1": "B1",
    "if2": "R1L2"
  },
  {
    "if1": "C1",
    "if2": "R1L3"
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
    "id1": "B",
    "id2": "C"
  }
];

