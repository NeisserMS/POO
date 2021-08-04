class Smartphone3 {
    private color : string;
    private marca : string;
    private _bateria: number;

    constructor(color : string, marca: string){  
        this.color = color;
        this.marca = marca;
        this._bateria = 100;       
    }

    makeApthoneCall() : void { 

        if(this._bateria === 0){

            throw "El celular no cuenta con la bateria necesaria";
        }

        this._bateria -= 10;

    }

  
    recharge(){
        this._bateria = 100;
    }
}

/*
let obj3 = new Smartphone2 ('Negro', 'Iphone');
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

class Android extends Smartphone3 {
    constructor(color: string){
        super(color, 'Android');
    }
}

class Iphone extends Smartphone3 {
    constructor(color:string){ // el constructor, solo lo que vas a necesitar, marca ya no porque se sobreentiende
        super(color, 'Iphone'); // Inicializa el constructor de la clase base
    }
}

let android = new Android('red');
let iphone = new Iphone('azul')

android.makeApthoneCall();
iphone.recharge(); 

// En resumen la herencia es una clase base para la reutilizacion de codigo