const products = [
  {
    id: 1,
    _name: "TP4056 1A Li-ion Charging Module",
    img: "https://i.ibb.co/QcWGyqS/d73f2f6363b9b65f53c858359b65cdbf.jpg",
    price: 48,
    discount: 0,
  },
  {
    id: 2,
    _name:
      "Product details of TP4056 Lithium Battery 18650 Charger Module 1A With Battery Protection BMS",
    img: "https://i.ibb.co/JdD8rj9/Product-details-of-TP4056-Lithium-Battery-18650-Charger-Module-1-A-With-Battery-Protection-BMS.jpg",
    price: 560,
    discount: 20,
  },

  {
    id: 3,
    _name:
      "TP4056 Lithium Battery 18650 Charger Module 1A With Battery Protection BMS",
    img: "https://i.ibb.co/HDHMtGY/TP4056-Lithium-Battery-18650-Charger-Module-1-A-With-Battery-Protection-BMS.jpg",
    price: 58,
    discount: 0,
  },
  {
    id: 4,
    _name:
      "BMS Tp4056 Lithium Battery 1860 Charger Module 1A 3.7V with Battery Protection",
    img: "https://i.ibb.co/6PmW2dB/BMS-Tp4056-Lithium-Battery-1860-Charger-Module-1-A-3-7-V-with-Battery-Protection.jpg",
    price: 59,
    discount: 2,
  },
  {
    id: 5,
    _name:
      "TP4056 1A Lithium battery Charger Module Micro USB 18650 pack of 10",
    img: "https://i.ibb.co/z5SR6ck/TP4056-1-A-Lithium-battery-Charger-Module-Micro-USB-18650-pack-of-10.jpg",
    price: 420,
    discount: 0,
  },

  {
    id: 6,
    _name: "Lithium Polymer Battery 300mAh with open wires",
    img: "https://i.ibb.co/hZJ0y71/Lithium-Polymer-Battery-300m-Ah-with-open-wires.jpg",
    price: 300,
    discount: 0,
  },
  {
    id: 7,
    _name:
      "LM2596 DC-DC adjustable step-down module with digital display voltmeter to display LM2596S regulated power module",
    img: "https://i.ibb.co/XCgvSVV/LM2596-DC-DC-adjustable-step-down-module-with-digital-display-voltmeter-to-display-LM2596-S-regulate.jpg",
    price: 450,
    discount: 0,
  },
  {
    id: 8,
    _name: "TP4056 Lithium Battery Charging Board 1A Type C BMS",
    img: "https://i.ibb.co/n7cXyJh/TP4056-Lithium-Battery-Charging-Board-1-A-Type-C-BMS.jpg",
    price: 120,
    discount: 0,
  },
  {
    id: 9,
    _name: "Lithium Polymer Battery 300mAh with connector",
    img: "https://i.ibb.co/vwSsHQ1/Lithium-Polymer-Battery-300m-Ah-with-connector.jpg",
    price: 400,
    discount: 52,
  },
  {
    id: 10,
    _name: "IR Infrared Obstacle Avoidance Sensor Module for Arduino",
    img: "https://i.ibb.co/NZxWZLq/IR-Infrared-Obstacle-Avoidance-Sensor-Module-for-Arduino.jpg",
    price: 98,
    discount: 0,
  },
  {
    id: 11,
    _name:
      "Mini-360 aeromodelling step-down power module car power DC-DC small power module far exceeds LM2596",
    img: "https://i.ibb.co/xD6nGzf/Mini-360-aeromodelling-step-down-power-module-car-power-DC-DC-small-power-module-far-exceeds-LM2596.jpg",
    price: 100,
    discount: 0,
  },
  {
    id: 12,
    _name:
      "I9s TWS Wireless Bluetooth Earbuds with Charging Box supported to all bluetooth devices compatible with android and ios devices 5.0 bluetooth version",
    img: "https://i.ibb.co/RCGW3hV/9s-TWS-Wireless-Bluetooth-Earbuds-with-Charging-Box-supported-to-all-bluetooth-devices-compatible-wi.png",
    price: 849,
    discount: 0,
  },
  {
    id: 13,
    _name:
      "[Exclusives] I13 Tws Original Wireless Bluetooth 5.0 (Latest Model) Earphones 3D Surround Sound Earbuds Pk I13 With New Hifi And Noise Detection Technology",
    img: "https://i.ibb.co/bWqRNFm/Exclusives-I13-Tws-Original-Wireless-Bluetooth-5-0-Latest-Model-Earphones-3-D-Surround-Sound-Earbuds.png",
    price: 1200,
    discount: 0,
  },
  {
    id: 14,
    _name:
      "LM2596 constant current and constant voltage LED drive lithium-ion battery charging high efficiency and low heat YS-45",
    img: "https://i.ibb.co/0Y4HL3Z/LM2596-constant-current-and-constant-voltage-LED-drive-lithium-ion-battery-charging-high-efficiency.jpg",
    price: 270,
    discount: 0,
  },
  {
    id: 15,
    _name:
      "KA2284 level indicator module power indicator audio level indicator SUNLEPHANT",
    img: "https://i.ibb.co/jz3WQ2y/KA2284-level-indicator-module-power-indicator-audio-level-indicator-SUNLEPHANT.jpg",
    price: 340,
    discount: 0,
  },
  {
    id: 16,
    _name: "Micro USB 2.1 A Fast Charging",
    img: "https://i.ibb.co/Scc1YhH/Micro-USB-2-1-A-Fast-Charging.jpg",
    price: 140,
    discount: 0,
  },
  {
    id: 17,
    _name: "Elm 327 - Obd2 - V2.1 Diagnostic Scanner Tool - Blue",
    img: "https://i.ibb.co/zHQFsp1/Elm-327-Obd2-V2-1-Diagnostic-Scanner-Tool-Blue.jpg",
    price: 1500,
    discount: 660,
  },
  {
    id: 18,
    _name:
      "ZB2L3 battery capacity tester external load discharge type 1.2-12V battery 18650 equal capacity test",
    img: "https://i.ibb.co/SvWnbmG/ZB2-L3-battery-capacity-tester-external-load-discharge-type-1-2-12-V-battery-18650-equal-capacity-te.jpg",
    price: 580,
    discount: 0,
  },
  {
    id: 19,
    _name: "LM2596 DC-DC Adjustable Step Down Buck Converter pack of 10",
    img: "https://i.ibb.co/2PJbFP0/LM2596-DC-DC-Adjustable-Step-Down-Buck-Converter-pack-of-10.jpg",
    price: 1200,
    discount: 0,
  },
  {
    id: 20,
    _name: "LM2596 DC-DC Adjustable Step Down Buck Converter pack of 50",
    img: "https://i.ibb.co/LCGmPVD/LM2596-DC-DC-Adjustable-Step-Down-Buck-Converter-pack-of-50.jpg",
    price: 5750,
    discount: 0,
  },
  {
    id: 21,
    _name: "LM2596 DC-DC Adjustable Step Down Buck Converter pack of 5",
    img: "https://i.ibb.co/qRhzTDJ/LM2596-DC-DC-Adjustable-Step-Down-Buck-Converter-pack-of-5.jpg",
    price: 600,
    discount: 0,
  },
  {
    id: 22,
    _name: "LM2596 DC-DC Adjustable Step Down Buck Converter",
    img: "https://i.ibb.co/TcLDB59/fbe52c447f5fbd063ae5514cab352857.jpg",
    price: 125,
    discount: 0,
  },

  {
    id: 23,
    _name:
      "MT3608 DC-DC boost module 2A boost board input voltage 2-24V rise 5/9/12/-28V adjustable",
    img: "https://i.ibb.co/TLRmhbr/MT3608-DC-DC-boost-module-2-A-boost-board-input-voltage-2-24-V-rise-5.jpg",
    price: 130,
    discount: 0,
  },
  {
    id: 24,
    _name:
      "TP4056 1A Lithium battery Charger Module Micro USB 18650 pack of 100",
    img: "https://i.ibb.co/txVGFtW/TP4056-1-A-Lithium-battery-Charger-Module-Micro-USB-18650-pack-of-100.jpg",
    price: 4200,
    discount: 0,
  },
  {
    id: 25,
    _name:
      "TP4056 1A Lithium battery Charger Module Micro USB 18650 pack of 100",
    img: "https://i.ibb.co/txVGFtW/TP4056-1-A-Lithium-battery-Charger-Module-Micro-USB-18650-pack-of-100.jpg",
    price: 4200,
    discount: 0,
  },
  {
    id: 26,
    _name: "Lithium Polymer Battery 195mAh with open wires",
    img: "https://i.ibb.co/XZjywTV/Lithium-Polymer-Battery-195m-Ah-with-open-wires.jpg",
    price: 220,
    discount: 0,
  },
  {
    id: 27,
    _name:
      "TP4056 Lithium Battery 18650 Charger Module 1A With Battery Protection BMS",
    img: "https://i.ibb.co/8NMVHtq/TP4056-Lithium-Battery-18650-Charger-Module-1-A-With-Battery-Protection-BMS.jpg",
    price: 112,
    discount: 0,
  },
  {
    id: 28,
    _name:
      "TP4056 1A Lithium battery Charger Module Micro USB 18650 pack of 50",
    img: "https://i.ibb.co/9nT9ZS5/TP4056-1-A-Lithium-battery-Charger-Module-Micro-USB-18650-pack-of-50.jpg",
    price: 2150,
    discount: 0,
  },

  {
    id: 29,
    _name:
      "3 strings 11.1V 12V 12.6V 18650 lithium battery charging protection board can start electric drill 10A current",
    img: "https://i.ibb.co/ZdDJb5V/3-strings-11-1-V-12-V-12-6-V-18650-lithium-battery-charging-protection-board-can-start-electric-dril.jpg",
    price: 300,
    discount: 0,
  },
  {
    id: 30,
    _name:
      "TP4056 Lithium Battery 18650 Charger Module 1A With Battery Protection BMS",
    img: "https://i.ibb.co/LxXQtV2/TP4056-Lithium-Battery-18650-Charger-Module-1-A-With-Battery-Protection-BMS.jpg",
    price: 220,
    discount: 0,
  },
  {
    id: 31,
    _name:
      "3.7V Liter 9V 5V Multimeter Modified 18650 Lithium Battery Charging Boost Discharging Integrated Adjustable Module 2A",
    img: "https://i.ibb.co/wzjWzxZ/3-7-V-Liter-9-V-5-V-Multimeter-Modified-18650-Lithium-Battery-Charging-Boost-Discharging-Integrated.jpg",
    price: 100,
    discount: 0,
  },
  {
    id: 32,
    _name: "TP4056 1A Li-ion Charging Module",
    img: "https://i.ibb.co/vdw5W7T/TP4056-1-A-Li-ion-Charging-Module.jpg",
    price: 86,
    discount: 0,
  },
  {
    id: 34,
    _name: "TP4056 1A Li-ion Charging Module TP4056 1A Li-ion Charging Module",
    img: "https://i.ibb.co/88gbzY3/name-TP4056-1-A-Li-ion-Charging-Module-TP4056-1-A-Li-ion-Charging-Module.jpg",
    price: 250,
    discount: 0,
  },
  {
    id: 35,
    _name: "TP4056 Lithium Battery Charging Board 1A Type C BMS",
    img: "https://i.ibb.co/KwYHGtP/TP4056-Lithium-Battery-Charging-Board-1-A-Type-C-BMS.jpg",
    price: 119,
    discount: 0,
  },
  {
    id: 36,
    _name: "TP4056 1A Li-ion Charging Module TP4056 1A Li-ion Charging Module",
    img: "https://i.ibb.co/sg7wsrq/TP4056-1-A-Li-ion-Charging-Module-TP4056-1-A-Li-ion-Charging-Module.jpg",
    price: 196,
    discount: 0,
  },
  {
    id: 37,
    _name: "P4056 1A Li-ion Charging Module",
    img: "https://i.ibb.co/19j79CQ/P4056-1-A-Li-ion-Charging-Module.jpg",
    price: 129,
    discount: 0,
  },
  {
    id: 38,
    _name:
      "2020 Newest ELM327 ELM 327 V2.1 Car Code Scanner Tool Bluetooth Super MINI ELM327 OBD2 Suppot All OBD2 Protocols",
    img: "https://i.ibb.co/Dwq3q83/2020-Newest-ELM327-ELM-327-V2-1-Car-Code-Scanner-Tool-Bluetooth-Super-MINI-ELM327-OBD2-Suppot-All-OB.jpg",
    price: 1390,
    discount: 0,
  },
  {
    id: 39,
    _name:
      "XL6009 DC-DC boost module power supply regulator module output adjustable 4A current exceeding LM2577",
    img: "https://i.ibb.co/gmfSByb/XL6009-DC-DC-boost-module-power-supply-regulator-module-output-adjustable-4-A-current-exceeding-LM25.jpg",
    price: 170,
    discount: 0,
  },
  {
    id: 40,
    _name:
      "Product details of TP4056 Lithium Battery 18650 Charger Module 1A With Battery Protection BMS",
    img: "https://i.ibb.co/GV8RtHz/Product-details-of-TP4056-Lithium-Battery-18650-Charger-Module-1-A-With-Battery-Protection-BMS.jpg",
    price: 210,
    discount: 0,
  },
  {
    id: 41,
    _name:
      "SX1308 adjustable boost module high current 2A power module DC-DC boost module",
    img: "https://i.ibb.co/BzSDRyN/X1308-adjustable-boost-module-high-current-2-A-power-module-DC-DC-boost-module.jpg",
    price: 140,
    discount: 0,
  },
  {
    id: 42,
    _name:
      "XL6019DC-DC adjustable boost power module 5A current high power super XL6009 LM2577 upgrade version",
    img: "https://i.ibb.co/7QGmqSy/XL6019-DC-DC-adjustable-boost-power-module-5-A-current-high-power-super-XL6009-LM2577-upgrade-versio.png",
    price: 390,
    discount: 0,
  },
  {
    id: 43,
    _name:
      "XL6019DC-DC adjustable boost power module 5A current high power super XL6009 LM2577 upgrade version",
    img: "https://i.ibb.co/7QGmqSy/XL6019-DC-DC-adjustable-boost-power-module-5-A-current-high-power-super-XL6009-LM2577-upgrade-versio.png",
    price: 390,
    discount: 0,
  },
  {
    id: 44,
    _name:
      "DC-DC high power 100W adjustable boost module 3.0~35V liter 3.5~35V with digital display voltmeter",
    img: "https://i.ibb.co/YRnN0td/DC-DC-high-power-100-W-adjustable-boost-module-3-0-35-V-liter-3-5-35-V-with-digital-display-voltmete.jpg",
    price: 800,
    discount: 0,
  },

  {
    id: 45,
    _name:
      "DC-DC power module, step-down module, high-power, low-ripple, 12A, adjustable, 95% efficient, vehicle-mounted",
    img: "https://i.ibb.co/THjRQDh/DC-DC-power-module-step-down-module-high-power-low-ripple-12-A-adjustable-95-efficient-vehicle-mount.jpg",
    price: 800,
    discount: 0,
  },
  {
    id: 46,
    _name:
      "DC-DC LTC1871 boost module 3.5~30V 100W with dual display voltmeter super LM2577",
    img: "https://i.ibb.co/stDbtVn/DC-DC-LTC1871-boost-module-3-5-30-V-100-W-with-dual-display-voltmeter-super-LM2577.jpg",
    price: 1150,
    discount: 0,
  },
  {
    id: 47,
    _name:
      "Brand New Power Bank Case 18650 Rechargeable Batteries / Cell Dual Output 8 Cell or 8 Cell (Only Case)",
    img: "https://i.ibb.co/SwnWRPV/Brand-New-Power-Bank-Case-18650-Rechargeable-Batteries.jpg",
    price: 795,
    discount: 0,
  },
  {
    id: 48,
    _name:
      "Brand New Power Bank Case 18650 Rechargeable Batteries / Cell Dual Output Cell or 8 Cell (Only Case)",
    img: "https://i.ibb.co/CP9DbhF/Cell-Dual-Output-Cell-or-8-Cell-Only-Case.jpg",
    price: 750,
    discount: 0,
  },
];
export default products;
