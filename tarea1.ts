import*as rls from "readline-sync";

let numBase :number = rls.questionFloat("Ingrese un numero mayor o igual a 0: ");
let numExponente : number = rls.questionFloat("Ingrese su exponente: ");
let potencia:number=0;

function verificacionExponente (exponente:number):number {
    while (numExponente<0){
        console.log("el numero no puede ser negativo, ingrese otro numero");
     numExponente= rls.questionFloat("Ingrese su exponente: ");

    }
    return numExponente;
}

function calcularPotencia (base:number,exponente:number):number{
    exponente=verificacionExponente(numExponente);
    let resultado:number=0;
    if (exponente==0) {
    resultado=1
    } else {
    resultado=(base**exponente)
}
return resultado
}

potencia=calcularPotencia ( numBase, numExponente)
console.log("El resultado de la potencia es: " + potencia);

