const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

const desirePort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('Request recibica')
  res.end('Hola mundo')
})

findAvailablePort(desirePort).then(port => {
  server.listen(port, () => {
    console.log(`server listening in http://localhost:${port}`)
  })
})
