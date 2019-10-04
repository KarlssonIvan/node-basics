const fs = require('fs')
// const book = {
//     title: "title",
//     author: "author"
// }

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Ivan'
data.age = 36
const bookJson = JSON.stringify(data)
fs.writeFileSync('1-json.json', bookJson)
