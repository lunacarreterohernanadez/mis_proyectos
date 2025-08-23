function calcularNota(nota1, nota2, nota3, nota4, nota5) {
  return (nota1 + nota2 + nota3 + nota4 + nota5) / 5; // promedio
}

function mostrar(nota1, nota2, nota3, nota4, nota5, promedio) {
  const tabla = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  const fila = tabla.insertRow();

  fila.insertCell(0).textContent = nota1.toFixed(2);
  fila.insertCell(1).textContent = nota2.toFixed(2);
  fila.insertCell(2).textContent = nota3.toFixed(2);
  fila.insertCell(3).textContent = nota4.toFixed(2);
  fila.insertCell(4).textContent = nota5.toFixed(2);
  fila.insertCell(5).textContent = promedio.toFixed(2);
}

// Método principal
function principal() {
  let nota1 = parseFloat(prompt("Ingrese la nota 1:"));
  let nota2 = parseFloat(prompt("Ingrese la nota 2:"));
  let nota3 = parseFloat(prompt("Ingrese la nota 3:"));
  let nota4 = parseFloat(prompt("Ingrese la nota 4:"));
  let nota5 = parseFloat(prompt("Ingrese la nota 5:"));

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5)) {
    alert("Por favor, ingrese valores numéricos válidos.");
    return;
  }

  let promedio = calcularNota(nota1, nota2, nota3, nota4, nota5);
  mostrar(nota1, nota2, nota3, nota4, nota5, promedio);
}