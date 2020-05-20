const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            //.then(archivo => console.log('Archivo creado: ' + archivo))
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ' + archivo))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//let base = 'abc';

//console.log(argv.base);
//console.log(argv.limite);

//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log(base);