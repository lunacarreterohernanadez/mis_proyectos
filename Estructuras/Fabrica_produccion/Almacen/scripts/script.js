// Función con retorno: calcula el valor total del inventario
function calcularTotal(productos) {
  let total = 0;
  for (let i = 0; i < productos.length; i++) {
    total += productos[i].precio * productos[i].cantidad;
  }
  return total;
}

// Función sin retorno: muestra los productos y el total en la tabla
function mostrar(productos, total) {
  const cuerpo = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  cuerpo.innerHTML = ""; // limpiar tabla antes de mostrar

  productos.forEach((producto, index) => {
    let fila = cuerpo.insertRow();
    fila.insertCell(0).textContent = "Producto " + (index + 1);
    fila.insertCell(1).textContent = producto.precio.toFixed(2);
    fila.insertCell(2).textContent = producto.cantidad;
    fila.insertCell(3).textContent = (producto.precio * producto.cantidad).toFixed(2);
  });

  // Fila del total
  let filaTotal = cuerpo.insertRow();
  filaTotal.insertCell(0).textContent = "TOTAL INVENTARIO";
  filaTotal.insertCell(1).textContent = "-";
  filaTotal.insertCell(2).textContent = "-";
  filaTotal.insertCell(3).textContent = total.toFixed(2);
}

// Método principal
function principal() {
  let productos = [];

  for (let i = 1; i <= 15; i++) {
    let precio = parseFloat(prompt("Ingrese el precio del producto " + i + ":"));
    let cantidad = parseInt(prompt("Ingrese la cantidad del producto " + i + ":"));

    if (isNaN(precio) || isNaN(cantidad)) {
      alert("Debe ingresar valores numéricos válidos.");
      return;
    }

    productos.push({ precio: precio, cantidad: cantidad });
  }

  let total = calcularTotal(productos);
  mostrar(productos, total);
}
