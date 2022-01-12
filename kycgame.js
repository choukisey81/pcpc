

const quizDB = [
    {
        question:"Q.What is CKYCR",
        a: "Central Know your Customer Registry ",
        b: "Centralized Know your Customer Register",
        c:  "Central Know your Customer Register",
        d:  "None of the above",
        ans: "ans1"
    },
    {

        question: "Q.Which is the Nodal Agency to perform the functions of the CKYCR",
        a: "State Bank of India",
        b: "Central Registry of Securitization, Asset Reconstruction and Security Interest of India (CERSAI)",
        c:"SIDBI",
        d: "None of the above",
        ans: "ans2"

    },
    {

        question: "Q.Following accounts are covered under CKYC",
        a: "All Types of Deposit accounts",
        b: "Loan accounts",
        c: "Letter of credit , Bank Guarantee",
        d: "All of the aove",
        ans: "ans3"
},
    {

        question: "Q.Which accounts are covered under CKYC(Phase- I)?",
        a: "All existing accounts",
        b: "New accounts",
        c: "Both first and second",
        d: "None of the above",
        ans: "ans4"
},

];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const inputs = document.querySelectorAll(".input1");

const inner = document.querySelector("#inner");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getcheckAnswer = () => {
    let answer;

    inputs.forEach((curAnsElem) => {
     if(curAnsElem.checked){
        answer  = curAnsElem.id;
     }
   
    });
    return answer;
};

const deselectAll = () => {
    inputs.forEach((curAnsElem) => curAnsElem.checked = false );
}


 submit.addEventListener('click', () => {
     const checkedAnswer = getcheckAnswer();
     console.log(checkedAnswer);

     if(checkedAnswer === quizDB[questionCount].ans){
         score++;
     }; 

     questionCount++;

     deselectAll();

     if(questionCount < quizDB.length){
         loadQuestion();
     }else{
        inner.innerHTML = `
          <h3>You scored ${score}/${quizDB.length}<h3>
          <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
        inner.classList.remove('inner1');
     }
 });