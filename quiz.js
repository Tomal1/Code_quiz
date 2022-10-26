let answerSpan = document.querySelector("#answer");
let questionSpan = document.querySelector("#question");
let btnCon = document.querySelector("#btn_con");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");

let btnAry = [btn1, btn2, btn3, btn4];

function starting() {
  questionSpan.innerHTML = "press start button to play Code Quiz";
  let rule = (answerSpan.innerHTML =
    "you will be penalised 3 seconds for wrong selections");
  btnCon.style.visibility = "hidden";

  let newBtn = document.createElement("button");
  newBtn.innerHTML = "start button";
  document.body.appendChild(newBtn);

  newBtn.addEventListener("click", function () {
    const ticker = setInterval(counting, 1000);
    newBtn.remove();
    nextQues(tomal[0]);
  });
}
starting();

const tomal = [
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
  btnCon.style.visibility = "visible";
  questionSpan.innerHTML = object.Q;
  for (let i = 0; i < btnAry.length; i++) {
    btnAry[i].textContent = object.A[i];
  }
}

let timer = document.querySelector("#time");
let countdown = 16;

function counting() {
  countdown = countdown - 1;
  if (countdown > 0) {
    timer.innerHTML = countdown;
  } else if (countdown == 0) {
    timer.innerHTML = "you lose";
    btnCon.style.visibility = "hidden";
    questionSpan.style.visibility = "hidden";
    answerSpan.style.visibility = "hidden";
  }
}

function someFunc(arg, object) {
  if (arg === object.CA) {
    answerSpan.innerHTML = "correct";
    counter++;

    if (counter >= tomal.length) {
      btnCon.style.visibility = "hidden";
      questionSpan.style.visibility = "hidden";
      return (answerSpan.innerHTML = "you win");
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
