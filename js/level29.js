// Bonus training exercise. Fixed addresses; independent of the login.
var level = 29;

var level_title = "Quatre routeurs : routage complet";

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
    "id": "R3",
    "type": "router",
    "name": "R3",
    "geometry": "200x200+1700+750",
    "img": "router.png",
    "labelpos": "-70,-210"
  },
  {
    "id": "R4",
    "type": "router",
    "name": "R4",
    "geometry": "200x200+2350+750",
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
  },
  {
    "id": "C",
    "type": "host",
    "name": "C",
    "geometry": "200x200+1700+1250",
    "img": "host.png",
    "labelpos": "0,220"
  },
  {
    "id": "D",
    "type": "host",
    "name": "D",
    "geometry": "200x200+2350+1250",
    "img": "host.png",
    "labelpos": "0,220"
  },
  {
    "id": "I",
    "type": "internet",
    "name": "I",
    "geometry": "200x200+3000+750",
    "img": "internet.png",
    "labelpos": "-70,-210"
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
  },
  {
    "hid": "D",
    "rid": "Dr1",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
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
    "hid": "R1",
    "rid": "R1r2",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  },
  {
    "hid": "R1",
    "rid": "R1r3",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  },
  {
    "hid": "R1",
    "rid": "R1r4",
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
  },
  {
    "hid": "R2",
    "rid": "R2r2",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  },
  {
    "hid": "R2",
    "rid": "R2r3",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  },
  {
    "hid": "R2",
    "rid": "R2r4",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  },
  {
    "hid": "R3",
    "rid": "R3r1",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  },
  {
    "hid": "R3",
    "rid": "R3r2",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  },
  {
    "hid": "R3",
    "rid": "R3r3",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  },
  {
    "hid": "R3",
    "rid": "R3r4",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  },
  {
    "hid": "R4",
    "rid": "R4r1",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  },
  {
    "hid": "R4",
    "rid": "R4r2",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  },
  {
    "hid": "R4",
    "rid": "R4r3",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  },
  {
    "hid": "R4",
    "rid": "R4r4",
    "route": "0.0.0.0/32",
    "gate": "0.0.0.0",
    "route_edit": "true",
    "gate_edit": "true"
  },
  {
    "hid": "I",
    "rid": "Ir1",
    "route": "0.0.0.0/32",
    "gate": "163.172.250.2",
    "route_edit": "true",
    "gate_edit": "false"
  }
];

var ifs = [
  {
    "if": "R1L1",
    "hid": "R1",
    "ip": "198.18.29.1",
    "mask": "/26",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "0,190"
  },
  {
    "if": "A1",
    "hid": "A",
    "ip": "198.18.29.2",
    "mask": "/26",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "0,-80"
  },
  {
    "if": "R2L2",
    "hid": "R2",
    "ip": "198.18.29.65",
    "mask": "/26",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "0,190"
  },
  {
    "if": "B1",
    "hid": "B",
    "ip": "198.18.29.66",
    "mask": "/26",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "0,-80"
  },
  {
    "if": "R3L3",
    "hid": "R3",
    "ip": "198.18.29.129",
    "mask": "/26",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "0,190"
  },
  {
    "if": "C1",
    "hid": "C",
    "ip": "198.18.29.130",
    "mask": "/26",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "0,-80"
  },
  {
    "if": "R4L4",
    "hid": "R4",
    "ip": "198.18.29.193",
    "mask": "/26",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "0,190"
  },
  {
    "if": "D1",
    "hid": "D",
    "ip": "198.18.29.194",
    "mask": "/26",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "0,-80"
  },
  {
    "if": "R1E",
    "hid": "R1",
    "ip": "198.19.29.1",
    "mask": "/30",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "190,20"
  },
  {
    "if": "R2W",
    "hid": "R2",
    "ip": "198.19.29.2",
    "mask": "/30",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "-190,20"
  },
  {
    "if": "R2E",
    "hid": "R2",
    "ip": "198.19.29.5",
    "mask": "/30",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "190,20"
  },
  {
    "if": "R3W",
    "hid": "R3",
    "ip": "198.19.29.6",
    "mask": "/30",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "-190,20"
  },
  {
    "if": "R3E",
    "hid": "R3",
    "ip": "198.19.29.9",
    "mask": "/30",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "190,20"
  },
  {
    "if": "R4W",
    "hid": "R4",
    "ip": "198.19.29.10",
    "mask": "/30",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "-190,20"
  },
  {
    "if": "R4N",
    "hid": "R4",
    "ip": "163.172.250.2",
    "mask": "/30",
    "ip_edit": "false",
    "mask_edit": "false",
    "type": "std",
    "pos": "190,20"
  },
  {
    "if": "I1",
    "hid": "I",
    "ip": "163.172.250.1",
    "mask": "/30",
    "ip_edit": "false",
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
    "if1": "C1",
    "if2": "R3L3"
  },
  {
    "if1": "D1",
    "if2": "R4L4"
  },
  {
    "if1": "R1E",
    "if2": "R2W"
  },
  {
    "if1": "R2E",
    "if2": "R3W"
  },
  {
    "if1": "R3E",
    "if2": "R4W"
  },
  {
    "if1": "R4N",
    "if2": "I1"
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
    "id1": "A",
    "id2": "I"
  },
  {
    "id": "5",
    "type": "reach",
    "id1": "B",
    "id2": "C"
  },
  {
    "id": "6",
    "type": "reach",
    "id1": "B",
    "id2": "D"
  },
  {
    "id": "7",
    "type": "reach",
    "id1": "B",
    "id2": "I"
  },
  {
    "id": "8",
    "type": "reach",
    "id1": "C",
    "id2": "D"
  },
  {
    "id": "9",
    "type": "reach",
    "id1": "C",
    "id2": "I"
  },
  {
    "id": "10",
    "type": "reach",
    "id1": "D",
    "id2": "I"
  }
];

