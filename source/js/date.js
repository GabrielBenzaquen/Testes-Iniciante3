/*
Mostra a data na tela
*/

;(function(){
    'use strict';
    var dateContainer = document.getElementById('containerDate');

    /* recupera a data e retorna na variavel dateInfo */
    var dateInfo = (function(){
        var today   = new Date()
        ,   mounth  = parseInt(today.getMonth() + 1).length < 2 ? parseInt(today.getMonth() + 1) : '0' + parseInt(today.getMonth() + 1)
        ,   date    = today.getDate() + '/' + mounth + '/' + today.getFullYear();

        console.log('a data que irá retornar é: '+ date);

        return date;
    })();

    // mostra a data na tela

    dateContainer.appendChild(document.createTextNode(dateInfo));
})();

