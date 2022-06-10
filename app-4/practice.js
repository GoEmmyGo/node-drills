const fs = require('fs')
const path = require('path')

fs.appendFile(path.join("./", "text.txt"), "Hello World!", (err) => {err ? console.log(err) : console.log('append success!')})

fs.readFile('../text.txt', 'utf8', (err, data) => {err ? console.log(err) : console.log(data)})

fs.unlink('../text.txt', (err) => {err ? console.log(err) : console.log('deletion success!')})

fs.rename("./text.txt", "./NewName.txt", (err) => {err ? console.log(err) : console.log('rename success!')})

fs.writeFile('../text.txt', 'New String', (err) => {err ? console.log(err) : console.log('writing success!')})

fs.unlink('../NewName.txt', (err) => {err ? console.log(err) : console.log('deletion success!')})



