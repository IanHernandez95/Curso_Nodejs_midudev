import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Informacion del sistema opertivo')
console.log('--------------------------------')

console.log('nombre del sistema operativo', platform())
console.log('version del sistema operativo', release())
console.log('Arquitectura ', arch())
console.log('CPUs', cpus())
console.log('memoria libre', freemem() / 1024 / 1024)
console.log('memoria total', totalmem() / 1024 / 1024)
console.log('uptime', uptime() / 60 / 60)
