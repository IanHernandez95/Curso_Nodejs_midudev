const os = require('node:os')

console.log('Informacion del sistema opertivo')
console.log('--------------------------------')

console.log('nombre del sistema operativo', os.platform())
console.log('version del sistema operativo', os.release())
console.log('Arquitectura ', os.arch() )
console.log('CPUs', os.cpus())
console.log('memoria libre', os.freemem() /1024 / 1024)
console.log('memoria total', os.totalmem() / 1024 / 1024 )
console.log('uptime', os.uptime())