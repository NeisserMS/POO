// Ejemplo de Abstraccion (es el estado del objeto)
// Abstraccion quiere decir extraer lo del mundo real y plasmarlo en el codigo y tiene como finalidad en centrarse en el uso de dicha clase creada.
/* 
    Tres caarcteristicas de lso objetos:
    - los estados (propiedades en la clase)
    - Los metodos (conocidos como comportamientos)
    - Identidad (cada instancia es unica)
*/

class Smartphone {
    color: string;
    marca: string;
    memoriaRam: number;

    constructor(color: string, marca: string, memoriaRam: number) {
        this.color = color;
        this.marca = marca;
        this.memoriaRam = memoriaRam;
    }

    llamar(): void {
        console.log('llamando');
    }

}

let obj = new Smartphone('Negro', 'Iphone', 32);




