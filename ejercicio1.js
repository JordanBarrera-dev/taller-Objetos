class Empleado{
    constructor(nombre, cargo, salario){
        this.nombre = nombre
        this.cargo = cargo
        this.salario = salario
        this.activo = true
    }

    presentarse(){
    
        return "hola, soy " + this.nombre + " y mi cargo es " + this.cargo
    
    }
    calcularSalarioAnual(){

        return "mi salario es " + this.salario * 12
    }
    desactivar(){
        this.activo = false
        return this.nombre + " ha sido desactivado"
    }
    info(){
        let estado = this.activo ? "cuenta activa": "deshabilitado"
        return this.nombre + " " + this.cargo + " " + this.salario + " " + estado
    }
}


let empleado1 = new Empleado("Pedrito","desarrollador",1000)
let empleado2 = new Empleado("Juan","desarrollador",1500)
let empleado3 = new Empleado("Sofia","desarrollador",1200)

console.log(empleado1.presentarse())
console.log(empleado1.calcularSalarioAnual())
console.log(empleado1.info())

console.log(empleado2.presentarse())
console.log(empleado2.calcularSalarioAnual())
console.log(empleado2.info())

console.log(empleado3.presentarse())
console.log(empleado3.calcularSalarioAnual())
console.log(empleado3.info())
console.log("=======================")
console.log(empleado1.desactivar())
console.log(empleado1.info())


class Lider extends Empleado{

    constructor(nombre, salario, equipo){
        super(nombre, "lider de equipo", salario)
        this.equipo = equipo
    }

    presentarEquipo(){

        return this.equipo.join("|")
    }

    agregarMiembro(nombre){
    this.equipo.push(nombre)
    return nombre + " ha sido añadido al equipo"
    }
    info(){
        let estado = this.activo ? "activo": "desactivado"
        return this.nombre + " tu cargo es " + this.cargo + " con un salario de " + this.salario + " " + estado + "integrantes de tu equipo son " + this.equipo.join("|")
    }
}

let lider1 = new Lider("maria",2000, ["Juan","Pedro","Andrea"])
let lider2 = new Lider("diana",2000, ["Jordan","Miriam","Samuel"])
console.log("===========LIDERES============")
console.log(lider1.calcularSalarioAnual())
console.log(lider1.desactivar())
console.log(lider2.calcularSalarioAnual())
console.log(lider2.desactivar())

console.log("=======================")
console.log(lider1.presentarEquipo())
console.log(lider1.agregarMiembro("Karen"))
console.log(lider1.presentarEquipo())

let empleado4 = new Empleado("Quiriat","desarrollador",1100)
let empleado5 = new Empleado("Yesica","desarrollador",1700)
let empleados = [empleado2,empleado3,empleado4, empleado5, lider1, lider2]
let total_mensual = 0
    for (let i of empleados) {
        total_mensual += i.salario
}
total_anual = total_mensual * 12

console.log("Total mensual: " + total_mensual)
console.log("Total anual : " + total_anual)


console.log("===================================")
console.log(lider1.presentarEquipo())
console.log(lider2.presentarEquipo())


console.log(lider1.info())
console.log(lider2.info())





