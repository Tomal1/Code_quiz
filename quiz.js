let answerSpan = document.querySelector("#answer");
let questionSpan = document.querySelector("#question");
let btnCon = document.querySelector("#btn_con");
let score = document.querySelector("#score");
let recordInput = document.querySelector("#record_input");
let recordButton = document.querySelector("#record_button");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");

let btnAry = [btn1, btn2, btn3, btn4];

function starting() {
  //starting function
  recordInput.style.visibility = "hidden";
  recordButton.style.visibility = "hidden";
  questionSpan.innerHTML = "press start button to play Code Quiz";
  let rule = (answerSpan.innerHTML =
    "you will be penalised 3 seconds for wrong selections");
  btnCon.style.visibility = "hidden";

  let newBtn = document.createElement("button");
  newBtn.innerHTML = "start button";
  document.body.appendChild(newBtn);

  newBtn.addEventListener("click", function () {
    setInterval(counting, 1000);
    newBtn.remove();
    nextQues(tomal[0]);
  });
}
starting();

const tomal = [
  //array od objects containing question, answers and correct answer
  {
    Q: "how old is Tomal?",
    A: ["32", "33", "34", "35"],
    CA: "34",
  },
  {
    Q: "where did Tomal live before moving to Birmingham?",
    A: ["Leicester", "London", "Newport", "Swansea"],
    CA: "London",
  },
  {
    Q: "where about in birmingham dose Tomal live?",
    A: ["Small Heath", "Halesowen", "Smithwick", "Digbeth"],
    CA: "Halesowen",
  },
  {
    Q: "what job did Tomal do before joining the coding Bootcamp?",
    A: ["recovery driver", "police", "lorry driver", "chef"],
    CA: "recovery driver",
  },
];

let counter = 0;

function nextQues(object) {
  // nextQuest  function loops through object and populates questions and answers for button
  btnCon.style.visibility = "visible";
  questionSpan.innerHTML = object.Q;
  for (let i = 0; i < btnAry.length; i++) {
    btnAry[i].textContent = object.A[i];
  }
}

let timer = document.querySelector("#time");
let countdown = 16;

function counting() {
  // timer starts on selection of start button and subtracts 3 seconds when when selection is wrong(line 98)
  countdown = countdown - 1;
  if (countdown > 0) {
    timer.innerHTML = countdown + " seconds";
  } else if (counter >= tomal.length) {
    clearInterval(counting);
  } else if (countdown == 0) {
    timer.innerHTML = loser();
    btnCon.style.visibility = "hidden";
    answerSpan.style.visibility = "hidden";
  }
}

function someFunc(arg, object) {
  if (arg === object.CA) {
    answerSpan.innerHTML = "correct";
    counter++;
    score.innerHTML++;
    if (counter >= tomal.length) {
      btnCon.style.visibility = "hidden";
      questionSpan.style.visibility = "hidden";
      return (answerSpan.innerHTML = winner());
    }
    nextQues(tomal[counter]);
  } else {
    answerSpan.innerHTML = "wrong";
    countdown = countdown - 3;
  }
}

for (let i = 0; i < btnAry.length; i++) {
  btnAry[i].addEventListener("click", function () {
    someFunc(btnAry[i].textContent, tomal[counter]);
  });
}

function winner() {
  //winner function
  questionSpan.style.visibility = "visible";
  questionSpan.innerHTML =
    "You Win, enter initials to save your score to local storage";
  answerSpan.style.visibility = "hidden";
  recordInput.style.visibility = "visible";
  recordButton.style.visibility = "visible";

  recordButton.addEventListener("click", function () {
    const initials = recordInput.value;
    const scoreValue = score.innerHTML;

    const submissionObject = {
      initials: initials,
      scoreValue: scoreValue,
    };

    let paragraph = document.createElement("p");
    paragraph.innerHTML =
      "initials: " + initials + " score value: " + scoreValue;
    document.body.append(paragraph);

    const stringifyObject = JSON.stringify(submissionObject);
    localStorage.setItem("submission", stringifyObject);
  });
}

function loser() {
  // loser function works exactly the same way as winner function
  questionSpan.style.visibility = "visible";
  questionSpan.innerHTML =
    "You Lose, enter initials to save your score to local storage";
  answerSpan.style.visibility = "hidden";
  recordInput.style.visibility = "visible";
  recordButton.style.visibility = "visible";

  recordButton.addEventListener("click", function () {
    const initials = recordInput.value;
    const scoreValue = score.innerHTML;

    const submissionObject = {
      initials: initials,
      scoreValue: scoreValue,
    };

    let paragraph = document.createElement("p");
    paragraph.innerHTML =
      "initials: " + initials + " score value: " + scoreValue;
    document.body.append(paragraph);

    const stringifyObject = JSON.stringify(submissionObject);
    localStorage.setItem("submission", stringifyObject);
  });
}
