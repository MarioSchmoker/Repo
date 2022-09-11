console.log("hola mundo");

let readlineSync = require('readline-sync');
let alturaPersona = readlineSync.question("Indique la altura de la persona: ");
console.log("La altura de la persona es : ");
console.log(alturaPersona);

let saludo = "hola mundo nuevamente";
console.log(saludo);

let mensaje1 = readlineSync.question("Ingrese su primer mensaje: ");
let mensaje2 = readlineSync.question("Ingrese su segundo mensaje: ");
let mensaje3 = readlineSync.question("Ingrese su tercer mensaje: ");
console.log("sus mensajes son : ");
console.log(mensaje1, " , ", mensaje2, " y ", mensaje3);

let base = readlineSync.questionInt("Ingrese la base : ");
console.log("La base es: ");
console.log(base);

let altura = readlineSync.questionInt("Ingrese la altura : ");
console.log("La altura es : ");
console.log(altura);

function calcularArea () {
    let area = base * altura;
    console.log("El área es :");
    console.log(area);
    return area;
};

calcularArea();

let vuelta1 = readlineSync.questionInt("Ingrese el tiempo de la primer vuelta: ");
let vuelta2 = readlineSync.questionInt("Ingrese el tiempo de la segunda vuelta: ");
let vuelta3 = readlineSync.questionInt("Ingrese el tiempo de la tercer vuelta: ");
let vuelta4 = readlineSync.questionInt("Ingrese el tiempo de la cuarta vuelta: ");
let tiempoTotal= 0;

function calcularTiempo () {
    tiempoTotal = vuelta1+vuelta2+vuelta3+vuelta4;
    console.log("El tiempo total de vueltas es :");
    console.log(tiempoTotal);
    return tiempoTotal;
};


function calcularPromedio () {
    let promedio = tiempoTotal/4;
    console.log("El promedio por vuelta es :");
    console.log(promedio);
    return promedio;
};

calcularTiempo();
calcularPromedio();