// Función con retorno: suma la producción total
function calcularTotal(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) {
  return p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10;
}

// Función sin retorno: muestra cada producción y el total
function mostrar(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, total) {
  const tabla = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  const fila = tabla.insertRow();

  fila.insertCell(0).textContent = p1.toFixed(2);
  fila.insertCell(1).textContent = p2.toFixed(2);
  fila.insertCell(2).textContent = p3.toFixed(2);
  fila.insertCell(3).textContent = p4.toFixed(2);
  fila.insertCell(4).textContent = p5.toFixed(2);
  fila.insertCell(5).textContent = p6.toFixed(2);
  fila.insertCell(6).textContent = p7.toFixed(2);
  fila.insertCell(7).textContent = p8.toFixed(2);
  fila.insertCell(8).textContent = p9.toFixed(2);
  fila.insertCell(9).textContent = p10.toFixed(2);
  fila.insertCell(10).textContent = total.toFixed(2);
}

// Método principal
function principal() {
  let p1 = parseFloat(prompt("Producción día 1:"));
  let p2 = parseFloat(prompt("Producción día 2:"));
  let p3 = parseFloat(prompt("Producción día 3:"));
  let p4 = parseFloat(prompt("Producción día 4:"));
  let p5 = parseFloat(prompt("Producción día 5:"));
  let p6 = parseFloat(prompt("Producción día 6:"));
  let p7 = parseFloat(prompt("Producción día 7:"));
  let p8 = parseFloat(prompt("Producción día 8:"));
  let p9 = parseFloat(prompt("Producción día 9:"));
  let p10 = parseFloat(prompt("Producción día 10:"));

  if ([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10].some(isNaN)) {
    alert("Por favor, ingrese valores numéricos válidos.");
    return;
  }

  let total = calcularTotal(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10);
  mostrar(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, total);
}
