// Función con retorno: registrar horas de 6 empleados en 5 días
function registrarHoras() {
  let horas = [];
  for (let i = 1; i <= 6; i++) {
    let empleado = [];
    for (let j = 1; j <= 5; j++) {
      let valor = parseFloat(prompt("Ingrese las horas del Empleado " + i + " en el Día " + j + ":"));
      if (isNaN(valor) || valor < 0) {
        alert("Debe ingresar un valor válido (número positivo).");
        return [];
      }
      empleado.push(valor);
    }
    horas.push(empleado);
  }
  return horas;
}

// Función con retorno: calcular total por empleado
function calcularTotales(horas) {
  let totales = [];
  for (let i = 0; i < horas.length; i++) {
    let suma = 0;
    for (let j = 0; j < horas[i].length; j++) {
      suma += horas[i][j];
    }
    totales.push(suma);
  }
  return totales;
}

// Función sin retorno: mostrar resultados en tabla
function mostrar(horas, totales) {
  const cuerpo = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  cuerpo.innerHTML = ""; // limpiar tabla

  let granTotal = 0;
  horas.forEach((empleado, i) => {
    let fila = cuerpo.insertRow();
    fila.insertCell(0).textContent = "Empleado " + (i + 1);
    empleado.forEach(hora => {
      fila.insertCell(-1).textContent = hora.toFixed(2);
    });
    fila.insertCell(-1).textContent = totales[i].toFixed(2);
    granTotal += totales[i];
  });

  // Fila con el gran total
  let filaTotal = cuerpo.insertRow();
  filaTotal.insertCell(0).textContent = "TOTAL GENERAL";
  for (let j = 0; j < 5; j++) {
    filaTotal.insertCell(-1).textContent = "-";
  }
  filaTotal.insertCell(-1).textContent = granTotal.toFixed(2);
}

// Método principal
function principal() {
  let horas = registrarHoras();
  if (horas.length > 0) {
    let totales = calcularTotales(horas);
    mostrar(horas, totales);
  }
}
