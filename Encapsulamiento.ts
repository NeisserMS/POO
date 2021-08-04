/* 
Encapsulamiento:

No toda la informacion de nuestro objeto es relevante y/o accesible para el usuario para su modificacion

Ejemplo: nos importa saber del celular cuanto nso queda de bateria, la informacion
que nos interresa saber de ella (modo lectura) osea un get y para modificar ese valor
no debrria hacerse directamente, no podemos acceder a la propiedad y modificarlo, si l hacemos de esta manera
estaremos creando un objeto que es propenso a errores.
*/

class Smartphone2 {
    private color : string;
    private marca : string;
    private _bateria: number;

    constructor(color : string, marca: string){  
        this.color = color;
        this.marca = marca;
        this._bateria = 100; // lo incializamos directamente porque es opcional        
    }

    makeApthoneCall() : void { 

        if(this._bateria === 0){

            throw "El celular no cuenta con la bateria necesaria";
        }

        this._bateria -= 10; // cada vez que se hace una llamada se consumira 10 de bateria

    }

  

    recharge(){
        this._bateria = 100;
    }
}

/*
let obj2 = new Smartphone2 ('Negro', 'Iphone');
obj2.makeApthoneCall();
obj2.makeApthoneCall();
obj2.makeApthoneCall();
obj2.makeApthoneCall();
obj2.makeApthoneCall();
obj2.makeApthoneCall();
obj2.makeApthoneCall();
obj2.makeApthoneCall();
obj2.makeApthoneCall();
obj2.makeApthoneCall();
obj2.makeApthoneCall();

*/

/* Modificaremos lso valores del objeto directamente,
lo cual hemos corrumpido el objeto, entonces para esto usaremos los
modificadores de acceso (existen tanto para los metodos como para las propiedades).
Al cambiar los campos a privados ya no podra funcionar el codigo de abajo porque nos dira
que solo se puede usar en la clase y no fuera de ella. 

obj2.color = 'blanco';
obj2.marca = 'sansumg';

 */

// como no podemos acceder directamente a la propiedad bateria, hacemos uso de los getters.
// solo se puede modificar a traves de los metodos set y get






