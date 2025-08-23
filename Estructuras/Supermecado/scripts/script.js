// Función con retorno: calcula el total de ventas de 15 productos
function calcularVentas() {
  let productos = [];
  let total = 0;

  for (let i = 1; i <= 15; i++) {
    let precio = parseFloat(prompt("Ingrese el precio del producto " + i + ":"));
    let cantidad = parseInt(prompt("Ingrese la cantidad del producto " + i + ":"));

    if (isNaN(precio) || isNaN(cantidad)) {
      alert("Por favor ingrese valores numéricos válidos.");
      return null;
    }

    let subtotal = precio * cantidad;
    productos.push({ num: i, precio, cantidad, subtotal });
    total += subtotal;
  }

  return { productos, total };
}

// Función sin retorno: muestra los resultados en la tabla
function mostrar(productos, total) {
  const tabla = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  tabla.innerHTML = ""; // limpiar antes de insertar

  productos.forEach(prod => {
    const fila = tabla.insertRow();
    fila.insertCell(0).textContent = "Producto " + prod.num;
    fila.insertCell(1).textContent = prod.precio.toFixed(2);
    fila.insertCell(2).textContent = prod.cantidad;
    fila.insertCell(3).textContent = prod.subtotal.toFixed(2);
  });

  // Mostrar total en el <tfoot>
  document.getElementById("total").textContent = total.toFixed(2);
}

// Método principal
function principal() {
  let resultado = calcularVentas();
  if (resultado) {
    mostrar(resultado.productos, resultado.total);
  }
}
