// Clase para representar una cuenta de usuario
class Account {
    constructor(name, document, email, password) {
        this.name = name;
        this.document = document;
        this.email = email;
        this.password = password;
    }
}

// Clase para representar un vehículo
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

// Clase para representar un usuario con un vehículo asociado
class User extends Account {
    constructor(name, document, email, password, vehicle) {
        super(name, document, email, password);
        this.vehicle = vehicle;
    }

    // Método para mostrar la información del usuario
    showInfo() {
        console.log("**** User ****");
        console.log(`Nombre: ${this.name}`);
        console.log(`Document: ${this.document}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Password: ${this.password}`);
        console.log(`Vehículo: ${this.vehicle.brand} ${this.vehicle.model}`);
        console.log("-----------------------------");
    }
}

// Crear instancias de usuarios y vehículos
const vehicle1 = new Vehicle("Toyota", "Corolla");
const user1 = new User(
    "Damian Rios",
    "KLOIS12536",
    "damian@platzi.pe",
    "523698563",
    vehicle1
);

const vehicle2 = new Vehicle("UberX", "Generic");
const user2 = new User(
    "Marcos Caceres",
    "DFG236589",
    "marcosc@platzi.pe",
    "569324",
    vehicle2
);

const vehicle3 = new Vehicle("Generic", "Generic");
const user3 = new User(
    "Andrea Sanchez",
    "ASD123365214",
    "andrea@platzi.pe",
    "2365214",
    vehicle3
);

// Mostrar la información de los usuarios
user1.showInfo();
user2.showInfo();
user3.showInfo();