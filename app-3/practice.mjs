import http from 'http'
import addTwoFunctions from './addTwoFunctions.js'
import { minusOne, timesThree, ageText } from './functions.js'

const server = http.createServer((req, res) => {
    res.end("Import server")
})

server.listen(3001, () => {
    console.log("Import server up")
})

console.log(addTwoFunctions(1))
console.log(minusOne(4))
console.log(timesThree(3))
console.log(ageText(31))