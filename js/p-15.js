let texto = prompt("ingrese un texto");
texto.toLowerCase();
let vocales = 0;
for (let indice = 0; indice < texto.length; indice++) {
  if (
    texto.charAt(indice) === "a" ||
    texto.charAt(indice) === "e" ||
    texto.charAt(indice) === "i" ||
    texto.charAt(indice) === "o" ||
    texto.charAt(indice) === "u" ||
    texto.charAt(indice) === "á" ||
    texto.charAt(indice) === "é" ||
    texto.charAt(indice) === "í" ||
    texto.charAt(indice) === "ó" ||
    texto.charAt(indice) === "ú"
  ) {
    vocales++;
  }
}
document.write("El texto tiene " + vocales + " vocales en total.");