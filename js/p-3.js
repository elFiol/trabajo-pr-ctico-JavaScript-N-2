let oracion = "";
do {
  let parrafo = prompt("introdusca una cadena de texto:");
  oracion += parrafo + " - "
} while (confirm("desea continuar?"));

document.write(oracion)