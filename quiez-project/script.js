let storageq=[
    {
        'question':"Who is the Prime Minister of India?",
        'opt':["Rahul Gandhi","Narendra Modi","Amit Shah","Arvind Kejriwal"],
        'ans':2
    },
    {
        'question':"What is the capital of India?",
        'opt':["Mumbai","Kolkata","New Delhi","chennai"],
        'ans':3
    },
    {
        'question':"Which is the national animal of India?",
        'opt':["Lion","tiger","Elephant","Leopard"],
        'ans':2
    },
    {
        'question':"How many colors are there in the Indian flag?",
        'opt':["2","3","4","6"],
        'ans':2
    }

]

let que = document.getElementById("ques")
let opt = document.querySelectorAll(".opt")
let res = document.getElementById("result")

let qesnum = 0
let marks = 0 

function getques(){
    que.innerText = storageq[qesnum].question
    opt.forEach((button,index)=>{
        button.innerText = storageq[qesnum].opt[index]
    })
}

getques()

opt.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        if(storageq[qesnum].ans==index+1){
            marks++
        }
        qesnum++;

        if(qesnum<storageq.length){
            getques()
        }
        else{
           res.innerText = `Your obtained marks:- ${marks}/${storageq.length}`
        }
    })
})