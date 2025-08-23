// Función con retorno: registrar consumos de 4 mesas en 3 días
function registrarConsumos() {
  let consumos = [];
  for (let i = 1; i <= 4; i++) {
    let mesa = [];
    for (let j = 1; j <= 3; j++) {
      let valor = parseFloat(prompt("Ingrese el consumo de la Mesa " + i + " en el Día " + j + ":"));
      if (isNaN(valor) || valor < 0) {
        alert("Debe ingresar un valor válido (número positivo).");
        return [];
      }
      mesa.push(valor);
    }
    consumos.push(mesa);
  }
  return consumos;
}

// Función con retorno: calcular total por mesa
function calcularTotales(consumos) {
  let totales = [];
  for (let i = 0; i < consumos.length; i++) {
    let suma = 0;
    for (let j = 0; j < consumos[i].length; j++) {
      suma += consumos[i][j];
    }
    totales.push(suma);
  }
  return totales;
}

// Función sin retorno: mostrar resultados en tabla
function mostrar(consumos, totales) {
  const cuerpo = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  cuerpo.innerHTML = ""; // limpiar tabla

  consumos.forEach((mesa, i) => {
    let fila = cuerpo.insertRow();
    fila.insertCell(0).textContent = "Mesa " + (i + 1);
    mesa.forEach(consumo => {
      fila.insertCell(-1).textContent = "$" + consumo.toFixed(2);
    });
    fila.insertCell(-1).textContent = "$" + totales[i].toFixed(2);
  });
}

// Método principal
function principal() {
  let consumos = registrarConsumos();
  if (consumos.length > 0) {
    let totales = calcularTotales(consumos);
    mostrar(consumos, totales);
  }
}
