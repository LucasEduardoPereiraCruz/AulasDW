/*calculadora com INPUTs*/
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var resultado = document.getElementById('resultado2');

var bntSomar = document.getElementById('somar');
var bntSub = document.getElementById('sub');
var bntDiv = document.getElementById('div');
var bntMult = document.getElementById('mult');

bntSomar.addEventListener('click', function() {
    resultado.innerText= "Resultado: " + (parseInt(num1.value) + parseFloat(num2.value));
});

bntSub.addEventListener('click', function(){
    resultado.innerText= "Resultado: " + (parseInt(num1.value) - parseFloat(num2.value));
});

//-------------------------------------------------------------

var calculo = document.getElementById('calculo');
var resultado = document.getElementById('resultado');
var limpar = document.getElementById('limpar');
var divisao = document.getElementById('divisao');
var multiplicacao = document.getElementById('multiplicacao');
var subtracao = document.getElementById('subtracao');
var soma = document.getElementById('soma');
var igual = document.getElementById('igual');
var n9 = document.getElementById('n9');
var n8= document.getElementById('n8');
var n7 = document.getElementById('n7');
var n6 = document.getElementById('n6');
var n5 = document.getElementById('n5');
var n4 = document.getElementById('n4');
var n3= document.getElementById('n3');
var n2 = document.getElementById('n2');
var n1= document.getElementById('n1');
var n0 = document.getElementById('n0');

var numero1 = null;
var numero2 = null;
var operacao = null;

n1.addEventListener('click', function (){
     if (operacao == null){
         numero1 = numero1 + n1.textContent;
         calculo.innerText = numero1;

     }else{
         numero2 = numero2 + n1.textContent;
         calculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
});


//-----

divisao.addEventListener ('click', function(){
    operacao = divisao.textContent;
    calculo.innerText = numero1 + " " + operacao + " " + numero2;
});

//----

igual.addEventListener ('click', function(){
    if (operacao == "/"){
        resultado.innerText = parseFloat(numero1) / parseFloat(numero2);
    }else if (operacao == "*"){

    }

    // Aqui vai os outros elses if...
    else{
        resultado.innerText = "** ERRO **";
    }
});

