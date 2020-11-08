const url = 'https://covid19.mathdro.id/api'


export const  getOverall = async () => {
    const response = await fetch(url)
    const data = await response.json()

    return data
}


export const countries = async () => {
    const response = await fetch (`${url}/countries`)
    const data = await response.json()

    return data.countries
}

export const countryData = async (c) => {
    console.log(c)
    const response = await fetch (`${url}/countries/${c}`)
    const data = await response.json()

    return data
}

export const dailySummary = async() => {
    const response = await fetch(`${url}/daily`)
    const data = await response.json()

    return data
}