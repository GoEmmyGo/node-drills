// Recall that you must use require with a file that has a .js extension and you can use import with a file that has a .mjs extension
const http = require('http')
// We need to save the result of running the .createServer method. We store the result in server
const requestListener = (req, res) => {
    res.end("I'm listening")
    console.log("I'm listening")
}

const server = http.createServer(requestListener)

// Now that we have a server running. Let's have our computer listen for changes.
server.listen(3001, () => {
    console.log("I'm working")
})


//Running your file: Make sure that your path is correct! 

//Questions to ask: What file do I want to run? How do I access that file from where I am at currently in my terminal/bash? 

//`node node-drills-part-1/02/practice.js` (depending on where you are currently)