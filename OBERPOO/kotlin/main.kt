class Persona(val nombre: String, val edad: Int) {
    fun mostrar() {
        println("Nombre: $nombre, Edad: $edad")
    }
}

fun main() {
    val persona = Persona("Juan", 30)
    persona.mostrar()
}