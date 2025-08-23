// Función con retorno: calcula la suma total de producciones
function calcularTotal(producciones) {
  let total = 0;
  for (let i = 0; i < producciones.length; i++) {
    total += producciones[i];
  }
  return total;
}

// Función sin retorno: muestra los resultados en la tabla
function mostrar(producciones, total) {
  const cuerpo = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  cuerpo.innerHTML = ""; // limpiar tabla antes de mostrar

  producciones.forEach((prod, index) => {
    let fila = cuerpo.insertRow();
    fila.insertCell(0).textContent = "Máquina " + (index + 1);
    fila.insertCell(1).textContent = prod.toFixed(2);
  });

  // Fila final con el total
  let filaTotal = cuerpo.insertRow();
  filaTotal.insertCell(0).textContent = "Total producción";
  filaTotal.insertCell(1).textContent = total.toFixed(2);
}

// Método principal
function principal() {
  let producciones = [];

  for (let i = 1; i <= 12; i++) {
    let prod = parseFloat(prompt("Ingrese la producción de la máquina " + i + ":"));
    if (isNaN(prod)) {
      alert("Debe ingresar un número válido.");
      return;
    }
    producciones.push(prod);
  }

  let total = calcularTotal(producciones);
  mostrar(producciones, total);
}
