
//calcular la edad promedio de pacientes internados

let nombre = prompt("Ingrese el nombre del paciente");
let edad = parseInt(prompt ("Ingresa la edad del paciente"));
let sumaEdad = 0;
let cantidadPacientes = 0;

function calcularEdadPromedio(cantidadPacientes, sumaEdad) {
    return sumaEdad / cantidadPacientes 
}

while (nombre != "fin") {

    sumaEdad = sumaEdad + edad
    cantidadPacientes = cantidadPacientes + 1

    nombre = prompt("Ingrese el nombre del paciente");
    edad = parseInt(prompt ("Ingresa la edad del paciente"));
}



alert("La edad promedio de los pacientes es " + calcularEdadPromedio(cantidadPacientes, sumaEdad));

// un if para que no pida edad