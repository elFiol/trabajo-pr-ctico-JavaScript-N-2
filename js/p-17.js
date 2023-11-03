let texto = prompt("ingrese un texto");
texto.toLowerCase;
let vocal = "";
let posicion = 0;
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
    vocal += texto.charAt(indice);
    posicion += indice;
    break;
  }
}
if (vocal === "") {
  alert("no se encontraron vocales");
} else {
  document.write(`la vocal "${vocal}" se encuentra en la posicion ${posicion}`);
}