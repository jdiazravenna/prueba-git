
export const fetchPeliculas = async () => {

    const url = 'https://67074c70a0e04071d229b91d.mockapi.io/peliculas'

    const response = await fetch(url)
    // console.log(response)
    return await response.json()
}

export const createPelicula = async (data) => {
    const url = 'https://67074c70a0e04071d229b91d.mockapi.io/peliculas'

    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url, options)

    return await response.json()
}

export const updatePelicula = async (data) => {
    const url = `https://67074c70a0e04071d229b91d.mockapi.io/peliculas/${data.id}`

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: data.nombre, 
            Imagen: data.Imagen,
            estreno: data.estreno,
            genero: data.generoId,
            resumen: data.resumen
        })
    }
    const response = await fetch(url, options)
    return await response.json()
}

export const removePelicula = async (id) => {
    const url = `https://67074c70a0e04071d229b91d.mockapi.io/peliculas/${id}`

    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)

    return await response.json()

}