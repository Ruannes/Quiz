const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result-container');
const nextButton = document.getElementById('next-button');
const endButton = document.getElementById('end-button');

let currentQuestionIndex = 0;
let score = 0;

// Supondo que as perguntas e respostas estejam configuradas em um array
const questions = [
    {
        question: "O que é HTML?",
        options: ["Linguagem de Programação", "Linguagem de Marcação", "Banco de Dados", "Estilo de Texto"],
        answer: 1
    },
    {
        question: "O que é CSS?",
        options: ["Linguagem de Programação", "Linguagem de Marcação", "Folha de Estilo", "Framework"],
        answer: 2
    }
];

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    const options = currentQuestion.options;
    optionsContainer.innerHTML = '';
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].answer;
    if (selectedIndex === correctIndex) {
        score++;
        alert('Você acertou!');
    } else {
        alert('Você errou!');
    }
    nextButton.style.display = 'block';
    endButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.style.display = 'none';
    } else {
        showResult();
    }
});

function showResult() {
    questionElement.style.display = 'none';
    optionsContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultContainer.querySelector('#result').textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
    nextButton.style.display = 'none';
    endButton.style.display = 'block';
}

endButton.addEventListener('click', () => {
    //recarrega a página para reiniciar o quiz
    window.location.reload();
});


// Inicialize a primeira pergunta
loadQuestion();
