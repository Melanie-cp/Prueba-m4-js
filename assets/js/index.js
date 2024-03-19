class Animal {
    #nombre
    #edad
    #imagen
    #comentarios
    #sonido

    constructor(nombre, edad, imagen, comentarios, sonido) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#imagen = imagen;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    get nombre() {
        return this.#nombre
    }

    get edad() {
        return this.#edad
    }

    get imagen() {
        return this.#imagen
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
    pintarHTML(elemento) {
        console.log(`estoy pintando a ${this.nombre}`)
        elemento.innerHTML =
            //     `<div class="card" style="width: 18rem;">
            //     <img src="${this.img}" class="card-img-top" alt="...">
            //     <div class="card-body">
            //     <a href="#" class="btn btn-primary">Go somewhere</a>
            //     </div>
            //   </div>`
            `<img src="${this.imagen}"/> <p>${this.nombre} ${this.edad} ${this.comentarios} ${this.sonido}</p>`
    }

    rugir() {
        console.log("rawr")
    }
}

class Lobo extends Animal {
    pintarHTML() {
        console.log(`estoy pintando a ${this.nombre}`)
    }

    aullar() {
        console.log("auuu")
    }
}

class Oso extends Animal {
    pintarHTML() {
        console.log(`estoy pintando a ${this.nombre}`)
    }

    gruñir() {
        console.log("rauor")
    }
}

class Serpiente extends Animal {
    pintarHTML() {
        console.log(`estoy pintando a ${this.nombre}`)
    }

    sisear() {
        console.log("sssss")
    }
}

class Aguila extends Animal {
    pintarHTML() {
        console.log(`estoy pintando a ${this.nombre}`)
    }

    chillar() {
        console.log("chhhss")
    }
};

let animales = [];

(async () => {
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
        animales = data.animales
        // console.log(data)
        // console.log(data.animales)

    } catch (error) {
        console.log(error)
    }
})();


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

    // console.log(animalSeleccion.value)
    // console.log(edadSeleccion.value)
    // console.log(comentarios.value)

    // console.log(animales)

    const animalEncontrado = animales.find((item) => item.name.toLowerCase() === animalSeleccion.value.toLowerCase())

    switch (animalSeleccion.value) {
        case "Leon":
            const leon = new Leon(animalEncontrado.name, edadSeleccion.value, animalEncontrado.imagen, comentarios.value, animalEncontrado.sonido)
            leon.pintarHTML(Animales)
            leon.rugir()
            break;
        case "Lobo":
            break;
        case "Oso":
            break;
        case "Serpiente":
            break;
        case "Aguila":
            break;
    }
})
