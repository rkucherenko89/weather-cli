import axios from "axios"
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js"

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

export const getWeather = async () => {
    const city = await getKeyValue(TOKEN_DICTIONARY.city)
    if (!city) {
        throw new Error('City doesn\'t set. Use command -c [CITY]')
    }
    const token = await getKeyValue(TOKEN_DICTIONARY.token)
    if (!token) {
        throw new Error('API key doesn\'t set. Use command -t [API_KEY]')
    }
    const { data } = await axios.get(baseUrl, {
        params: {
            units: 'metric',
            lang: 'ua',
            q: city,
            appid: token
        }
    })
    return data
} 
