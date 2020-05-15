// requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    
    for(let i = 1; i <= limite; i++){
        if(i === 1){
            console.log('====================='.green);
            console.log(`=====Tabla del ${base}=====`.magenta);
            console.log('====================='.green);
        }

        console.log(`${base} * ${i} = ${base * i}`);
    }

}

// forma2
// module.export crearArchivo = (base) =>{
let crearArchivo = (base, limite = 10) =>{
    console.log(base);
    return new Promise((resolve,reject) => {
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            
            return;
        }

        let data = '';

        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-hasta-${limite}.txt`, data, (err) => {
        if (err){
            reject(err);
        }else{
            resolve(`tabla-${base}-hasta-${limite}.txt`.green);
        }

        console.log(`El archivo tabla-${base}-hasta-${limite}.txt ha sido creado`);
        });
    });
}

let wee = () => {
    console.log('la función wee!');
}

// forma1
module.exports = {
    crearArchivo,
    listarTabla,
    wee
}