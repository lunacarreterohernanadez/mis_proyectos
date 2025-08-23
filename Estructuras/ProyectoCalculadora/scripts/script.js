// Funciones con retorno
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    alert("No se puede dividir entre 0");
    return "Error";
  }
  return a / b;
}

// Función sin retorno: muestra resultados en tabla
function mostrar(x, y, operacion, resultado) {
  const tabla = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  const fila = tabla.insertRow();

  fila.insertCell(0).textContent = x;
  fila.insertCell(1).textContent = y;
  fila.insertCell(2).textContent = operacion;
  fila.insertCell(3).textContent = resultado;
}

// Método principal
function principal() {
  let x = parseFloat(prompt("Ingrese el número X:"));
  let y = parseFloat(prompt("Ingrese el número Y:"));

  if (isNaN(x) || isNaN(y)) {
    alert("Por favor, ingrese valores numéricos válidos.");
    return;
  }

  mostrar(x, y, "Suma", suma(x, y));
  mostrar(x, y, "Resta", resta(x, y));
  mostrar(x, y, "Multiplicación", multiplicacion(x, y));
  mostrar(x, y, "División", division(x, y));
}
