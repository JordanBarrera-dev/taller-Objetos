

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

class Pelicula extends Contenido{

    constructor(titulo, genero, anio, duracion){
      super(titulo, genero, anio)
    this.duracion = duracion
    }

    duracionFormateada(){

    let duracion_horas = Math.floor(this.duracion / 60)
    let duracion_minutos = this.duracion % 60
    return duracion_horas + "h " + duracion_minutos + "m"
    }
    ficha(){
    let duracion_horas = Math.floor(this.duracion / 60)
    let duracion_minutos = this.duracion % 60
    let estadoActual = this.disponible ? "disponible": "no disponible"
    return `titulo: ${this.titulo} genero: ${this.genero} año: ${this.anio} duracion ${duracion_horas} h con ${duracion_minutos} m está ${estadoActual}`
    }

    
}
class Serie extends Contenido{

    constructor(titulo, genero, anio, temporadas){
    super(titulo, genero, anio)
    this.temporadas = temporadas
    }
    episodiosPorTemporada = 0

    registrarEpisodios(cantidad){
    this.episodiosPorTemporada = cantidad  
    }
    totalEpisodios(){
    this.cantidad_total = this.temporadas * this.episodiosPorTemporada
    
    return this.cantidad_total
    }


    ficha(){
    return `titulo: ${this.titulo} genero: ${this.genero} año: ${this.anio} temporadas ${this.temporadas} y ${this.totalEpisodios()} episodios está ${this.estado()}`
    }

}

let pelicula1 = new Pelicula("la peli", "terror", "2026", 129)
let pelicula2 = new Pelicula("la peli 2 -la venganza-", "terror", "2027", 250)
let pelicula3 = new Pelicula("la peli 3 -el regreso-", "terror", "2099", 195)
let serie1 = new Serie("superserie", "romance", 2070, 4)
let serie2 = new Serie("los fastasticos", "romance", 2090, 9)
let serie3 = new Serie("godfather", "suspenso", 2099, 6)


console.log(pelicula2.retirar())
console.log(serie1.retirar())

pelisyseries = [pelicula1, pelicula2, pelicula3, serie1, serie2, serie3]
   for (let i = 0; i < pelisyseries.length; i ++){
    if (pelisyseries[i].disponible === true){
        console.log(pelisyseries[i].ficha())
        }
   }


