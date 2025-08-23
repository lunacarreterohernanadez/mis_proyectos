function mostrarNumeros() {
  let tabla = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  tabla.innerHTML = ""; // limpiar la tabla antes de llenar

  for (let i = 1; i <= 20; i++) {
    let fila = tabla.insertRow();
    fila.insertCell(0).textContent = i;
  }
}
