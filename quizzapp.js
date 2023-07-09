
   const users=fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz");
   
    users.then((res)=>{
        return res.json();
    })
   .then((users)=>{
    console.log(users)
   const quizlist=document.getElementById("main-div")
   let quizApp=document.createElement("form")
   quizlist.appendChild(quizApp)
   quizApp.id="quizquestions"
   const i=[1,2,3,4,5]
   let Answers=[]
   users.forEach((item,index)=>{
   let quizdiv = document.createElement("div")
   quizdiv.id="Quizdiv"
   quizApp.append(quizdiv)
   let question=document.createElement("h3")
   quizdiv.appendChild(question)
   question.innerText=(`${users[index]["question"]}`);
   
   item.options.forEach((option,index)=>{
   let optiondiv = document.createElement("div")
   quizdiv.appendChild(optiondiv)

   let quizoption = document.createElement("input")
   console.log(quizoption)
   quizoption.type="radio"
   quizoption.name=`${item["id"]}`
   quizoption.id=`${item["id"]}.${index}`
   optiondiv.appendChild(quizoption)

   let radiolabel=document.createElement("label")
   radiolabel.htmlFor=`${item["id"]}.${index}`
   radiolabel.textContent=option
   console.log(optiondiv)
   optiondiv.appendChild(radiolabel)

   quizoption.addEventListener("click",function(){
    Answers[item.id-1]=index+1;
    console.log(Answers)
   })
   })
})
  let Submit = document.createElement("button")
  Submit.id="submit" 
  quizApp.appendChild(Submit)
  Submit.append("submit")
  let Result=document.getElementById("result")
  quizApp.addEventListener("submit",function(event){
      event.preventDefault();
      let score=0
      for(let i=0;i<users.length;i++){
          if(users[i].answer===Answers[i]){
              score++
            }
        }
        let Score=document.getElementById("score")
        Result.innerHTML=score
    })
})




