const questions = [
      {
        question: "Which is the largest animal in the world?",
        answers: [
          { text: "Shark", correct: false },
          { text: "Blue Whale", correct: true },
          { text: "Elephant", correct: false },
          { text: "Giraffe", correct: false }
        ]
      },
      {
        question: "Which is the largest continent?",
        answers: [
          { text: "Africa", correct: false },
          { text: "Asia", correct: true },
          { text: "Europe", correct: false },
          { text: "North America", correct: false }
        ]
      },
      {
        question: "Which is the largest desert in the world?",
        answers: [
          { text: "Sahara Desert", correct: false },
          { text: "Antarctic Desert", correct: true },
          { text: "Gobi Desert", correct: false },
          { text: "Kalahari Desert", correct: false }
        ]
      },
      {
        question: "Which is the largest ocean?",
        answers: [
          { text: "Atlantic Ocean", correct: false },
          { text: "Pacific Ocean", correct: true },
          { text: "Indian Ocean", correct: false },
          { text: "Arctic Ocean", correct: false }
        ]
      },
      {
        question: "Which is the largest planet in our Solar System?",
        answers: [
          { text: "Earth", correct: false },
          { text: "Jupiter", correct: true },
          { text: "Saturn", correct: false },
          { text: "Neptune", correct: false }
        ]
      },
      {
        question: "Which is the largest river by volume?",
        answers: [
          { text: "Nile", correct: false },
          { text: "Amazon", correct: true },
          { text: "Yangtze", correct: false },
          { text: "Mississippi", correct: false }
        ]
      },
      {
        question: "Which is the largest country by area?",
        answers: [
          { text: "USA", correct: false },
          { text: "Russia", correct: true },
          { text: "Canada", correct: false },
          { text: "China", correct: false }
        ]
      },
      {
        question: "Which is the largest bird?",
        answers: [
          { text: "Eagle", correct: false },
          { text: "Ostrich", correct: true },
          { text: "Albatross", correct: false },
          { text: "Peacock", correct: false }
        ]
      },
      {
        question: "Which is the largest flower?",
        answers: [
          { text: "Sunflower", correct: false },
          { text: "Rafflesia", correct: true },
          { text: "Lotus", correct: false },
          { text: "Rose", correct: false }
        ]
      },
      {
        question: "Which is the largest mammal on land?",
        answers: [
          { text: "Rhino", correct: false },
          { text: "African Elephant", correct: true },
          { text: "Hippopotamus", correct: false },
          { text: "Giraffe", correct: false }
        ]
      }
    ];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-button");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerHTML = "Next";
      showQuestion();
    }

    function showQuestion() {
      resetState();
      let currentQuestion = questions[currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

      currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", () => selectAnswer(button, answer.correct));
      });
    }

    function resetState() {
      nextButton.style.display = "none";
      while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
      }
    }

    function selectAnswer(button, correct) {
      if (correct) {
        button.classList.add("correct");
        score++;
      } else {
        button.classList.add("wrong");
      }

      Array.from(answerButtons.children).forEach(btn => {
        btn.disabled = true;
        if (btn.innerHTML === questions[currentQuestionIndex].answers.find(a => a.correct).text) {
          btn.classList.add("correct");
        }
      });

      nextButton.style.display = "block";
    }

    function showScore() {
      resetState();
      questionElement.innerHTML = `You scored ${score} out of ${questions.length}! 🎉`;
      nextButton.innerHTML = "Play Again";
      nextButton.style.display = "block";
    }

    function handleNextButton() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    }

    nextButton.addEventListener("click", () => {
      if (currentQuestionIndex < questions.length) {
        handleNextButton();
      } else {
        startQuiz();
      }
    });

    startQuiz();