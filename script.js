function calculateScore() {
    const correctAnswers = ['a', 'c', 'a', 'a', 'b', 'b', 'b', 'b', 'b', 'b']; // Replace these answers with the correct answers for each question
    let score = 0;
    const form = document.getElementById('quiz-form');
    const userAnswers = [];

    for (let i = 1; i <= 10; i++) {
        const selectedOption = form.querySelector(`input[name=q${i}]:checked`);
        if (selectedOption) {
            userAnswers.push(selectedOption.value);
            if (selectedOption.value === correctAnswers[i - 1]) {
                score++;
            }
        }
    }

    const resultContainer = document.getElementById('result');
    const scoreDisplay = document.getElementById('score');
    const correctAnswersList = document.getElementById('correct-answers');

    scoreDisplay.textContent = score;

    userAnswers.forEach((answer, index) => {
        const li = document.createElement('li');
        li.textContent = `Question ${index + 1}: Réponse correcte : ${correctAnswers[index]}`;
        correctAnswersList.appendChild(li);
    });

    resultContainer.style.display = 'block';
}
