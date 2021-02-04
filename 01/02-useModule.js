const os = require('os')
const fs = require('fs')

// const mem = os.freemem() / os.totalmem() * 100
// // console.log(`内存占用率：${mem.toFixed(2)}%`)
// // console.log(os.uptime())
// console.log(fs)






const repo = 'github:su37josephxia/vue-template'
const desc = 'test'
const { clone } = require('./download')

clone(repo, desc)


// download(repo, desc, err => {
//   if (err) {
//     process.fail()
//   } else {
//     process.succeed()
//   }
//   console.log(err ? '0' : '1')
// })