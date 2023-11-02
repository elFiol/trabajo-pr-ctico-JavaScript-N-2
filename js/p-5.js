let dni = parseInt(prompt("Ingrese el número del DNI (0-99999999):"));
if (isNaN(dni) || dni > 99999999 || dni < 0 || dni === null) {
  alert("ese no es un dni");
} else {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  const letra = letras.charAt(dni % 23);
  alert("La letra del DNI " + dni + " es: " + letra);
}
