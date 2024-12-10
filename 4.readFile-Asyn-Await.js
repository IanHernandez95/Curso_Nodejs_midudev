const { readFile } = require('node:fs/promises')

// IIFE = Inmediate Invoked Function Expression

;(
   async () => {
        console.log('Leyendo el primer archivo ...')
        const text = await readFile('./archivo.txt', 'utf-8')
        console.log(text)

        console.log('Haciendo cosas mientras lee el texto')


        console.log('Leyendo el primer archivo ...')
        const secondText = await readFile('./archivo2.txt', 'utf-8')
        console.log(secondText)
    }
)()



