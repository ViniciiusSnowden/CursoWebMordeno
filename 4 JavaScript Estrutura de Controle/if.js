function soBoaNota(nota){
    if(nota => 7){
        console.log("Você foi aprovado, sua note é", nota)
        }
}
soBoaNota(8.1)
soBoaNota(6.1)


function seForVerdade(valor){
    if(valor){
        console.log('É verdadeiro... ', valor)
    }else{
        console.log('É falso ', valor)
    }
}


seForVerdade(null);         /*É falso  null*/
seForVerdade(undefined);    /*É falso  undefined*/
seForVerdade(NaN);          /*É falso  NaN*/
seForVerdade('');           /*É falso   (String vázia)*/
seForVerdade(0);            /*É falso  0*/
seForVerdade(-1);           /*É verdadeiro...  -1*/
seForVerdade(' ');          /*É verdadeiro...  (String com espaço*/
seForVerdade('?');          /*É verdadeiro...  ?*/         
seForVerdade([]);           /*É verdadeiro...  [] (array vázio)*/
seForVerdade([1,1,3]);      /*É verdadeiro...  [ 1, 1, 3 ]*/
seForVerdade({});           /*É verdadeiro...  {} (Objeto)*/




