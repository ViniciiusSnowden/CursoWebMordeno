function teste1(num){
    if(num > 7)
        console.log(num)
        console.log('Final') // <--- fora do bloco do if , apenas a primeir instrução é válida.
}

teste1(6)
teste1(8)



function teste2(num){
    if(num > 7);  // ; está fechando o bloco fazendo o IF ficar sem instruções. Evitar usar em entrutrar de controle. 
    
    { 
        console.log(num)
    }
}
