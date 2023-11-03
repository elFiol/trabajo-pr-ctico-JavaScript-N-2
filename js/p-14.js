const texto = prompt("ingrese un texto para poner '-'");
for (let indice = 0; indice < texto.length; indice++) {
  if (indice === texto.length - 1) {
    document.write(texto.charAt(indice));
  } else {
    document.write(texto.charAt(indice) + "-");
  }
}