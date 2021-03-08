/* alert('Hola Mundo');
//Variables
var nombre = "Daniel Galvan"
var altura = 190;
var concatenacion = nombre + "  " + altura

var datos = document.getElementById("datos");
//Templates de strings de HTML, mostrar una variable 
//dentro de un codigo de HTML dinamicamente

datos.innerHTML = `
<h1>Hola soy una caja de datos</h1>
<h2>Mi nombre es: ${nombre} </h2>
<h3> ${altura}  </h3>
` ;

//Estrcuturas de control

if (altura >= 190) {

    datos.innerHTML += `<h1>Eres una persona alta</h1>`
    
} else {

    datos.innerHTML += `<h1>Eres una persona bajita</h1>`

}

for (var i = 0; i <= 20 ; i++) {
    //Bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año </h2>" + i;
    
} */

//Funciones



function MuestraMiNombre(nombre, altura) {

    var misdatos = 
    `<h1>Hola soy una caja de datos</h1>
    <h2>Mi nombre es: ${nombre} </h2>
    <h3> ${altura}  </h3>
    ` ;

return misdatos;
}


function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Danie", 165);
}

imprimir();

var nombres = ["Daniel", "Ricardo", "Pedro"];
//alert (nombres [1]);
document.write("<h1> Listado de Nombres </h1>")

/*

for (i = 0; i < nombres.length; i++) {
     document.write(nombres[i]+ "</br>");
    
}

nombres.forEach(function(nombre)  {

    document.write(nombre + "</br>");
    
});
*/
nombres.forEach((nombre) => {
    
    document.write(nombre + "</br>");

});

//Objetos JSON


//Fuciones y metodo dentro del objeti JSON

var coche = {

    modelo: "Mercedes Calse b",
    maxima: 500 ,
    antiguiedad: 2020,
    mostrarDatos(){
        console.log (this.antiguiedad, this.maxima, this.modelo);
    },
};

document.write("<h1> Modelo del Coche:" + coche.modelo + "</h1>");
coche.mostrarDatos();
console.log(coche);

//Las pormesas se hacen cuando hay peticiones asincronas
// tipo ajax o demoradas o que no pueden no devolver eresultados

//Una promesa es una valr que puede estar disponible ahora
// mas tarde en el futiro o nunca podemos capturar la respuesta positiva, negatia o que no llego

var saludar = new Promise ((resolve, reject) => { 

    setTimeout(() => {
        let saludo = "Hola Buenas a todos!!";
        saludo = false;
        if (saludo){

            resolve(saludo);
        }
        else {
            reject("No hay saludo disponible");
        }
        
    }, 2000 );


});

saludar.then((resultado)=>{

    alert(resultado);

})
.catch(err => {

    alert(err);

});