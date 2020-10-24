const nome  = 'Rebeca';
const concatencao = 'Olá ' + nome + '!';
const template =`
    Olá 
    ${nome}!`;

console.log(concatencao, template);


// expressoes
console.log(`1 + 1 = ${1 + 1}`); //   ` ` = templete String

const up = texto => texto.toUpperCase(); //toUpperCase deixa maiúsculo 
console.log(`Ei.. ${up('cuidado')}!`);
