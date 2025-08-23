// Función con retorno: calcula la tabla de multiplicar
function calcularTabla(numero) {
  let tabla = [];
  for (let i = 1; i <= 10; i++) {
    tabla.push({ multiplicando: numero, multiplicador: i, resultado: numero * i });
  }
  return tabla;
}

// Función sin retorno: muestra los datos en la tabla HTML
function mostrar(tabla) {
  const cuerpo = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  cuerpo.innerHTML = ""; // limpiar antes de insertar

  tabla.forEach(fila => {
    const nuevaFila = cuerpo.insertRow();
    nuevaFila.insertCell(0).textContent = fila.multiplicando;
    nuevaFila.insertCell(1).textContent = "x";
    nuevaFila.insertCell(2).textContent = fila.multiplicador;
    nuevaFila.insertCell(3).textContent = "=";
    nuevaFila.insertCell(4).textContent = fila.resultado;
  });
}

// Función principal
function principal() {
  let numero = parseInt(prompt("Ingrese el número para mostrar su tabla de multiplicar:"));

  if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
    return;
  }

  let tabla = calcularTabla(numero);
  mostrar(tabla);
}
