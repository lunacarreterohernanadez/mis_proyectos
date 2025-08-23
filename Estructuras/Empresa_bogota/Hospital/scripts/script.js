// Función con retorno: calcula el IMC de un paciente
function calcularIMC(peso, estatura) {
  return peso / (estatura * estatura);
}

// Función con retorno: calcula el promedio de un arreglo de IMC
function calcularPromedio(imcs) {
  let suma = 0;
  for (let i = 0; i < imcs.length; i++) {
    suma += imcs[i];
  }
  return suma / imcs.length;
}

// Función sin retorno: muestra los IMC de los pacientes y el promedio
function mostrar(imcs, promedio) {
  const cuerpo = document.getElementById("tablaResultado").getElementsByTagName("tbody")[0];
  cuerpo.innerHTML = ""; // limpiar antes de insertar

  for (let i = 0; i < imcs.length; i++) {
    const fila = cuerpo.insertRow();
    fila.insertCell(0).textContent = (i + 1); // número de paciente
    fila.insertCell(1).textContent = imcs[i].toFixed(2);
  }

  // Fila final con el promedio
  const filaPromedio = cuerpo.insertRow();
  filaPromedio.insertCell(0).textContent = "Promedio IMC";
  filaPromedio.insertCell(1).textContent = promedio.toFixed(2);
}

// Función principal
function principal() {
  let imcs = [];

  for (let i = 1; i <= 20; i++) {
    let peso = parseFloat(prompt("Ingrese el peso del paciente " + i + " (kg):"));
    let estatura = parseFloat(prompt("Ingrese la estatura del paciente " + i + " (m):"));

    if (isNaN(peso) || isNaN(estatura) || estatura <= 0) {
      alert("Por favor, ingrese valores válidos.");
      return;
    }

    let imc = calcularIMC(peso, estatura);
    imcs.push(imc);
  }

  let promedio = calcularPromedio(imcs);
  mostrar(imcs, promedio);
}
