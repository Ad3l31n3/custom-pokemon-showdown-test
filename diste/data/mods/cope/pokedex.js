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
var pokedex_exports = {};
__export(pokedex_exports, {
  Pokedex: () => Pokedex
});
module.exports = __toCommonJS(pokedex_exports);
const Pokedex = {
  flubbster: {
    inherit: true,
    metadata: {
      dexEntry: "The noises FLUBBSTER creates are filled with anguish, for it did not ask to be born into this world"
    }
    /* Pokemon Changes */
  },
  pengas: {
    inherit: true,
    evos: ["Oengas"]
  },
  oengas: {
    inherit: true,
    prevo: "Pengas",
    evoLevel: 100,
    baseStats: {
      hp: 139,
      atk: 69,
      def: 86,
      spa: 125,
      spd: 76,
      spe: 111
    }
  },
  honrade: {
    inherit: true,
    evos: ["Devante", "Vergilion"]
  },
  devante: {
    inherit: true,
    prevo: "Honrade",
    evoType: "useItem",
    evoItem: "Sun Stone"
  },
  vergilion: {
    inherit: true,
    prevo: "Honrade",
    evoType: "useItem",
    evoItem: "Moon Stone"
  },
  pizzisdee: {
    inherit: true,
    baseStats: {
      hp: 75,
      atk: 85,
      def: 80,
      spa: 65,
      spd: 80,
      spe: 135
    }
  },
  noxilium: {
    inherit: true,
    baseStats: {
      hp: 80,
      atk: 90,
      def: 69,
      spa: 121,
      spd: 64,
      spe: 117
    }
  },
  emojinn: {
    inherit: true,
    baseStats: {
      hp: 80,
      atk: 48,
      def: 85,
      spa: 121,
      spd: 111,
      spe: 80
    }
  },
  peashroom: {
    inherit: true,
    baseStats: {
      hp: 90,
      atk: 80,
      def: 60,
      spa: 80,
      spd: 85,
      spe: 35
    }
  },
  krackodemon: {
    inherit: true,
    baseStats: {
      hp: 90,
      atk: 51,
      def: 86,
      spa: 142,
      spd: 109,
      spe: 69
    }
  },
  pantherk: {
    inherit: true,
    baseStats: {
      hp: 85,
      atk: 115,
      def: 75,
      spa: 105,
      spd: 75,
      spe: 75
    }
  },
  bluduck: {
    inherit: true,
    abilities: { 0: "Swift Swim", H: "Analytic", S: "Synchronize" },
    baseStats: {
      hp: 82,
      atk: 80,
      def: 80,
      spa: 188,
      spd: 92,
      spe: 78
    }
  },
  platylics: {
    inherit: true,
    abilities: { 0: "Oblivious", H: "Healer", S: "Synchronize" },
    baseStats: {
      hp: 188,
      atk: 67,
      def: 79,
      spa: 101,
      spd: 69,
      spe: 96
    }
  },
  mogumole: {
    num: 42200,
    name: "Mogumole",
    types: ["Ground", "Dragon"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 73, atk: 111, def: 70, spa: 70, spd: 70, spe: 100 },
    abilities: { 0: "Hustle", 1: "Rattled", H: "Run Away", S: "Super Luck" },
    heightm: 0.71,
    weightkg: 20.1,
    color: "Brown",
    eggGroups: ["Field", "Dragon"],
    gen: 8
  },
  garble: {
    num: 42192,
    name: "Garble",
    types: ["Rock"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 60, atk: 105, def: 120, spa: 70, spd: 70, spe: 65 },
    abilities: { 0: "Solid Rock", 1: "Rock Head", H: "Hustle", S: "Pressure" },
    heightm: 1.76,
    weightkg: 90.3,
    color: "Brown",
    prevo: "Garookie",
    evoLevel: 33,
    evos: ["Gargarramer"],
    eggGroups: ["Flying", "Mineral"],
    gen: 8
  },
  haarshogun: {
    num: 42163,
    name: "Haarshogun",
    types: ["Normal", "Water"],
    genderRatio: { M: 0.5, F: 0.5 },
    baseStats: { hp: 120, atk: 130, def: 80, spa: 100, spd: 60, spe: 65 },
    abilities: { 0: "Blademaster", 1: "Cloud Nine", H: "Supreme Overlord", S: "Battle Armor" },
    heightm: 1.7,
    weightkg: 25,
    color: "White",
    prevo: "Vaponobi",
    evoLevel: 47,
    eggGroups: ["Amorphous", "Human-Like"],
    gen: 8
  },
  genine: {
    num: -42125,
    name: "Genine",
    types: ["Dark", "Ground"],
    gender: "N",
    baseStats: { hp: 90, atk: 100, def: 100, spa: 83, spd: 86, spe: 89 },
    abilities: { 0: "Supreme Underlord", 1: "Bulletproof", H: "Quark Drive", S: "Good as Zinc" },
    heightm: 6.3,
    weightkg: 666.6,
    color: "Black",
    eggGroups: ["Smoggonpleasebankingambitsexual"],
    gen: 8,
    creator: "Mr. Sableye"
  },
  tarquail: {
    inherit: true,
    abilities: { 0: "Arena Trap", 1: "Gooey", H: "Sticky Hold", S: "Earth Eater" }
  },
  glaciun: {
    inherit: true,
    abilities: { 0: "Pressure", H: "Technician", S: "Ice Scales" }
  },
  mammount: {
    inherit: true,
    abilities: { 0: "Thick Fat", 1: "Ice Body", H: "Shaved Ice", S: "Rough Skin" }
  },
  disbeary: {
    inherit: true,
    abilities: { 0: "Temperamental", H: "Super Luck", S: "Fairy Aura" }
  },
  disbearyebil: {
    // surely this wont be broken with brutal punishment :clueless:
    inherit: true,
    // surely giving the disbearies their respective auras wont be broken :clueless:
    requiredAbility: void 0,
    battleOnly: void 0,
    // PLEASE WORK THIS TIME.
    abilities: { 0: "Temperamental", H: "Tough Claws", S: "Dark Aura" }
    // surely :clueless:
  },
  yanorm: {
    inherit: true,
    abilities: { 0: "Shed Skin", H: "Jihad", S: "Pickpocket" }
  },
  yancoon: {
    inherit: true,
    abilities: { 0: "Simple", H: "Flash Fire", S: "Pickpocket" }
  },
  yanture: {
    inherit: true,
    abilities: { 0: "Tinted Lens", H: "Numero Uno", S: "Pickpocket" }
  },
  purplegoat: {
    inherit: true,
    abilities: { 0: "Fluffy", 1: "Shadow Tag", H: "Levitate", S: "Sharpness" }
  },
  sableye: {
    inherit: true,
    abilities: { 0: "Prankster", H: "Stall", S: "Keen Eye" }
  },
  weedle: {
    inherit: true,
    abilities: { 0: "Shield Dust", 1: "Shed Skin", H: "Run Away", S: "Mind Zap" }
  },
  waterweedle: {
    inherit: true,
    abilities: { 0: "Water Absorb", 1: "Water Veil", H: "Shield Dust", S: "Run Away" }
  }
};
//# sourceMappingURL=pokedex.js.map