export async function getApi() {
    const url = 'https://ecorendaapi.herokuapp.com/catadores'
    const response = await fetch(url)
    const dados = await response.json()

    return dados
}

export async function getUser(params) {
    const url = `https://ecorendaapi.herokuapp.com/catadores/email=${params}`
    const response = await fetch(url)
    const dados = await response.json()

    return dados
}
