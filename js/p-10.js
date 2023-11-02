const filas = parseInt(prompt("Ingrese el número de filas"));
const columnas = parseInt(prompt("Ingrese el número de columnas"));
let Total = filas * columnas;
document.write("<table><tbody>");
for (let indiceColumn = 1; indiceColumn <= columnas; indiceColumn++) {
  document.write("<tr>");
  for (let indiceFila = 1; indiceFila <= filas; indiceFila++) {
    document.write("<td class='tabla'>" + Total + "</td>");
    Total--;
  }
  document.write("</tr>");
}
document.write("</tbody></table>");