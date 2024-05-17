/*Encontrar el elemento más grande del arreglo
Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar
*/

let arreglo: number []= [4,7,9,3,1,45,67,23,29,78,11,16];

let numMayor:number = 0
for (let posicion=0; posicion <arreglo.length; posicion++) {
    if (arreglo[posicion]> numMayor) {
        numMayor= arreglo[posicion];
    }
 } 
 console.log("El numero mayor es: "+ numMayor);
 
 if (numMayor%2==0){
    console.log ("El numero Mayor es par");
 }else{
    console.log("El numero Mayor es Impar");
 }

