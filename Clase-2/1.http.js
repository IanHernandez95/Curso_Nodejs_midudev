const http = require('node:http')
const fs = require('node:fs')

const desirePort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.end('<h1>Bienvenido a mi Página de Inicio</h1>')
  } else if (req.url === '/imagen-bonita.png') {
    fs.readFile('./gran-gato-silla_1385-1504.png', (err, data) => {
      if (err) {
        res.statusCode = 500 // Internal Server Error
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // Not Found
    res.end('<h1>Página no encontrada</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desirePort, () => {
  console.log(`server listening in http://localhost:${desirePort}`)
})
