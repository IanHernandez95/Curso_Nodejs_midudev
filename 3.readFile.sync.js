const fs = require('node:fs')
// const { promisify } = require('node:util') ---> para modulos nativos que no tienen promesas

console.log('Leyendo el primer archivo ...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log(text)


console.log('Haciendo cosas mientras lee el texto')


console.log('Leyendo el primer archivo ...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(secondText)
