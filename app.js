// requires
const argv = require('./config/yargs').argv;
const colors = require('colors');

const {crearArchivo, listarTabla, wee} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
            
    break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
    break;

    case 'wee':
        wee();
    break;

    default:
        console.log('Comando no reconocido');
}
