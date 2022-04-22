let t1 = prompt("Usuario");
let t2 = prompt("Contrasena");


while(t1 != "admin", t2 != "admin1"){
    alert("contrasena o usuario incorrecto");
    alert("Usuario: " + t1 + " \nPass: " + t2);

    t1 = prompt("ingresar un usuario correcto");
    t2 = prompt("ingresar una contrasena correcta");
} 
