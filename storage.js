export function getStoredQuestions() {
    const storedQuestions = localStorage.getItem('answeredQuestions');
    return storedQuestions ? JSON.parse(storedQuestions) : [];
}

export function storeQuestion(questionIndex) {
    let answeredQuestions = getStoredQuestions();
    answeredQuestions.push(questionIndex);
    localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
}

export function clearStoredQuestions() {
    localStorage.removeItem('answeredQuestions');
}
