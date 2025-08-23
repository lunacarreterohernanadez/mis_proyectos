// Función con retorno: registra los nombres en un arreglo
function registrarNombres() {
  let nombres = [];
  for (let i = 1; i <= 5; i++) {
    let nombre = prompt("Ingrese el nombre del estudiante " + i + ":");
    if (!nombre) {
      alert("Debe ingresar un nombre válido.");
      return [];
    }
    nombres.push(nombre);
  }
  return nombres;
}

// Función sin retorno: muestra los nombres en la tabla
function mostrar(nombres) {
  const cuerpo = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  cuerpo.innerHTML = ""; // limpiar tabla antes de mostrar

  nombres.forEach((nombre, index) => {
    let fila = cuerpo.insertRow();
    fila.insertCell(0).textContent = "Estudiante " + (index + 1);
    fila.insertCell(1).textContent = nombre;
  });
}

// Método principal
function principal() {
  let nombres = registrarNombres();
  if (nombres.length > 0) {
    mostrar(nombres);
  }
}
