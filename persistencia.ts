import fs from 'node:fs';
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
const precios: number[] = [525, 3500, 400, 1999];
let contenido: string = "";
for (let i = 0; i < productos.length; i++) {
    contenido += `${productos[i]} `;
}
fs.writeFileSync('./productos.txt', contenido);
const datosProductos = fs.readFileSync('./productos.txt', "utf8");
const sinEspacios = datosProductos.trim()
const datoFinal = sinEspacios.split(" ");
console.log(datoFinal);


let contenidoPrecios: string = precios.toString();
fs.writeFileSync('./precios.txt', contenidoPrecios);

for (let i = 0; i < precios.length; i++) {
    let espacio: string = "";
    espacio += `${precios[i]} `;
}
const valor = fs.readFileSync('./precios.txt', "utf8");
const espaciosOff = valor.trim();
const precioFinal = espaciosOff.split(",");
console.log(precioFinal);








