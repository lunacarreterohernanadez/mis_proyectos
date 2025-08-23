// Función para calcular el área de un rectángulo (con retorno)
function calcularArea(base, altura) {
  return base * altura;
}

// Función para mostrar el resultado en la tabla (sin retorno)
function mostrar(base, altura, area) {
  const tabla = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  const fila = tabla.insertRow();

  fila.insertCell(0).textContent = base;
  fila.insertCell(1).textContent = altura;
  fila.insertCell(2).textContent = area;
}

// Método principal
function principal() {
  let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
  let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));

  if (isNaN(base) || isNaN(altura)) {
    alert("Por favor, ingrese valores numéricos válidos.");
    return;
  }

  let area = calcularArea(base, altura);
  mostrar(base, altura, area);
}
