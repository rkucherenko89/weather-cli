#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js'
import { printHelp, printSuccess, printError, printWeather } from './services/log.service.js'
import { TOKEN_DICTIONARY, saveKeyValue } from './services/storage.service.js'

const saveToken = async (token) => {
    if (!token.length) {
        return printError('Please provide token value')
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Token successfuly saved')
    } catch (error) {
        printError(error.message)
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        return printError('Please provide city name')
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess('City successfuly saved')
    } catch (error) {
        printError(error.message)
    }
}

async function getForecast() {
    try {
        const weather = await getWeather()
        printWeather(weather)
    } catch (error) {
        if (error?.response?.status == 404) {
            printError('City name is not valid. Please use command -c [CITY]')
        } else if (error?.response?.status == 401) {
            printError('Token is not valid. Please use command -t [API_KEY]')
        } else {
            printError(error.message)
        }
    }
}

async function startCLI() {
    const args = getArgs(process.argv)
    if (args.h) {
        return printHelp()
    }
    if (args.c) {
        return saveCity(args.c)
    }
    if (args.t) {
        return saveToken(args.t)
    }
    return getForecast()
}

startCLI()
