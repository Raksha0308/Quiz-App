const questions=[
    {
        'que':'Which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'Javascript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que':'What year was javascript launched?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'None of the above',
        'correct':'b'
    },
    {
        'que':'Javascript is an _______ language?',
        'a':'Object oriented',
        'b':'Object - based',
        'c':'Procedural',
        'd':'None of the above',
        'correct':'a'
    },
    {
        'que':'What does CSS stands for?',
        'a':'Hypertext Markup Language',
        'b':'Cascading Style Sheet',
        'c':'Javascript Object Notation',
        'd':'Helicopeters Terminals Motorboats Lamborginis',
        'correct':'b'
    },
    {
        'que':'How can a datatype be declared to be a constant type?',
        'a':'const',
        'b':'var',
        'c':'let',
        'd':'constant',
        'correct':'a'
    },
    {
        'que':'How to create an ordered list in HTML?',
        'a':'<ul>',
        'b':'<ol>',
        'c':'<href>',
        'd':'<b>',
        'correct':'b'
    },
    {
        'que':'Which of the following tags doesn’t require a closing tag?',
        'a':'<br>',
        'b':'<hr>',
        'c':'Both A and B',
        'd':'None of the above',
        'correct':'c'
    },
    {
        'que':'Which attribute is used to provide a unique name to an HTML element?',
        'a':'id',
        'b':'class',
        'c':'type',
        'd':'None of the above',
        'correct':'a'
    },
    {
        'que':'Which of the following methods is used to access HTML elements using Javascript?',
        'a':'getElementById',
        'b':'getElementByClass',
        'c':'Both A and B',
        'd':'None of the above',
        'correct':'c'
    },
    {
        'que':'Which of the following methods can be used to display data in some form using Javascript',
        'a':'document.write()',
        'b':'console.log()',
        'c':'window.alert()',
        'd':'All of the above',
        'correct':'d'
    }

]

let index=0;
let total=questions.length;
let right=0, wrong=0;
const quesBox=document.querySelector("#quesBox");
const options=document.querySelectorAll(".options");

const loadQuestion= ()=>{
    if(index === total){
        return endQuiz()
    }
    reset()
    const data=questions[index];
    quesBox.innerText=`${index+1}) ${data.que}`;
    options[0].nextElementSibling.innerText=data.a;
    options[1].nextElementSibling.innerText=data.b;
    options[2].nextElementSibling.innerText=data.c;
    options[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer()
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer=()=>{
    let answer;
    options.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
            }
        }
    )
    return answer;
}

const reset=()=>{
    options.forEach(
        (input)=>{
            input.checked=false;
         })
    }
    
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h1>Thank You for playing Quiz</h1>
    <h2>${right} / ${total} are correct</h2>
    <button style="background-color:#3498db; color:white; font-size:18px; padding:4px; border-radius:5px; cursor:pointer; margin-top:10px" onclick="location.reload()" id="submitBtn">Play again </button>
    </div>`;
}

// initial call
loadQuestion();