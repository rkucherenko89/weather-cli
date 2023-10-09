import chalk from 'chalk'
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
        -c [CITY] - setup city
        -t [API_KEY] - save new token`
    )
}

export function printWeather(weather) {
    console.log(dedent
        `${chalk.bgYellowBright(' WEATHER ')} Погода у місті ${weather.name}: ${weather.weather[0]?.description} ${weather.main?.temp}°C
        Відчувається як ${weather.main?.feels_like}°C
        Швидкість вітру: ${weather.wind?.speed} м/с 
        Вологість: ${weather.main?.humidity}%`
    )
}
