const texto = prompt("inserte un texto para darlo vuelta");
let textoAlReves = "";
for (let indice = texto.length - 1; indice >= 0; indice--) {
  textoAlReves += texto.charAt(indice);
}
document.write(textoAlReves)