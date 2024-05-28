"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var typechart_exports = {};
__export(typechart_exports, {
  TypeChart: () => TypeChart
});
module.exports = __toCommonJS(typechart_exports);
const TypeChart = {
  vanilla: {
    damageTaken: {
      Vanilla: 0,
      Cherry: 0,
      Strawberry: 0,
      Apple: 0,
      Orange: 0,
      Banana: 0,
      Lemon: 0,
      Lime: 0,
      Blueberry: 0,
      Grape: 0,
      Raspberry: 0,
      Chocolate: 0
    }
  },
  cherry: {
    damageTaken: {
      Vanilla: 0,
      Cherry: 2,
      Strawberry: 2,
      Apple: 1,
      Orange: 2,
      Banana: 0,
      Lemon: 0,
      Lime: 0,
      Blueberry: 0,
      Grape: 2,
      Raspberry: 1,
      Chocolate: 0,
      powder: 3,
      sandstorm: 3
    }
  },
  strawberry: {
    damageTaken: {
      Vanilla: 0,
      Cherry: 1,
      Strawberry: 2,
      Apple: 2,
      Orange: 2,
      Banana: 0,
      Lemon: 0,
      Lime: 0,
      Blueberry: 2,
      Grape: 0,
      Raspberry: 1,
      Chocolate: 0,
      sandstorm: 3
    }
  },
  apple: {
    damageTaken: {
      Vanilla: 0,
      Cherry: 2,
      Strawberry: 1,
      Apple: 2,
      Orange: 2,
      Banana: 2,
      Lemon: 0,
      Lime: 0,
      Blueberry: 0,
      Grape: 0,
      Raspberry: 1,
      Chocolate: 0,
      sandstorm: 3
    }
  },
  orange: {
    damageTaken: {
      Vanilla: 0,
      Cherry: 1,
      Strawberry: 1,
      Apple: 1,
      Orange: 2,
      Banana: 2,
      Lemon: 2,
      Lime: 1,
      Blueberry: 0,
      Grape: 2,
      Raspberry: 0,
      Chocolate: 0
    }
  },
  banana: {
    damageTaken: {
      Vanilla: 0,
      Cherry: 0,
      Strawberry: 0,
      Apple: 1,
      Orange: 1,
      Banana: 2,
      Lemon: 1,
      Lime: 2,
      Blueberry: 0,
      Grape: 0,
      Raspberry: 0,
      Chocolate: 0
    }
  },
  lemon: {
    damageTaken: {
      Vanilla: 0,
      Cherry: 0,
      Strawberry: 0,
      Apple: 0,
      Orange: 1,
      Banana: 1,
      Lemon: 2,
      Lime: 2,
      Blueberry: 0,
      Grape: 0,
      Raspberry: 0,
      Chocolate: 0
    }
  },
  lime: {
    damageTaken: {
      Vanilla: 0,
      Cherry: 0,
      Strawberry: 0,
      Apple: 0,
      Orange: 2,
      Banana: 1,
      Lemon: 1,
      Lime: 2,
      Blueberry: 0,
      Grape: 0,
      Raspberry: 0,
      Chocolate: 0
    }
  },
  blueberry: {
    damageTaken: {
      Vanilla: 0,
      Cherry: 0,
      Strawberry: 1,
      Apple: 0,
      Orange: 0,
      Banana: 0,
      Lemon: 0,
      Lime: 1,
      Blueberry: 2,
      Grape: 2,
      Raspberry: 2,
      Chocolate: 0
    }
  },
  grape: {
    damageTaken: {
      Vanilla: 0,
      Cherry: 1,
      Strawberry: 0,
      Apple: 0,
      Orange: 1,
      Banana: 0,
      Lemon: 0,
      Lime: 0,
      Blueberry: 1,
      Grape: 2,
      Raspberry: 2,
      Chocolate: 0,
      hail: 3
    }
  },
  raspberry: {
    damageTaken: {
      Vanilla: 0,
      Cherry: 2,
      Strawberry: 2,
      Apple: 2,
      Orange: 0,
      Banana: 0,
      Lemon: 0,
      Lime: 0,
      Blueberry: 1,
      Grape: 1,
      Raspberry: 2,
      Chocolate: 0
    }
  },
  chocolate: {
    damageTaken: {
      Vanilla: 0,
      Cherry: 0,
      Strawberry: 0,
      Apple: 0,
      Orange: 0,
      Banana: 0,
      Lemon: 0,
      Lime: 0,
      Blueberry: 0,
      Grape: 0,
      Raspberry: 0,
      Chocolate: 1
    }
  }
};
//# sourceMappingURL=typechart.js.map
