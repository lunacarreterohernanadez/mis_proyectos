function registrarProduccion() {
  let tabla = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  tabla.innerHTML = ""; // limpiar tabla antes de insertar

  let total = 0;

  for (let i = 1; i <= 10; i++) {
    let produccion = parseFloat(prompt("Ingrese la producción del día " + i + ":"));

    // validar que sea número
    if (isNaN(produccion)) {
      alert("Debe ingresar un número válido.");
      return;
    }

    total += produccion;

    // agregar fila con resultados
    let fila = tabla.insertRow();
    fila.insertCell(0).textContent = "Día " + i;
    fila.insertCell(1).textContent = produccion.toFixed(2);
  }

  // mostrar total en el pie de la tabla
  document.getElementById("total").textContent = total.toFixed(2);
}
