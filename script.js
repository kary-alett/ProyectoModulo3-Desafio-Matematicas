//Array para guardar los datos del usuario
let usuario = {
    nombre: "",
    puntaje: 0,
    respuestasCorrectas: 0,
    respuestasTotales: 0,
};

//variables para control
let respuestasConsecutivas = 0;
let nivelActual = 1;

//Numeros Aleatorios
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Suma de números
function sumaNivel1 () {
    let numero1 = numeroAleatorio(0,10);
    let numero2 = numeroAleatorio(0,10);
    let resultado = numero1 + numero2;

//Comienzo de Nivel
    console.log(`Nivel 1, correctas: ${respuestasConsecutivas}`);
    let respuestaUsuario = prompt(`Cuanto es ${numero1} + ${numero2}`);

    //Pasar respuuesta a Numero
    respuestaUsuario = parseInt(respuestaUsuario);

    //Resultado
    if (respuestaUsuario === resultado) {
        console.log("Correcto");
        usuario.puntaje += 10;
        usuario.respuestasCorrectas +=1;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas++;

    }else{
        console.log(`Incorrecto, la respuesta es: ${resultado}`);
        usuario.respuestasTotales +=1;
    }
}

    function sumaNivel2 (){
    let numero1 = numeroAleatorio(100,1000);
    let numero2 = numeroAleatorio(100,1000);
    let resultado = numero1 + numero2;

//Comienzo de Nivel
    console.log(`Nivel 2, correctas: ${respuestasConsecutivas}`);
    let respuestaUsuario = prompt(`Cuanto es ${numero1} + ${numero2}`);

    //Pasar respuuesta a Numero
    respuestaUsuario = parseInt(respuestaUsuario);

    //Resultado
    if (respuestaUsuario === resultado) {
        console.log("Correcto");
        usuario.puntaje += 20;
        usuario.respuestasCorrectas +=1;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas++;

    }else{
        console.log(`Incorrecto, la respuesta es: ${resultado}`);
        usuario.puntaje -= 5;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas = 0;
    }
    }

    function sumaNivel3 (){
    let numero1 = numeroAleatorio(1000,10000);
    let numero2 = numeroAleatorio(1000,10000);
    let resultado = numero1 + numero2;

//Comienzo de Nivel
    console.log(`Nivel 3, correctas: ${respuestasConsecutivas}`);
    let respuestaUsuario = prompt(`Cuanto es ${numero1} + ${numero2}`);

    //Pasar respuuesta a Numero
    respuestaUsuario = parseInt(respuestaUsuario);

    //Resultado
    if (respuestaUsuario === resultado) {
        console.log("Correcto");
        usuario.puntaje += 30;
        usuario.respuestasCorrectas +=1;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas++;

    }else{
        console.log(`Incorrecto, la respuesta es: ${resultado}`);
        usuario.puntaje -=10;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas = 0;
    }
    }

    //funcion para andar el desafio
    function inicioDesafioSuma () {
    respuestasConsecutivas = 0;

    //instrucciones
    console.log("_".repeat(50));
    console.log("Desafío de Suma");
    console.log("Completa 3 respuestas correctas en cada nivel");
    console.log("_".repeat(50));

    //Nivel 1
    console.log("Nivel 1 (0-10)");
    while(respuestasConsecutivas < 3) {
        sumaNivel1();
    }
    console.log("Pasas al nivel 2");

    //Nivel 2
    respuestasConsecutivas = 0;
    console.log("Nivel 2 (100-1000");
    while (respuestasConsecutivas < 3) {
        sumaNivel2();
    }
    console.log("Pasas al nivel 3");

    //Nivel 3
    respuestasConsecutivas = 0;
    console.log("Nivel 3 (1000-10000");
    while (respuestasConsecutivas < 3) {
        sumaNivel3();
    }

    //Desafio superado
    console.log("_".repeat(50));
    console.log("¡LO LOGRASTE! Completaste el desafio");
    console.log(`Puntuación final: ${usuario.puntaje} puntos`);
    console.log("_".repeat(50));
}

