export function getArgs(args) {
    const result = {}
    const [executer, file, ...rest] = args
    rest.forEach((value, index, array) => {
        if (value.startsWith('-')) {
            if (index == array.length - 1) {
                result[value.substring(1)] = true
            } else if (!array[index + 1].startsWith('-')) {
                result[value.substring(1)] = rest[index + 1]
            } else {
                result[value.substring(1)] = true
            }
        }
    })
    return result
}
