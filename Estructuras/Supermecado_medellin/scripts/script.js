// Función con retorno: captura los precios de los productos
function registrarPrecios() {
  let precios = [];
  for (let i = 1; i <= 8; i++) {
    let precio = parseFloat(prompt("Ingrese el precio del producto " + i + ":"));
    if (isNaN(precio) || precio < 0) {
      alert("Debe ingresar un número válido.");
      return [];
    }
    precios.push(precio);
  }
  return precios;
}

// Función con retorno: calcula el promedio
function calcularPromedio(precios) {
  let suma = 0;
  for (let i = 0; i < precios.length; i++) {
    suma += precios[i];
  }
  return suma / precios.length;
}

// Función sin retorno: muestra los precios y el promedio
function mostrar(precios, promedio) {
  const cuerpo = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  cuerpo.innerHTML = ""; // limpiar antes de mostrar

  precios.forEach((precio, index) => {
    let fila = cuerpo.insertRow();
    fila.insertCell(0).textContent = "Producto " + (index + 1);
    fila.insertCell(1).textContent = precio.toFixed(2);
  });

  let filaFinal = cuerpo.insertRow();
  filaFinal.insertCell(0).textContent = "Promedio de precios";
  filaFinal.insertCell(1).textContent = promedio.toFixed(2);
}

// Método principal
function principal() {
  let precios = registrarPrecios();
  if (precios.length > 0) {
    let promedio = calcularPromedio(precios);
    mostrar(precios, promedio);
  }
}
