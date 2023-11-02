const numero = parseInt(prompt("escribe un numero de 1 hasta 500"));
if (isNaN(numero) || numero < 0 || numero > 500) {
  alert("numero invalido o no es un numero");
} else {
  for (let indice = 1; indice <= numero; indice++) {
    if (indice % 4 === 0) {
      document.write("<p>" + indice + " (numero de 4)</p>");
    } else if (indice % 9 === 0) {
      document.write("<p>" + indice + " (numero de 9)</p>");
    } else {
      document.write("<p>" + indice + "</p>");
    }
    if (indice % 5 === 0) {
      document.write(
        "-------------------------------------------------------------------------------"
      );
    }
  }
}
