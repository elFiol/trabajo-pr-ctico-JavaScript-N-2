const numero = parseInt(prompt("Ingrese un número del 1 al 50"));
if (numero < 1 || numero > 50 || isNaN(numero)) {
  alert("Número inesperado, vuelva a intentarlo");
} else {
  for (let indice = 1; indice <= numero; indice++) {
    document.write("<p>");
    for (let indiceNum = 1; indiceNum <= indice; indiceNum++) {
      document.write(indiceNum);
    }
    document.write("</p>");
  }
}
