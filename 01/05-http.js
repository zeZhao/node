const http = require('http')
const fs = require('fs')

const server = http.createServer((requst, response) => {
  const { url, method, headers } = requst
  if (url === '/' && method === 'GET') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-type': 'text/plain;charset=utf-8' })
        response.end('500 服务器错误')
      }
      response.statusCode = 200
      response.setHeader('Content-Type', 'text/html')
      response.end(data)
    })
  } else if (url === '/list' && method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify([{ name: '小明' }, { name: '小王' }]))
  } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
    fs.createReadStream('.' + url).pipe(response)
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/plain;charset=utf-8')
    response.end('404 找不到页面!!')
  }
  //   console.log('receive...')
  // response.end(`<h1>a response....</h1>`)
})
server.listen(3000)