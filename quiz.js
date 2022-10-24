
let questionSpan = document.querySelector("#question");

const tomal = [
  {
    Q: "to start the quiz press any button",
    A: ["start button", "start button", "start button", "start button"],
    CA: "start button",
  },
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
  }
];

let answerSpan = document.querySelector("#answer");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");

let btnAry = [btn1, btn2, btn3, btn4];

let counter = 0;





function nextQues(object) {
  questionSpan.innerHTML = object.Q;
  for (let i = 0; i < btnAry.length; i++) {
    btnAry[i].textContent = object.A[i];
  }
}

 function someFunc(arg, object) {
    if (arg === object.CA) {
    answerSpan.innerHTML = "correct";
      counter++;

      if(counter >= tomal.length){
        questionSpan.innerHTML = "";
        return answerSpan.innerHTML ="you win";   
      }
      nextQues(tomal[counter]);

    } else {
      answerSpan.innerHTML = "wrong";
    }
    console.log(counter);
  }

  document.querySelector("#score");

  console.log(counter);

  for (let i = 0; i < btnAry.length; i++) {
    btnAry[i].addEventListener("click", function () {
      someFunc(btnAry[i].textContent, tomal[counter]);
    });
  }

nextQues(tomal[0]);


