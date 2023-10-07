import os from 'os'
import fs from 'fs'
import path from 'path'

const filePath = path.join(os.homedir(), 'weather-cli-data.json')

export async function saveKeyValue(key, value) {
    const fileExists = await isExist(filePath)
    let data = {}
    if (fileExists) {
        const file = await fs.promises.readFile(filePath)
        data = JSON.parse(file)
    }
    data[key] = value
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2))
}

export async function getKeyValue(key) {
    let value
    const fileExists = await isExist(filePath)
    if (fileExists) {
        const file = await fs.promises.readFile(filePath)
        const data = JSON.parse(file)
        value = data[key]
    }
    return value
}

async function isExist(path) {
    try {
        await fs.promises.access(path)
        return true
    } catch (error) {
        return false
    }
}
