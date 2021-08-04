/*     
    Polimorfismo:
    
    Poli = Multiples
    fismo = Formas

    Las multiples formas que puede obtener un objeto si comparte la misma clase
    o interfaz.

    Por ejemplo nuestra clase base es un usuario y puede responder a las diversas formas que peude ser alterada, como un obrero, chef, profesor, etc

    La clase abstractas estan limitadas a una sola implementacion, en este caso no existe el concepto de herencia multiple.
    Por lo tanto solo puede heredar de una sola clase.

    las imterfaces n otienen limite de implementacion, es decir una clase peude disponer de N interfaces

    */

    class User {

        private profession: string;

        constructor(profession: string){
            this.profession = profession;
        }

        goToWork(): void {

        }

    }

    class Doctor extends User {

        constructor(){
            super('Doctor');
        }
        
    }

    class Police extends User {
        constructor(){
            super('Policia');
        }
    }

  

    /* 
    Yo quiero que solo trabajen con las clases derivadas, entonces a la clase principal lo volvere abstracta, y cuando quiera instanciar la clase user
    nos daremos cuenta de que no se puede porque es abstracta.

    Entonces uso la clase abstracta para definir unos comportamientos base.
    Por ejemplo el metodo gotowork (ir a trabajar), ambos pueden usarlo.
    

    */


