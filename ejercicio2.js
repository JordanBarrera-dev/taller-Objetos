

class Contenido{

    constructor(titulo, genero, anio){

        this.titulo = titulo
        this.genero = genero
        this.anio = anio
        this.disponible = true

    }

    ficha(){

         return `titulo: ${this.titulo} genero: ${this.genero} año: ${this.anio}`
    }

    retirar(){

        this.disponible = false
        return "retirada"
    }
    estado(){
        return this.disponible ? "disponible": "retirado"
        
    }


}
    