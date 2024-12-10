const fs = require('node:fs')
// const { promisify } = require('node:util') ---> para modulos nativos que no tienen promesas

console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo.txt', 'utf-8', ( err, data ) => {
    console.log(data)
})


console.log('Haciendo cosas mientras lee el texto')


console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo2.txt', 'utf-8', ( err, data ) => {
    console.log(data)
})
