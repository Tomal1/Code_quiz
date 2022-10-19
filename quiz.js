let q1 = "how old is Tomal?";
let q2 = "where did Tomal live before moving to Birmingham?";
let q3 = "where about in birmingham dose Tomal live?";
let q4 = "what job did Tomal do before joining the coding Bootcamp?";

let questArr = [q1, q2, q3, q4];

let questionSpan = document.querySelector("#question");

questionSpan.innerHTML = q1;

let a1 = [32, 33, 34, 35];
let a2 = ["Leicester", "London", "Newport", "Swansea"];
let a3 = ["Small Heath", "Halesowen", "Smithwick", "Digbeth"];
let a4 = ["recovery driver", "police", "lorry driver", "chef"];

let answerSpan = document.querySelector("#answer");

let span1 = document.querySelector("#span1");
let span2 = document.querySelector("#span2");
let span3 = document.querySelector("#span3");
let span4 = document.querySelector("#span4");

let spanAry = [span1, span2, span3, span4];

for(let i = 0; i < spanAry.length; i++){
    spanAry[i].textContent = a1[i];
}

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");

//let allBtn = document.querySelectorAll(".btn");

let btnAry = [btn1, btn2, btn3, btn4];

for(let i=0; i<btnAry.length; i++){

    function someFunc(arg){
        if(arg === btnAry[2]){
            answerSpan.innerHTML = "correct";
        }else{
            answerSpan.innerHTML = "wrong";
        }
    }

    btnAry[i].addEventListener("click", function(){
        someFunc(btnAry[i]);
    })
}