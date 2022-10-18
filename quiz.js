let q1 = "how old is Tomal?";
let q2 = "where did Tomal live before moving to Birmingham?";
let q3 = "where about in birmingham dose Tomal live?";
let q4 = "what job did Tomal do before joining the coding Bootcamp?";

let questArr = [q1, q2, q3, q4];

let a1 = [32, 33, 34, 35];
let a2 = ["Leicester", "London", "Newport", "Swansea"];
let a3 = ["Small Heath", "Halesowen", "Smithwick", "Digbeth"];
let a4 = ["recovery driver", "police", "lorry driver", "chef"];


let question = document.querySelector("#question");

question.innerHTML = q1;

let answer = document.querySelector("#answer");

answer.innerHTML = "this is where it will tell you if you are right or wrong";


let btn1 = document.querySelector("#span1");
let btn2 = document.querySelector("#span2");
let btn3 = document.querySelector("#span3");
let btn4 = document.querySelector("#span4");

let btnAry = [btn1, btn2, btn3, btn4];



for(let i = 0; btnAry.length; i++){
     btnAry[i].textContent = a1[i]; 
}




