/*Implemente un algoritmo de ordenamiento con
el método Bubble Sort, para que ordene un
arreglo de longitud N en orden descendente.*/

import *as rls from "readline-sync";
let longitud: number = rls.questionInt(`Ingrese la longitud del arreglo: `);

function cargarArreglo(arreglo: number[]):number[] {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = rls.questionInt("Ingrese los numeros del arreglo: ")

    }
    return arreglo;
}

//[2,3,5,6]
function burbujear(arr: number[]): number[] {
    //bucle externo
    for (let i = 0; i < arr.length; i++) {
        //bucle interno
        for (let j = 0; j < arr.length -1 -i; j++) {
            if (compararNumeros(arr, j) === -1) {
                intercambiarNumeros(arr, j);
            }

        }

    }
    return arr
}

function compararNumeros(arr: number[], j: number): number {
    let comparacion: number=0;
    if (arr[j] == arr[j + 1]) {
        comparacion = 0;
    } else if (arr[j] < arr[j + 1]) {
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion

}

function intercambiarNumeros(arr: number[], j: number) {
    let aux: number = 0;
    aux = arr[j]; //guarda valor original del indice 
    arr[j] = arr[j + 1]; //modifica el valor del indice con su par 
    arr[j + 1] = aux; //guardo el valor original aux
}
let arreglo: number[] = new Array(longitud);
let linea:string="";
cargarArreglo(arreglo);
console.log(arreglo);
burbujear(arreglo);
imprimirValores(arreglo);

function imprimirValores (vector:number[]){
    for (let i = 0; i < vector.length; i++) {
        linea+=vector[i]+" ";        
    }
    console.log(linea);
}
