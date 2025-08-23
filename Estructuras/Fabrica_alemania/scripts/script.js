// Función con retorno: registrar producción en matriz (3 máquinas x 4 turnos)
function registrarProduccion() {
  let produccion = [];
  for (let i = 1; i <= 3; i++) {
    let maquina = [];
    for (let j = 1; j <= 4; j++) {
      let valor = parseFloat(prompt("Ingrese la producción de la Máquina " + i + " en el Turno " + j + ":"));
      if (isNaN(valor) || valor < 0) {
        alert("Debe ingresar un número válido (positivo).");
        return [];
      }
      maquina.push(valor);
    }
    produccion.push(maquina);
  }
  return produccion;
}

// Función con retorno: calcular total por turno (suma vertical por columna)
function calcularTotalesPorTurno(produccion) {
  let totales = [0, 0, 0, 0]; // 4 turnos
  for (let i = 0; i < produccion.length; i++) {
    for (let j = 0; j < produccion[i].length; j++) {
      totales[j] += produccion[i][j];
    }
  }
  return totales;
}

// Función sin retorno: mostrar resultados en tabla
function mostrar(produccion, totales) {
  const cuerpo = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  cuerpo.innerHTML = ""; // limpiar tabla

  // Mostrar la producción por máquina
  produccion.forEach((maquina, i) => {
    let fila = cuerpo.insertRow();
    fila.insertCell(0).textContent = "Máquina " + (i + 1);
    maquina.forEach(valor => {
      fila.insertCell(-1).textContent = valor.toFixed(2);
    });
  });

  // Fila con total por turno
  let filaTotal = cuerpo.insertRow();
  filaTotal.insertCell(0).textContent = "TOTAL por Turno";
  totales.forEach(total => {
    filaTotal.insertCell(-1).textContent = total.toFixed(2);
  });
}

// Método principal
function principal() {
  let produccion = registrarProduccion();
  if (produccion.length > 0) {
    let totales = calcularTotalesPorTurno(produccion);
    mostrar(produccion, totales);
  }
}
