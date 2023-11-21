
const output = document.getElementById("output")
const options = document.querySelectorAll(".option")
const symbols = document.querySelectorAll(".symbol")
const numbers = document.querySelectorAll(".number")
const clear = document.getElementById("clear")
const remove = document.getElementById("remove")
const switchBtn = document.getElementById("switch")
const form = document.getElementById("calc")
const btns = document.querySelectorAll("button")
console.log(btns)
const del = document.getElementById("del");
console.log(output.value)

del.style.backgroundColor = "darkblue";
clear.style.backgroundColor = "darkblue";
form.addEventListener("submit", function(e){
    e.preventDefault();
})

let isOperator = false;
let result = [];

numbers.forEach(btn=>{
    btn.addEventListener("click", (e)=>{
        if(output.value == "0"){
            output.value = e.target.value
        } else if(isOperator){
            isOperator = false
            output.value = e.target.value
        } else if(output.value.includes(",")){
            output.value = output.value + "" + e.target.value.replace(",", "")
        } else{
            output.value = output.value + "" + e.target.value
        }
        console.log(output.value)
    })
})

symbols.forEach((btn)=>{
    btn.addEventListener("click", function(e){
        switch(e.target.value){
            case "%":
                output.value = parseFloat(output.value) / 100
                break
            case "=":
                result.push(output.value)
                output.value = eval(result.join(""))
                result = [];
                break
            case "C":
                output.value = "0";
                break
            case "D":  
            output.value = output.value.slice(0,-1)
            if(output.value == ""){
                output.value = "0"
            }
            break
            default:
                let last_item = result[result.length - 1]
                if(["/", "*", "+", "-"].includes(last_item) && isOperator){
                    result.pop();
                    result.push(e.target.value)
                }else{
                    result.push(output.value)
                    result.push(e.target.value)
                }
                isOperator = true
                break

        }
    })
})



// click style

// btns.forEach(btn=>{
//     btn.addEventListener("click", ()=>{
//         btn.classList.toggle("active")
//         console.log("essa")
//     })
// })
