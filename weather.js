#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"

const startCLI = () => {
    const args = getArgs(process.argv)
    console.log(args)
    if (args.h) {
        // output help
    }
    if (args.s) {
        // setup city
    }
    if (args.t) {
        // save token
    }
}

startCLI()
