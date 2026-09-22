let questions = [

    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: [
            "link",
            "a",
            "href",
            "url"
        ],
        answer: 1
    },

    {
        question: "Which language is used for styling a webpage?",
        options: [
            "HTML",
            "Python",
            "CSS",
            "C++"
        ],
        answer: 2
    },

    {
        question: "Which property is used to change text color in CSS?",
        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        answer: 2
    },

    {
        question: "Which symbol is used for an ID selector in CSS?",
        options: [
            ".",
            "#",
            "*",
            "@"
        ],
        answer: 1
    },

    {
        question: "Which symbol is used for a class selector in CSS?",
        options: [
            "#",
            ".",
            "*",
            "&"
        ],
        answer: 1
    },

    {
        question: "Which language is used to add interactivity to webpages?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "var",
            "int",
            "string",
            "define"
        ],
        answer: 0
    },

    {
        question: "Which HTML tag is used to create a paragraph?",
        options: [
            "para",
            "text",
            "p",
            "paragraph"
        ],
        answer: 2
    },

    {
        question: "Which HTML tag is used to display an image?",
        options: [
            "image",
            "img",
            "picture",
            "src"
        ],
        answer: 1
    }

];


let currentQuestion = 0;
let score = 0;


// Display first question
showQuestion();

function showQuestion() {

    let q = questions[currentQuestion];

    document.getElementById("questionNumber").innerText =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    document.getElementById("question").innerText =
        q.question;

    let optionsHTML = "";

    for (let i = 0; i < q.options.length; i++) {

        optionsHTML += `
            <button class="option" onclick="selectAnswer(${i})">
                <span>${String.fromCharCode(65 + i)}.</span>
                ${q.options[i]}
            </button>
        `;
    }

    document.getElementById("options").innerHTML = optionsHTML;

    if (currentQuestion == questions.length - 1) {
        document.getElementById("nextButton").innerText = "SUBMIT QUIZ";
    } else {
        document.getElementById("nextButton").innerText = "NEXT";
    }
}


let selectedAnswer = null;


function selectAnswer(index) {

    // Don't allow another answer after selection
    if (selectedAnswer !== null) {
        return;
    }

    selectedAnswer = index;

    let buttons = document.querySelectorAll(".option");

    let correctAnswer = questions[currentQuestion].answer;

    // Correct answer
    if (index === correctAnswer) {

        buttons[index].classList.add("correct");

        score++;

    }

    // Wrong answer
    else {

        buttons[index].classList.add("wrong");

        // Also show correct answer
        buttons[correctAnswer].classList.add("correct");
    }

    // Disable all options
    buttons.forEach(button => {
        button.disabled = true;
    });
}


document.addEventListener("keydown", function(event) {

    let key = event.key.toLowerCase();

    if (selectedAnswer !== null) {
        return;
    }

    if (key === "a") {
        selectAnswer(0);
    }

    else if (key === "b") {
        selectAnswer(1);
    }

    else if (key === "c") {
        selectAnswer(2);
    }

    else if (key === "d") {
        selectAnswer(3);
    }

});


document.getElementById("nextButton").addEventListener("click", function() {

    if (selectedAnswer === null) {

        alert("Please select an answer!");

        return;
    }

    if (currentQuestion === questions.length - 1) {

        localStorage.setItem("score", score);

        window.location.href = "result.html";

    }

    else {

        currentQuestion++;

        selectedAnswer = null;

        showQuestion();
    }

});


showQuestion();