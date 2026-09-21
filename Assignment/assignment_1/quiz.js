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
            <label class="option">

                <input type="radio"
                       name="answer"
                       value="${i}">

                ${q.options[i]}

            </label>
        `;
    }

    document.getElementById("options").innerHTML = optionsHTML;


    // Change button on question 10

    if (currentQuestion == questions.length - 1) {

        document.getElementById("nextButton").innerText =
            "SUBMIT QUIZ";

    } else {

        document.getElementById("nextButton").innerText =
            "NEXT";
    }
}


document.getElementById("nextButton").addEventListener("click", function() {

    let selectedAnswer =
        document.querySelector('input[name="answer"]:checked');


    // If no option selected

    if (selectedAnswer == null) {

        alert("Please select an answer!");

        return;
    }


    let answer = Number(selectedAnswer.value);


    // Check answer

    if (answer == questions[currentQuestion].answer) {

        score++;

    }


    // If last question

    if (currentQuestion == questions.length - 1) {

        localStorage.setItem("score", score);

        window.location.href = "result.html";

    }

    else {

        currentQuestion++;

        showQuestion();

    }

});