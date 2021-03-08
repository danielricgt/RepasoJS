//Las clases son un molde que me va a permitir generar objetos de un tipo concreto
//similares uno de otros

class Coche {

    //El contecuutor para crear diferentes propiedades dentro de la calse
    //METODO PRINCIPAL QUE SE VA EJECUTAR CUANDO UNA CLASE SE CARGA

    constructor(modelo, velocidad, antiquedad){
        //aqui puedo cargar las propiedades
        // o oincluso metodos que asisnen valores 
        // a estas propiedades
        this.modelo= modelo;
        this.velocidad= velocidad;
        this.antiguedad = antiquedad;
        


    }
    //luego ahay meotods que son las acciones o funciones
    //que es capaz de hacer el objeto cuando yo lo cree
    aumentarVelocidad(){
        this.velocidad += 1;
    }

    reducirVelocidad(){
        this.velocidad -= 1;
    }
}
var coche1  = new Coche("mercedes", 200, 2017);
var coche2  = new Coche("mazda",190, 2021);
var coche3  = new Coche("renault",200, 2017);

console.log(coche1);
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();

document.write("<h1> La Velocidad del Coche es " + coche1.velocidad +  "</h1>");

coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();

document.write("<h1> La Velocidad del Coche es " + coche1.velocidad +  "</h1>");

console.log(coche1);

class Autobus extends Coche {

    constructor(modelo, velocidad, antiquedad){
        // palabra clave super para para acceder y llamar funciones del padre de un objeto.
         super(modelo, velocidad, antiquedad);
         //tengo las mismas porpuiedades y metodos y puedo crear otros
         this.altura= 5;


    }

    mostrarAltura(){
        return "La altura de este autobus es: " + this.altura;
    }
}

var autobus1 = new Autobus ("Concorde",160, 2019);
console.log(autobus1.mostrarAltura());
