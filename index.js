
// 1-Dclaración
function saludar(){
console.log("Hola soy una funcion");
}

//2-ejecución (llamar/invocar a la funcion)
saludar();

//Parametros
function saludarPersonalizado(persona){
    console.log("¡Bienvenido " +persona+ "!");
}

saludarPersonalizado("Alberto");
saludarPersonalizado("Pedro");
saludarPersonalizado("Gerardo");
//let nombre = promt("Cual es tú nombre?");
//saludarPersonalizado(nombre);


//Parametros multiples
function tablaMultiplicar(tabla,hasta){
    for(let i= 0 ; i <=hasta ; i++){
        console.log(`${tabla} X ${i} = ${(tabla * i)}`)
    //idem    console.log(tabla +" X "+i + (tabla*i));
    }
}

tablaMultiplicar(3,10);


//Devolucion de valores (return)
function sumar(a,b){
    return a + b;
}

let resultado = sumar(5,10);
console.log(resultado);
console.log(sumar(3,3));

//Funciones anonimas
//FUnciones que solamente vamos a declarar la estructura y la ejecutamos automaticamente
//esto nos permite pasar funciones como argumentos a otras funciones

const imprimirConsola = function(mensaje){
    console.log(mensaje);
}

imprimirConsola("Hola!");

// arrow function (funciones flecha)
const imprimirAlert= mensaje => alert(mensaje='Hi!');
 const imprimirAlerta= (mensaje='Alerta',saludo='Holaaaa' ) => alert(saludo+' '+mensaje);

 //imprimirAlert();
 //imprimirAlerta();

 function saludar2(nombre,mostrar){
    const mensaje = `hola ${nombre}`;
    mostrar(mensaje);
 }


 //saludar2("pablo", imprimirConsola);
 saludar2("jony" , imprimirAlert);
 console.log(imprimirConsola);
 console.log(imprimirAlerta);