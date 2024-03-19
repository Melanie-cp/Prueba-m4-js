export function mostrarDetalleAnimal(animal) {
    const modalAnimal = document.querySelector('#modalAnimal');
    const modalBody = modalAnimal.querySelector('.modal-body');

    const contenidoDetalle = `
        <div class="text-center">
            <img src="${animal.imagen}" class="img-fluid" alt="${animal.nombre}">
            <h5 class="texto-blanco">${animal.nombre}</h5>
            <p class="texto-blanco">Edad: ${animal.edad}</p>
            <p class="texto-blanco">Comentarios: ${animal.comentarios}</p>
        </div>
    `;

    modalBody.innerHTML = contenidoDetalle;
    const modal = new bootstrap.Modal(modalAnimal);
    modal.show();
}
