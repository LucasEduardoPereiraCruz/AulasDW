/*CONST define a variável como constante (não pode ser alterada, neste caso,
    não pode trocar de elemento do html )


document.getElmentById ('elementoHTML') pega um elemento html pelo id 
para ser programado no JS. */
const form = document.getElementById('formTarefa');
const input = document.getElementById('inputTarefa');
const lista = document.getElementById('listaTarefas');

/*addEventListener adicionar uma "escuta" a um evento do elemento html.
'submit' é o evento que occore quando o formulário é enviado.
function (event) cria a função que será executada quando o evento ocorrer.
event é a variável que armazena as informações do evento que ocorreu*/
form.addEventListener('submit',function (event){
    // Evita que o formulário seja enviado e a página recarregada. */
    event.preventDefault();

    //Armazena o valor do input na variavel 
    //trim() remove os espaços em branco no começo e do fim do texto
    const textoTarefa = input.value.trim();

    if(textoTarefa != ''){
        //Cria um elemento html do tipo li
        const li = document.createElement('li');
        //Adiciona o texto do input do elemento li 
        li.textContent = textoTarefa;

        const botaoRemover = document.createElement('button');
        botaoRemover .textContent = 'X';
        //Adiciona classe remover ao botão criado 
        botaoRemover .classList.add('remover');

        botaoRemover.addEventListener('click', function(){
            //Remove o elemento li da lista se o botão for clicado 
            lista.removeChild(li);
    });
    //Adiciona botão remover do elemento li 
    li.appendChild(botaoRemover);
    //Adiciona o elemento li a lista de tarefas
    lista.appendChild(li);
    //Limpa o valor do input 
    input.value = '';   
}

})
