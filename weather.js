#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printHelp, printSuccess } from './services/log.service.js'
import { saveKeyValue } from './services/storage.service.js'

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token)
        printSuccess('Token successfuly saved')
    } catch (error) {
        printError(error.message)
    }

}


async function startCLI() {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        await saveKeyValue('city', args.s)
    }
    if (args.t) {
        return saveToken(args.t)
    }
}

startCLI()
