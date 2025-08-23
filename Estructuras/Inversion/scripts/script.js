// Función con retorno: calcula el interés compuesto usando un ciclo
function calcularInteresCompuesto(capital, tasa, anios) {
  let resultados = [];
  let monto = capital;

  for (let i = 1; i <= anios; i++) {
    monto = monto * (1 + tasa / 100);
    resultados.push({ anio: i, monto: monto });
  }

  return resultados;
}

// Función sin retorno: muestra en la tabla los resultados
function mostrar(resultados) {
  const tabla = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  tabla.innerHTML = ""; // limpiar antes de mostrar

  resultados.forEach(res => {
    const fila = tabla.insertRow();
    fila.insertCell(0).textContent = res.anio;
    fila.insertCell(1).textContent = res.monto.toFixed(2);
  });
}

// Método principal
function principal() {
  let capital = parseFloat(prompt("Ingrese el capital inicial:"));
  let tasa = parseFloat(prompt("Ingrese la tasa de interés (% anual):"));
  let anios = parseInt(prompt("Ingrese el número de años:"));

  if (isNaN(capital) || isNaN(tasa) || isNaN(anios)) {
    alert("Por favor ingrese valores numéricos válidos.");
    return;
  }

  let resultados = calcularInteresCompuesto(capital, tasa, anios);
  mostrar(resultados);
}
