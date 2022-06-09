//import module
import http from "http"
// Save the result of the createServer() method in a variable named server.
const server = http.createServer((req, res) => {
    res.end("I'm can hear you")
    console.log("I can hear you")
})
// Call the server's listen() method with the port number 3001.
server.listen(3001, () => {
    console.log("I'm working for real")
})