#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printHelp } from './services/log.service.js'


function startCLI() {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        // setup city
    }
    if (args.t) {
        // save token
    }
}

startCLI()
