// Función con retorno: registra las ventas de 7 días
function registrarVentas() {
  let ventas = [];
  for (let i = 1; i <= 7; i++) {
    let venta = parseFloat(prompt("Ingrese las ventas del día " + i + ":"));
    if (isNaN(venta) || venta < 0) {
      alert("Ingrese un valor válido para las ventas.");
      return [];
    }
    ventas.push(venta);
  }
  return ventas;
}

// Función sin retorno: muestra las ventas y el día con mayor venta
function mostrar(ventas) {
  const cuerpo = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  cuerpo.innerHTML = ""; // limpiar tabla antes de mostrar

  // Encontrar el máximo
  let mayor = Math.max(...ventas);
  let diaMayor = ventas.indexOf(mayor) + 1;

  ventas.forEach((venta, index) => {
    let fila = cuerpo.insertRow();
    fila.insertCell(0).textContent = "Día " + (index + 1);
    fila.insertCell(1).textContent = venta.toFixed(2);
  });

  // Mostrar resultado final
  let filaFinal = cuerpo.insertRow();
  filaFinal.insertCell(0).textContent = "Día con mayor venta";
  filaFinal.insertCell(1).textContent = "Día " + diaMayor + " con $" + mayor.toFixed(2);
}

// Método principal
function principal() {
  let ventas = registrarVentas();
  if (ventas.length > 0) {
    mostrar(ventas);
  }
}
