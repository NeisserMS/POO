
interface IUserExtraInformation {
    phoneNumber: string;
}

abstract class User {
    public profession: string;

    constructor(profession: string) {
        this.profession = profession;
    }

    goToWork(): void {

    }
}


class Doctor implements IUser, IUserExtraInformation {
    constructor(phoneNumber: string) {
        this.profession = 'Doctor';
        this.phoneNumber = phoneNumber;
    }

    phoneNumber: string;
    profession: string;
    goToWork(): void {

    }
}


class Police implements IUser {
    constructor() {
        this.profession = 'Doctor';
    }

    profession: string;
    goToWork(): void {

    }
}

function printProfession(model: IUser): void {
    console.log(model.profession);
}

let police = new Police(),
    doctor = new Doctor('999999');

printProfession(police);
printProfession(doctor);




