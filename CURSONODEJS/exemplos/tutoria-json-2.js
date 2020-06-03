const fs = require('fs');

const pessoa = {
    nome: 'Maximilliam',
    sobrenome: 'Araujo',
    idade: '28'
}

const pessoaJSON = JSON.stringify(pessoa);

fs.writeFileSync('pessoas.json', pessoaJSON);

const pessoaContent = fs.readFileSync('pessoas.json');

const pessoaDeVoltaComoObjeto = JSON.parse(pessoaContent.toString());

console.log(pessoaDeVoltaComoObjeto);