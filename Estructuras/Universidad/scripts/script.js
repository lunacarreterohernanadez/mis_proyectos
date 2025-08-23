// Función con retorno: registrar notas de 5 estudiantes en 3 asignaturas
function registrarNotas() {
  let notas = [];
  for (let i = 1; i <= 5; i++) {
    let estudiante = [];
    for (let j = 1; j <= 3; j++) {
      let nota = parseFloat(prompt("Ingrese la nota del Estudiante " + i + " en la Asignatura " + j + ":"));
      if (isNaN(nota) || nota < 0 || nota > 5) {
        alert("Debe ingresar una nota válida (0 a 5).");
        return [];
      }
      estudiante.push(nota);
    }
    notas.push(estudiante);
  }
  return notas;
}

// Función con retorno: calcular los promedios de cada estudiante
function calcularPromedios(notas) {
  let promedios = [];
  for (let i = 0; i < notas.length; i++) {
    let suma = 0;
    for (let j = 0; j < notas[i].length; j++) {
      suma += notas[i][j];
    }
    promedios.push(suma / notas[i].length);
  }
  return promedios;
}

// Función sin retorno: mostrar resultados en tabla
function mostrar(notas, promedios) {
  const cuerpo = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  cuerpo.innerHTML = ""; // limpiar tabla

  notas.forEach((estudiante, i) => {
    let fila = cuerpo.insertRow();
    fila.insertCell(0).textContent = "Estudiante " + (i + 1);
    estudiante.forEach(nota => {
      fila.insertCell(-1).textContent = nota.toFixed(2);
    });
    fila.insertCell(-1).textContent = promedios[i].toFixed(2);
  });
}

// Método principal
function principal() {
  let notas = registrarNotas();
  if (notas.length > 0) {
    let promedios = calcularPromedios(notas);
    mostrar(notas, promedios);
  }
}
