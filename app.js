let calcutatorBody = document.getElementById("calcutatorBody")
calcutatorBody.addEventListener("click",function(eve){
  let num = eve.target.innerText
  let displayInp = document.getElementById("displayInp")
  let pervDisplayInpValue = displayInp.value

    if(num === "C"){
        displayInp.style.backgroundColor = "rgb(71 85 105)"
        displayInp.value = ""
}
else if(num === "DEL"){
let fullDigit = pervDisplayInpValue.split("")
fullDigit.pop()
let remained = fullDigit.join("")
// console.log(remained)
displayInp.value = remained
}

else if(num==="="){
let calculationTxt = displayInp.value
let calculation = eval(calculationTxt)
// console.log(calculation)
displayInp.value = calculation ;
}

else if(num==="OFF"){
    displayInp.value = ""
    displayInp.style.backgroundColor = "black"
}

else{
   
    displayInp.value = pervDisplayInpValue + num ;
    displayInp.style.backgroundColor = "rgb(71 85 105)"
}
})