//Resta de números
function restaNivel1 () {
    let numero1 = numeroAleatorio(0,10);
    let numero2 = numeroAleatorio(0,10);
    let resultado = numero1 - numero2;

//Comienzo de Nivel
    console.log(`Nivel 1, correctas: ${respuestasConsecutivas}`);
    let respuestaUsuario = prompt(`Cuanto es ${numero1} - ${numero2}`);

    //Pasar respuuesta a Numero
    respuestaUsuario = parseInt(respuestaUsuario);

    //Resultado
    if (respuestaUsuario === resultado) {
        console.log("Correcto");
        usuario.puntaje += 10;
        usuario.respuestasCorrectas +=1;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas++;

    }else{
        console.log(`Incorrecto, la respuesta es: ${resultado}`);
        usuario.respuestasTotales +=1;
    }
}

    function restaNivel2 (){
    let numero1 = numeroAleatorio(100,1000);
    let numero2 = numeroAleatorio(100,1000);
    let resultado = numero1 - numero2;

//Comienzo de Nivel
    console.log(`Nivel 2, correctas: ${respuestasConsecutivas}`);
    let respuestaUsuario = prompt(`Cuanto es ${numero1} - ${numero2}`);

    //Pasar respuuesta a Numero
    respuestaUsuario = parseInt(respuestaUsuario);

    //Resultado
    if (respuestaUsuario === resultado) {
        console.log("Correcto");
        usuario.puntaje += 20;
        usuario.respuestasCorrectas +=1;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas++;

    }else{
        console.log(`Incorrecto, la respuesta es: ${resultado}`);
        usuario.puntaje -= 5;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas = 0;
    }
    }

    function restaNivel3 (){
    let numero1 = numeroAleatorio(1000,10000);
    let numero2 = numeroAleatorio(1000,10000);
    let resultado = numero1 - numero2;

//Comienzo de Nivel
    console.log(`Nivel 3, correctas: ${respuestasConsecutivas}`);
    let respuestaUsuario = prompt(`Cuanto es ${numero1} - ${numero2}`);

    //Pasar respuuesta a Numero
    respuestaUsuario = parseInt(respuestaUsuario);

    //Resultado
    if (respuestaUsuario === resultado) {
        console.log("Correcto");
        usuario.puntaje += 30;
        usuario.respuestasCorrectas +=1;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas++;

    }else{
        console.log(`Incorrecto, la respuesta es: ${resultado}`);
        usuario.puntaje -=10;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas = 0;
    }
    }

    //funcion para andar el desafio
    function inicioDesafioResta () {
    respuestasConsecutivas = 0;

    //instrucciones
    console.log("_".repeat(50));
    console.log("Desafío de Resta");
    console.log("Completa 3 respuestas correctas en cada nivel");
    console.log("_".repeat(50));

    //Nivel 1
    console.log("Nivel 1 (0-10)");
    while(respuestasConsecutivas < 3) {
        restaNivel1();
    }
    console.log("Pasas al nivel 2");

    //Nivel 2
    respuestasConsecutivas = 0;
    console.log("Nivel 2 (100-1000");
    while (respuestasConsecutivas < 3) {
        restaNivel2();
    }
    console.log("Pasas al nivel 3");

    //Nivel 3
    respuestasConsecutivas = 0;
    console.log("Nivel 3 (1000-10000");
    while (respuestasConsecutivas < 3) {
        restaNivel3();
    }

    //Desafio superado
    console.log("_".repeat(50));
    console.log("¡LO LOGRASTE! Completaste el desafio");
    console.log(`Puntuación final: ${usuario.puntaje} puntos`);
    console.log("_".repeat(50));
}

//Ver puntaje
function mostrarPuntaje() {
    console.log("_".repeat(50));
    console.log("Tu puntuación:");
    console.log(`Puntos totales: ${usuario.puntaje}`);
    console.log(`Respuestas Correctas: ${usuario.respuestasCorrectas}`);
    console.log(`Respuestas totales: ${usuario.respuestasTotales}`);

    if (usuario.respuestasTotales > 0) {
        let porcentaje = (usuario.respuestasCorrectas / usuario.respuestasTotales) * 100;
        console.log(`Porcentaje de aciertos: ${porcentaje.toFixed(2)}%`);
    }
    console.log("_".repeat(50));
}

