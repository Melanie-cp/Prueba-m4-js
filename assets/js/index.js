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
})
