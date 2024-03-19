import Animal, { Leon, Lobo, Oso, Serpiente, Aguila } from './animal.js';
import { mostrarDetalleAnimal } from './modal.js';

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

const Animales = document.querySelector("#Animales");
const animalFormulario = document.querySelector("#animalFormulario");
const animalSeleccion = document.querySelector("#animalSeleccion");
const edadSeleccion = document.querySelector("#edadSeleccion");
const comentarios = document.querySelector("#comentarios");
const preview = document.querySelector("#preview");

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

    const imagenAnimal = animalDiv.querySelector('img');
    imagenAnimal.addEventListener('click', () => {
        mostrarDetalleAnimal(animal);
    });
}

animalFormulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombreAnimal = animalSeleccion.value.trim();
    const edadAnimal = edadSeleccion.value.trim();
    const comentarioAnimal = comentarios.value.trim();

    if (!nombreAnimal || !edadAnimal || !comentarioAnimal) {
        alert("Por favor, complete todos los campos para agregar el animal.");
        return;
    }

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
