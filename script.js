alert("EJERCICIO INTEGRADOR");
alert("Vas a comprar y tienes 3 platillos disponibles, la entrada, el segundo, y el postre. Elige el precio que desees pero que no sea muy poco")
var entrada = parseInt(prompt("La entrada:" ));
var segundo = parseInt(prompt("El segundo:" ));
var postre = parseInt(prompt("El postre:" ));
alert("Presione F12 para abrir la consola y verificar los precios");
// SUMA
console.log("La entrada cuesta: "+ entrada);
console.log("El segundo cuesta: "+segundo);
console.log("El postre cuesta: "+postre);
var suma = entrada + segundo + postre;
console.log("El costo total: "+suma)
//IGV
var IGV = suma*0.18+suma
console.log("El costo total más el IGV es:"+ IGV) 
//MENSAJE
console.log("Gracias por comprar aquí, que tenga un buen día.") 
