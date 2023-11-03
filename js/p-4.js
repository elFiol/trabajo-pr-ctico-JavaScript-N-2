let numerosTotal = 0;
do {
  let numero = parseInt(prompt("inserte el numero que desea sumar"));
  if (isNaN(numero)) {
    alert("ese no es un numero");
  } else {
    numerosTotal = numerosTotal + numero;
  }
  numero = 0;
} while (confirm("desea agregar otro numero?"));
document.write(numerosTotal);