//Multiplicar números
function multiplicarNivel1 () {
    let numero1 = numeroAleatorio(0,5);
    let numero2 = numeroAleatorio(0,5);
    let resultado = numero1 * numero2;

//Comienzo de Nivel
    console.log(`Nivel 1, correctas: ${respuestasConsecutivas}`);
    let respuestaUsuario = prompt(`Cuanto es ${numero1} x ${numero2}`);

    //Pasar respuuesta a Numero
    respuestaUsuario = parseInt(respuestaUsuario);

    //Resultado
    if (respuestaUsuario === resultado) {
        console.log("Correcto");
        usuario.puntaje += 10;
        usuario.respuestasCorrectas +=1;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas++;

    }else{
        console.log(`Incorrecto, la respuesta es: ${resultado}`);
        usuario.respuestasTotales +=1;
    }
}

    function multiplicarNivel2 (){
    let numero1 = numeroAleatorio(5,10);
    let numero2 = numeroAleatorio(5,10);
    let resultado = numero1 * numero2;

//Comienzo de Nivel
    console.log(`Nivel 2, correctas: ${respuestasConsecutivas}`);
    let respuestaUsuario = prompt(`Cuanto es ${numero1} x ${numero2}`);

    //Pasar respuuesta a Numero
    respuestaUsuario = parseInt(respuestaUsuario);

    //Resultado
    if (respuestaUsuario === resultado) {
        console.log("Correcto");
        usuario.puntaje += 20;
        usuario.respuestasCorrectas +=1;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas++;

    }else{
        console.log(`Incorrecto, la respuesta es: ${resultado}`);
        usuario.puntaje -= 5;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas = 0;
    }
    }

    function multiplicarNivel3 (){
    let numero1 = numeroAleatorio(10,20);
    let numero2 = numeroAleatorio(10,20);
    let resultado = numero1 * numero2;

//Comienzo de Nivel
    console.log(`Nivel 3, correctas: ${respuestasConsecutivas}`);
    let respuestaUsuario = prompt(`Cuanto es ${numero1} x ${numero2}`);

    //Pasar respuuesta a Numero
    respuestaUsuario = parseInt(respuestaUsuario);

    //Resultado
    if (respuestaUsuario === resultado) {
        console.log("Correcto");
        usuario.puntaje += 30;
        usuario.respuestasCorrectas +=1;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas++;

    }else{
        console.log(`Incorrecto, la respuesta es: ${resultado}`);
        usuario.puntaje -=10;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas = 0;
    }
    }

    //funcion para andar el desafio
    function inicioDesafioMultiplicar () {
    respuestasConsecutivas = 0;

    //instrucciones
    console.log("_".repeat(50));
    console.log("Desafío de Multiplicación");
    console.log("Completa 3 respuestas correctas en cada nivel");
    console.log("_".repeat(50));

    //Nivel 1
    console.log("Nivel 1 (0-5)");
    while(respuestasConsecutivas < 3) {
        multiplicarNivel1();
    }
    console.log("Pasas al nivel 2");

    //Nivel 2
    respuestasConsecutivas = 0;
    console.log("Nivel 2 (5-10");
    while (respuestasConsecutivas < 3) {
        multiplicarNivel2();
    }
    console.log("Pasas al nivel 3");

    //Nivel 3
    respuestasConsecutivas = 0;
    console.log("Nivel 3 (10-20");
    while (respuestasConsecutivas < 3) {
        multiplicarNivel3();
    }

    //Desafio superado
    console.log("_".repeat(50));
    console.log("¡LO LOGRASTE! Completaste el desafio");
    console.log(`Puntuación final: ${usuario.puntaje} puntos`);
    console.log("_".repeat(50));
}

