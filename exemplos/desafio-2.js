"use strict";
// Como podemos melhorar o esse código usando TS? 
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Padeiro"] = 0] = "Padeiro";
    Trabalho[Trabalho["Atriz"] = 1] = "Atriz";
})(Trabalho || (Trabalho = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Trabalho.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Trabalho.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
};
