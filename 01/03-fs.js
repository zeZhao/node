const fs = require('fs')

const data = fs.readFileSync('./download.js')
console.log(data.toString())

fs.readFile('./download.js', (err, data) => {
  if (err) throw err
  console.log(data.toString())
})