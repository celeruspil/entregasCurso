"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numBase = rls.questionFloat("Ingrese un numero mayor o igual a 0: ");
var numExponente = rls.questionFloat("Ingrese su exponente: ");
var potencia = 0;
function verificacionExponente(exponente) {
    while (numExponente < 0) {
        console.log("el numero no puede ser negativo, ingrese otro numero");
        numExponente = rls.questionFloat("Ingrese su exponente: ");
    }
    return numExponente;
}
function calcularPotencia(base, exponente) {
    exponente = verificacionExponente(numExponente);
    var resultado = 0;
    if (exponente == 0) {
        resultado = 1;
    }
    else {
        resultado = (Math.pow(base, exponente));
    }
    return resultado;
}
potencia = calcularPotencia(numBase, numExponente);
console.log("El resultado de la potencia es: " + potencia);
