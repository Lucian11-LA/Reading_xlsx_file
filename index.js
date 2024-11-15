const xlsx = require('node-xlsx').default;
const fs = require('fs');

const path = './files/data/dados.xlsx';

try{
    const workSheet  = xlsx.parse(fs.readFileSync(path));

    console.log(workSheet);
}catch(error){
    console.log('Erro ao ler arquivo .xlsx');
}