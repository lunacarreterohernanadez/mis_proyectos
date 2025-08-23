// Función con retorno: ordena las calificaciones de mayor a menor
function ordenarNotas(notas) {
  return notas.sort((a, b) => b - a);
}

// Función sin retorno: muestra las calificaciones en la tabla
function mostrar(notasOrdenadas) {
  const cuerpo = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  cuerpo.innerHTML = ""; // limpiar tabla antes de mostrar

  notasOrdenadas.forEach((nota, index) => {
    let fila = cuerpo.insertRow();
    fila.insertCell(0).textContent = "Estudiante " + (index + 1);
    fila.insertCell(1).textContent = nota.toFixed(2);
  });
}

// Método principal
function principal() {
  let notas = [];

  for (let i = 1; i <= 10; i++) {
    let nota = parseFloat(prompt("Ingrese la nota del estudiante " + i + ":"));
    if (isNaN(nota)) {
      alert("Debe ingresar un número válido.");
      return;
    }
    notas.push(nota);
  }

  let notasOrdenadas = ordenarNotas(notas);
  mostrar(notasOrdenadas);
}
