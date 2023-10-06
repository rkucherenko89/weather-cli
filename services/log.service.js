import chalk from "chalk"
import dedent from 'dedent'

export function printError(error) {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error)
}

export function printSuccess(message) {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message)
}

export function printHelp() {
    console.log(dedent
        `${chalk.bgCyan(' HELP ')}
        Without parameters - weather output
        -h - for help
        -s [CITY] - setup city
        -t [API_KEY] - save new token`
    )
}
