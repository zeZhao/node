const fs = require('fs')
const rs = fs.createReadStream('./xing.jpg')
const ws = fs.createWriteStream('./xing2.jpg')
rs.pipe(ws)
