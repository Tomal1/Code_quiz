let q1 = "how old is Tomal?";
let q2 = "where did Tomal live before moving to Birmingham?";
let q3 = "where about in birmingham dose Tomal live?";
let q4 = "what job did Tomal do before joining the coding Bootcamp?";

let questArr = [q1, q2, q3, q4];

let questionSpan = document.querySelector("#question");

let a1 = [32, 33, 34, 35];
let a2 = ["Leicester", "London", "Newport", "Swansea"];
let a3 = ["Small Heath", "Halesowen", "Smithwick", "Digbeth"];
let a4 = ["recovery driver", "police", "lorry driver", "chef"];

let answerSpan = document.querySelector("#answer");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");

let btnAry = [btn1, btn2, btn3, btn4];
/*function which takes  arguments to populate the button and display the 
correct question*/
function nextQues(arg){

    if(arg === q1){
        questionSpan.innerHTML = q1;
        for(let i = 0; i < btnAry.length; i++){
            btnAry[i].textContent = a1[i];
        }

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
    } else if (arg === q2){
        questionSpan.innerHTML = q2;
        for(let i = 0; i < btnAry.length; i++){
            btnAry[i].textContent = a2[i];
        }

        for(let i=0; i<btnAry.length; i++){
            function someFunc(arg){
                if(arg === btnAry[1]){
                    answerSpan.innerHTML = "correct";
                }else{
                    answerSpan.innerHTML = "wrong";
                }
            }
        
            btnAry[i].addEventListener("click", function(){
                someFunc(btnAry[i]);       
            })
        }
    } else if (arg === q3){
        questionSpan.innerHTML = q3;
        for(let i = 0; i < btnAry.length; i++){
            btnAry[i].textContent = a3[i];
        }

        for(let i=0; i<btnAry.length; i++){
            function someFunc(arg){
                if(arg === btnAry[1]){
                    answerSpan.innerHTML = "correct";
                }else{
                    answerSpan.innerHTML = "wrong";
                }
            }
        
            btnAry[i].addEventListener("click", function(){
                someFunc(btnAry[i]);       
            })
        }
    } else if (arg === q4){
        questionSpan.innerHTML = q4;
        for(let i = 0; i < btnAry.length; i++){
            btnAry[i].textContent = a4[i];
        }

        for(let i=0; i<btnAry.length; i++){
            function someFunc(arg){
                if(arg === btnAry[0]){
                    answerSpan.innerHTML = "correct";
                }else{
                    answerSpan.innerHTML = "wrong";
                }
            }
        
            btnAry[i].addEventListener("click", function(){
                someFunc(btnAry[i]);       
            })
        }
    }
}

nextQues(q1);

