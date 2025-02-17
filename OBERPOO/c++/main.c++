#include <iostream>
#include <string>

class Persona {
public:
    std::string nombre;
    int edad;

    Persona(const std::string &nombre, int edad) : nombre(nombre), edad(edad) {}

    void mostrar() const {
        std::cout << "Nombre: " << nombre << ", Edad: " << edad << std::endl;
    }
};

int main() {
    Persona persona("Juan", 30);
    persona.mostrar();
    return 0;
}