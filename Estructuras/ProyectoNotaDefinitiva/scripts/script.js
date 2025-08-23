// Función para calcular la nota definitiva (con retorno)
function calcularNota(corte1, corte2, corte3) {
  return (corte1 * 0.30) + (corte2 * 0.30) + (corte3 * 0.40);
}

// Función para mostrar el resultado en la tabla (sin retorno)
function mostrar(corte1, corte2, corte3, notaFinal) {
  const tabla = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  const fila = tabla.insertRow();

  fila.insertCell(0).textContent = corte1.toFixed(2);
  fila.insertCell(1).textContent = corte2.toFixed(2);
  fila.insertCell(2).textContent = corte3.toFixed(2);
  fila.insertCell(3).textContent = notaFinal.toFixed(2);
}

// Método principal
function principal() {
  let corte1 = parseFloat(prompt("Ingrese la nota del Corte 1 (30%):"));
  let corte2 = parseFloat(prompt("Ingrese la nota del Corte 2 (30%):"));
  let corte3 = parseFloat(prompt("Ingrese la nota del Corte 3 (40%):"));

  if (isNaN(corte1) || isNaN(corte2) || isNaN(corte3)) {
    alert("Por favor, ingrese valores numéricos válidos.");
    return;
  }

  let notaFinal = calcularNota(corte1, corte2, corte3);
  mostrar(corte1, corte2, corte3, notaFinal);
}
