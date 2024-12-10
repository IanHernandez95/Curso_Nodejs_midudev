const path = require('node:path')

// barra separadora segun SO
console.log(path.sep)

// unir directorios con path.join
const filePath =  path.join('content','subfolder','archivo.txt')
console.log(filePath)

// consultar nombre del archivo con y si extension
const base = path.basename('/tmp/sectres/carpetaoculta/password.txt')
console.log(base)

const fileName = path.basename('/tmp/sectres/carpetaoculta/password.txt','.txt')
console.log(fileName)

// extension de un archivo
const extension = path.extname('mi.super.imagen.jpg')
console.log(extension)