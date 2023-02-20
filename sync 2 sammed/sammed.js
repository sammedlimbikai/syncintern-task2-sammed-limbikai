const QT = [{
    question: "What does the abbreviation HTML stand for?",
    a: "HighText Markup Language.",
    b: "Hyper Text Markup Language.",
    c: "Hyper Text Markdown Language.",
    d: "None of the above.",
    correct: "b",
}, {
    question: "How many sizes of headers are available in HTML by default?",
    a: "5",
    b: "1",
    c: "3",
    d: "6",
    correct: "d",
}, {
    question: "Which HTML element is used to define description data?",
    a: "<li>",
    b: "<ol>",
    c: "<dd>",
    d: "<dl>",
    correct: "c",
}, {
    question: "What are the types of lists available in HTML?",
    a: "Ordered, Unordered Lists.",
    b: "Bulleted, Numbered Lists.",
    c: "Named, Unnamed Lists.",
    d: "None of the above.",
    correct: "a",
},	{
	question: "What is the effect of <b> tag?",
    a: "It is used to write black-colored font.",
    b: "It converts the text within it to bold font.",
    c: "It is used to change the font size.",
    d: "None of the above.",
    correct: "b",

},];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_t = document.getElementById("a_t");
const b_t = document.getElementById("b_t");
const c_t = document.getElementById("c_t");
const d_t = document.getElementById("d_t");
const sbmt_btn = document.getElementById("submit");
let currentQuiz = 0;
let scr = 0;

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = QT[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_t.innerText = currentQuizData.a;
    b_t.innerText = currentQuizData.b;
    c_t.innerText = currentQuizData.c;
    d_t.innerText = currentQuizData.d;
};
loadQuiz();
sbmt_btn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === QT[currentQuiz].correct) scr++;
        currentQuiz++;
        if (currentQuiz < QT.length) loadQuiz();
        else {
            quiz.innerHTML = ` <h2>You answered ${scr}/${QT.length} questions correctly</h2> 
                <button onclick="history.go(0)">Play Again</button> `
                
        }
    }
});