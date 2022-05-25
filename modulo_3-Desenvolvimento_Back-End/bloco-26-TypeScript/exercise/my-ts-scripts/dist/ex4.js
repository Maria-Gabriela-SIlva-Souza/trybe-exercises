"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const ex2_1 = __importDefault(require("./ex2"));
const ex3_1 = __importDefault(require("./ex3"));
const monthsNames = Object.values(ex2_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const seasonsSouth = {
    [ex3_1.default.OUTONO]: [ex2_1.default.MARCO, ex2_1.default.ABRIL, ex2_1.default.MAIO, ex2_1.default.JUNHO],
    [ex3_1.default.INVERNO]: [ex2_1.default.JUNHO, ex2_1.default.JULHO, ex2_1.default.AGOSTO, ex2_1.default.SETEMBRO],
    [ex3_1.default.PRIMAVERA]: [ex2_1.default.SETEMBRO, ex2_1.default.OUTUBRO, ex2_1.default.NOVEMBRO, ex2_1.default.DEZEMBRO],
    [ex3_1.default.VERAO]: [ex2_1.default.DEZEMBRO, ex2_1.default.JANEIRO, ex2_1.default.FEVEREIRO, ex2_1.default.MARCO],
};
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também
const seasonsNorth = {
    [ex3_1.default.PRIMAVERA]: seasonsSouth[ex3_1.default.OUTONO],
    [ex3_1.default.VERAO]: seasonsSouth[ex3_1.default.INVERNO],
    [ex3_1.default.OUTONO]: seasonsSouth[ex3_1.default.PRIMAVERA],
    [ex3_1.default.INVERNO]: seasonsSouth[ex3_1.default.VERAO],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const month = Object.values(ex2_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (months.includes(month))
        console.log(seasons);
    console.log(`Object.values(Months) ${monthsNames}`);
    console.log(`seasonsSouth ${seasonsSouth}`);
});
