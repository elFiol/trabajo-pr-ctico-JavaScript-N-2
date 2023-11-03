const calificacion = parseInt(prompt("ingrese una nota de 0 a 10"));
if (isNaN(calificacion)) {
  alert("introduce un numero valido");
} else if (calificacion <= 2) {
  alert("muy deficiente");
} else if (calificacion <= 4) {
  alert("insuficiente");
} else if (calificacion <= 6) {
  alert("suficiente");
} else if (calificacion === 7) {
  alert("bien");
} else if (calificacion <= 9) {
  alert("notable");
} else if (calificacion === 10) {
  alert("sobresaliente");
} else {
  alert("numero erróneo");
}