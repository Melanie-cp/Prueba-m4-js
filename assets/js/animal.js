export class Animal {
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

export class Leon extends Animal {
    rugir() {
        console.log("rawr");
    }
}

export class Lobo extends Animal {
    aullar() {
        console.log("auuu");
    }
}

export class Oso extends Animal {
    gruñir() {
        console.log("rauor");
    }
}

export class Serpiente extends Animal {
    sisear() {
        console.log("sssss");
    }
}

export class Aguila extends Animal {
    chillar() {
        console.log("chhhss");
    }
}
