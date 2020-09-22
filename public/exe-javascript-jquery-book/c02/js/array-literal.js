/*
    Abaixo temos um modelo de array chamado
    Notação Literal de Array, quando queremos acessar um item do array, passamos apenas
    o nome da varaivel e o indice que queremos.
 */

var colors = ['white','red','black'];

var el = document.getElementById('colors');
alert(colors.length);
el.innerHTML = colors[2];

/*
    Abaixo temos um modelo conhecico de construtor de array,
    Nele quando vamos declarar um array, passamos o nome seguido de new array()
    E quando queremos acessar um item do array, passamos o nome seguido de item(indice);
 */

var colorsTwo = new Array ('white','red','black');

var el = document.getElementById('colors');
alert(colorsTwo.item(1));