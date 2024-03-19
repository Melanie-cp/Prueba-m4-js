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

    } catch (error) {
        console.log(error)
    }
}

getData()