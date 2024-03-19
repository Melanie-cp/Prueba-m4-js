class Animal {
    #nombre
    #edad
    #img
    #comentarios
    #sonido

    constructor(nombre, edad, img, comentarios, sonido) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    get nombre() {
        return this.#nombre
    }

    get edad() {
        return this.#edad
    }

    get img() {
        return this.#img
    }

    get comentarios() {
        return this.#comentarios
    }

    get sonido() {
        return this.#sonido
    }

    set comentarios(newComentarios) {
        this.#comentarios = newComentarios
    }

    pintarHTML() {
        console.log(`estoy pintando a ${this.nombre}`)
    }

}


class Leon extends Animal {
    rugir() {
        console.log("rawr")
    }
}

class Lobo extends Animal {
    aullar() {
        console.log("auuu")
    }
}

class Oso extends Animal {
    gruñir() {
        console.log("rauor")
    }
}

class Serpiente extends Animal {
    sisear() {
        console.log("sssss")
    }
}

class Aguila extends Animal {
    chillar() {
        console.log("chhhss")
    }
}


const getData = async () => {
    try {
        const response = await fetch("animales.json")
        console.log(response)
        if (!response.ok) {
            console.log("no se encuentra el animal")
            throw {
                code: 404,
                message: "no se encuentra el animal"
            }
        }
        const data = await response.json()
        console.log(data)
        console.log(data.animales)

    } catch (error) {
        console.log(error)
    }
}

getData()

const Tabla = document.querySelector("#Tabla")
const Animales = document.querySelector("#Animales")
const animalFormulario = document.querySelector("#animalFormulario")
const animalSeleccion = document.querySelector("#animalSeleccion")
const edadSeleccion = document.querySelector("#edadSeleccion")
const comentarios = document.querySelector("#comentarios")
const preview = document.querySelector("#preview")
const btnRegistrar = document.querySelector("#btnRegistrar")
const audioPlayer = document.querySelector("#audioPlayer")
const modalAnimal = document.querySelector("#modalAnimal")


animalFormulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    console.log("me estas procesando")
    console.log(animalSeleccion.value)
    console.log(edadSeleccion.value)
    console.log(comentarios.value)
})
