const nombre1 = prompt("ingrese el primer nombre");
const edad1 = parseInt(prompt("ingrese la edad de " + nombre1));
const nombre2 = prompt("ingrese el segundo nombre");
const edad2 = parseInt(prompt("ingrese la edad de " + nombre2));
const nombre3 = prompt("ingrese el tercer nombre");
const edad3 = parseInt(prompt("ingrese la edad de " + nombre3));
const edadMayor = Math.max(edad1, edad2, edad3);
if (edad1 === edadMayor) {
  document.write("el mayor es " + nombre1 + " con una edad de " + edad1);
} else if (edad2 === edadMayor) {
  document.write("el mayor es " + nombre2 + " con una edad de " + edad2);
} else if (edad3 === edadMayor) {
  document.write("el mayor es " + nombre3 + " con una edad de " + edad3);
} else {
  document.write("Todas las edades son iguales");
}