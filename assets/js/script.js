
// selecionar todas as perguntas
const questions = document.querySelectorAll('.item__question');

// percorrer todas as perguntas adicionar um evento de clique para cada uma delas
questions.forEach((question) => {

    question.addEventListener('click', function () {

        // verficar se existe alguma questão ativo
        const questionActive = document.querySelector('.item__question.active');

        // se existir alguma questão ativa que seja diferente da atual então feche a resposta
        if (questionActive && questionActive !== this) {
            toggleQuestion(questionActive);
        }

        // ativar ou ocultar a resposta da pergunta atual
        toggleQuestion(this);
    });
});


function toggleQuestion(question) {

    // resposta que vem após a questão
    const answer = question.nextElementSibling;

    // adicionar ou remover a classe active a questão
    question.classList.toggle('active');

    // se a questão estiver aberta então feche a resposta
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
    }
    // se não tiver então abra a resposta
    else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
}







