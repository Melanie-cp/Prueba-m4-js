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

    pintarHTML(elemento) {
        console.log(`Estoy pintando a ${this.nombre}`);
        elemento.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${this.imagen}" class="card-img-top" alt="...">
                <button class="btn btn-secondary"> <i class="fa-solid fa-volume-high"></i> </button>
            </div>
        `;
    }

    previewAnimal(elemento) {
        console.log(`Mostrando vista previa de ${this.nombre}`);
        elemento.innerHTML = `
            <div class="card" style="width: 50%;">
                <img src="${this.imagen}" class="card-img-top" alt="...">
            </div>
        `;
    }
}

class Leon extends Animal {
    rugir() {
        console.log("rawr");
    }
}

class Lobo extends Animal {
    aullar() {
        console.log("auuu");
    }
}

class Oso extends Animal {
    gruñir() {
        console.log("rauor");
    }
}

class Serpiente extends Animal {
    sisear() {
        console.log("sssss");
    }
}

class Aguila extends Animal {
    chillar() {
        console.log("chhhss");
    }
}

let animales = [];

(async () => {
    try {
        const response = await fetch("animales.json");
        if (!response.ok) {
            console.log("No se encuentra el archivo de animales");
            throw {
                code: 404,
                message: "No se encuentra el archivo de animales"
            };
        }
        const data = await response.json();
        animales = data.animales;

    } catch (error) {
        console.log(error);
    }
})();

const Tabla = document.querySelector("#Tabla");
const Animales = document.querySelector("#Animales");
const animalFormulario = document.querySelector("#animalFormulario");
const animalSeleccion = document.querySelector("#animalSeleccion");
const edadSeleccion = document.querySelector("#edadSeleccion");
const comentarios = document.querySelector("#comentarios");
const preview = document.querySelector("#preview");
const btnRegistrar = document.querySelector("#btnRegistrar");
const audioPlayer = document.querySelector("#audioPlayer");
const modalAnimal = document.querySelector("#modalAnimal");

function agregarAnimal(animal) {

    const animalDiv = document.createElement('div');
    animalDiv.classList.add('animal-card', 'card', 'col-12', 'col-md-4', 'col-lg-3', 'mb-4');


    const contenidoAnimal = `
        <img src="${animal.imagen}" class="card-img-top" >
        <button class="btn btn-secondary"> <i class="fa-solid fa-volume-high"></i> </button>
            
    `;

    animalDiv.innerHTML = contenidoAnimal;
    Animales.appendChild(animalDiv);
    animal.previewAnimal(preview);
}

animalFormulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombreAnimal = animalSeleccion.value;
    const edadAnimal = edadSeleccion.value;
    const comentarioAnimal = comentarios.value;

    const animalEncontrado = animales.find((item) => item.name.toLowerCase() === nombreAnimal.toLowerCase());
    const imagen = `assets/imgs/${animalEncontrado.imagen}`;

    let animal;
    switch (nombreAnimal) {
        case "Leon":
            animal = new Leon(nombreAnimal, edadAnimal, imagen, comentarioAnimal, animalEncontrado.sonido);
            break;
        case "Lobo":
            animal = new Lobo(nombreAnimal, edadAnimal, imagen, comentarioAnimal, animalEncontrado.sonido);
            break;
        case "Oso":
            animal = new Oso(nombreAnimal, edadAnimal, imagen, comentarioAnimal, animalEncontrado.sonido);
            break;
        case "Serpiente":
            animal = new Serpiente(nombreAnimal, edadAnimal, imagen, comentarioAnimal, animalEncontrado.sonido);
            break;
        case "Aguila":
            animal = new Aguila(nombreAnimal, edadAnimal, imagen, comentarioAnimal, animalEncontrado.sonido);
            break;
        default:
            console.log("Animal no reconocido");
            return;
    }

    agregarAnimal(animal);
    animalFormulario.reset();
});
