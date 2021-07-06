// Ejemplo de Abstraccion (es el estado del objeto)
// de esta manera ya convertimos el onbjeto smartphone de la realidad en una clase
// Abstraccion quiere decir extraer lo del mundo real y plasmarlo en el codigo y tiene como finalidad en centrarse en el uso de dicha clase creada.

class Smartphone {
    color : string;
    marca : string;

    constructor(color : string, marca: string){  // pasamos los valores
        // aqui inicializaremos los valores
        this.color = color;
        this.marca = marca;
        // a traves de this hacemso referencia a las propiedades que tiene el objeto
    }

    makeApthoneCall() : void { // creacion de un metodo para utilizarlo como queramos

    }


}

// Instanciaremos la clase

let obj = new Smartphone ('Negro', 'Iphone');

/* 
tres caarcteristicas de lso objetos:
- los estados (propiedades en la clase)
- Los metodos
- Identidad (cada instancia es unica)

*/