//división de números
function divisionNivel1 () {
    let cociente = numeroAleatorio(1,10);
    let divisor = numeroAleatorio(2,10);
    let dividendo = cociente * divisor;

//Comienzo de Nivel
    console.log(`Nivel 1, correctas: ${respuestasConsecutivas}`);
    let respuestaUsuario = prompt(`Cuanto es ${dividendo} / ${divisor}`);

    //Pasar respuuesta a Numero
    respuestaUsuario = parseInt(respuestaUsuario);

    //Resultado
    if (respuestaUsuario === cociente) {
        console.log("Correcto");
        usuario.puntaje += 10;
        usuario.respuestasCorrectas +=1;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas++;

    }else{
        console.log(`Incorrecto, la respuesta es: ${cociente}`);
        usuario.respuestasTotales +=1;
    }
}

    function divisionNivel2 (){
    let cociente = numeroAleatorio(1,50);
    let divisor = numeroAleatorio(2,50);
    let dividendo = cociente * divisor;

//Comienzo de Nivel
    console.log(`Nivel 2, correctas: ${respuestasConsecutivas}`);
    let respuestaUsuario = prompt(`Cuanto es ${dividendo} / ${divisor}`);

    //Pasar respuuesta a Numero
    respuestaUsuario = parseInt(respuestaUsuario);

    //Resultado
    if (respuestaUsuario === cociente) {
        console.log("Correcto");
        usuario.puntaje += 20;
        usuario.respuestasCorrectas +=1;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas++;

    }else{
        console.log(`Incorrecto, la respuesta es: ${cociente}`);
        usuario.puntaje -= 5;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas = 0;
    }
    }

    function divisionNivel3 (){
    let cociente = numeroAleatorio(10,100);
    let divisor = numeroAleatorio(10,100);
    let dividendo = cociente * divisor;

//Comienzo de Nivel
    console.log(`Nivel 3, correctas: ${respuestasConsecutivas}`);
    let respuestaUsuario = prompt(`Cuanto es ${dividendo} / ${divisor}`);

    //Pasar respuuesta a Numero
    respuestaUsuario = parseInt(respuestaUsuario);

    //Resultado
    if (respuestaUsuario === cociente) {
        console.log("Correcto");
        usuario.puntaje += 30;
        usuario.respuestasCorrectas +=1;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas++;

    }else{
        console.log(`Incorrecto, la respuesta es: ${cociente}`);
        usuario.puntaje -=10;
        usuario.respuestasTotales +=1;
        respuestasConsecutivas = 0;
    }
    }

    //funcion para andar el desafio
    function inicioDesafioDivision () {
    respuestasConsecutivas = 0;

    //instrucciones
    console.log("_".repeat(50));
    console.log("Desafío de Division");
    console.log("Completa 3 respuestas correctas en cada nivel");
    console.log("_".repeat(50));

    //Nivel 1
    console.log("Nivel 1 (0-10)");
    while(respuestasConsecutivas < 3) {
        divisionNivel1();
    }
    console.log("Pasas al nivel 2");

    //Nivel 2
    respuestasConsecutivas = 0;
    console.log("Nivel 2 (1-50");
    while (respuestasConsecutivas < 3) {
        divisionNivel2();
    }
    console.log("Pasas al nivel 3");

    //Nivel 3
    respuestasConsecutivas = 0;
    console.log("Nivel 3 (10-100");
    while (respuestasConsecutivas < 3) {
        divisionNivel3();
    }

    //Desafio superado
    console.log("_".repeat(50));
    console.log("¡LO LOGRASTE! Completaste el desafio");
    console.log(`Puntuación final: ${usuario.puntaje} puntos`);
    console.log("_".repeat(50));
}

//Limpiar los puntajes
function limpiar() {
    usuario.puntaje = 0;
    usuario.respuestasCorrectas = 0;
    usuario.respuestasTotales = 0;
    console.log("_".repeat(50));
    console.log("Se reinicio el puntaje");
    console.log("_".repeat(50));
}

//Iniciando aplicacion
usuario.nombre = prompt("Hola, ¿Cuál es tu nombre?")

//continuar con el menú
let continuar = true;

//Opciones del menú Principal
function menuPrincipal() {
console.log("_".repeat(50));
console.log("Bienvenid@ " + usuario.nombre);
console.log("_".repeat(50));
console.log("Menú Principal");
console.log("1. Comenzar desafío");
console.log("2. Ver mi puntaje");
console.log("3. Reiniciar");
console.log("4. Salir");
}

alert("Revisa la consola para ver el menú");
//Escoger opcion del menu principal

while (continuar) {
menuPrincipal();
let opcion = prompt("Escoge una opcion del 1 al 4")
switch (opcion) {
    case "1":
        elegirMenuOperaciones();
        break;
    case "2":
        mostrarPuntaje();
        break;
    case "3":
        limpiar();
        break;
    case "4":
        console.log("Hasta Pronto " + usuario.nombre);
        continuar = false;
        break;
    default:
        console.log("Ingrese un valor entre 1 y 4");
    
}
}

//Opciones sub menú
function menuOperacion() {
console.log("1.+ Suma");
console.log("2.- Resta");
console.log("3.* Multiplicación");
console.log("4./ División");
console.log("5. Volver al menú Principal")
}

//Eleccion de tipo de operacion 
function elegirMenuOperaciones() {
    menuOperacion();
    let opcionOperacion = prompt("Escoge alguna operación del 1 al 4")
    switch (opcionOperacion) {
        case "1":
            inicioDesafioSuma();
            break;
        case "2":
            inicioDesafioResta()
            break;
        case "3":
            inicioDesafioMultiplicar()
            break;
        case "4":
            inicioDesafioDivision()
            break;
        default:
            console.log("Opción inválida");
    }
}
