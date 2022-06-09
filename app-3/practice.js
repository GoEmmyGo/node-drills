const http = require('http')
const addTwoFunctions = require('./addTwoFunctions.js')
const {minusOne, timesThree, ageText} = require('./functions.js')

const requestListener = ((req, res) => {
    res.end("Listen up!")
})

const server = http.createServer(requestListener)

server.listen(3002, () => {
    console.log("Served")
})

console.log(addTwoFunctions(1))
console.log(minusOne(4))
console.log(timesThree(3))
console.log(ageText(31))