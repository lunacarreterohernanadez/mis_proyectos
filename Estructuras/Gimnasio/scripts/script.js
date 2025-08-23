// Función con retorno: calcula el total de los pesos
function calcularTotal(pesos) {
  let total = 0;
  for (let i = 0; i < pesos.length; i++) {
    total += pesos[i];
  }
  return total;
}

// Función sin retorno: muestra los datos en la tabla
function mostrar(pesos, total) {
  const cuerpo = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  cuerpo.innerHTML = ""; // limpiar antes de insertar

  const fila = cuerpo.insertRow();
  for (let i = 0; i < pesos.length; i++) {
    fila.insertCell(i).textContent = pesos[i].toFixed(2);
  }
  fila.insertCell(pesos.length).textContent = total.toFixed(2);
}

// Función principal
function principal() {
  let pesos = [];
  for (let i = 1; i <= 5; i++) {
    let valor = parseFloat(prompt("Ingrese el peso levantado en la repetición " + i + ":"));
    if (isNaN(valor)) {
      alert("Por favor, ingrese un número válido.");
      return;
    }
    pesos.push(valor);
  }

  let total = calcularTotal(pesos);
  mostrar(pesos, total);
}
