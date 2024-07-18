/*
let num = 42
let firstName = 'vladilen'

num = 10
const isProgrammer = true

firstName = 'Max'
isProgrammer = false // error
 
alert(isProgrammer)

console.log(num * 10)
const result = sumNumber(7, 3, "-")
console.log(result)
element.innerHTML = `` использовать HTML в ковычках
element.inserAdjacentHTML(beforeend)
*/

function sumNumber(num1, num2, sum) {
    if(sum == "+"){
        return Number(num1.value) + Number(num2.value)
        console.log(sum)
    } else if(sum == "-"){
        return Number(num1.value) - Number(num2.value)
        console.log(sum)

    }
}


const btnIndexTwoElement = document.getElementById("btnIndexTwo")
const oneNumberElement = document.getElementById("oneNumber")
const twoNumberElement = document.getElementById("twoNumber")
const plusBtnElement = document.getElementById("plusBtn")
const minusBtnElement = document.getElementById("minusBtn")
const rownElement = document.getElementById("rown")
const resElement = document.getElementById("res")
const listElement = document.getElementById("spisok")
const inputIndexTwo = document.getElementById("inputIndexTwo")


let aray = "+";



plusBtnElement.onclick = function() {
    aray = "+"
    plusBtnElement.style.backgroundColor = 'green'
    minusBtnElement.style.backgroundColor = 'white'
} 

minusBtnElement.onclick = function() {
    aray = "-"
    minusBtnElement.style.backgroundColor = 'red'
    plusBtnElement.style.backgroundColor = 'white'

}


rownElement.onclick = function() {
    const win = sumNumber(oneNumberElement, twoNumberElement, aray)
    resElement.textContent = win
    console.log(resElement.textContent)
    if(resElement.textContent < 0){
        resElement.style.backgroundColor = 'red'
    }else if(resElement.textContent >= 0){
        resElement.style.backgroundColor = 'green'
    }
    
}

/*
const value = Math.random();
console.log(value < 0.5 ? "heads" : "tails");
console.log(value)
*/

// let a = 12

// function zet () {
//     b = a
//     const b = 10
//     console.log (a)
// }
// zet()
// console.log (a)

btnIndexTwoElement.onclick = function() {
    console.log("123");
//     // listElement.innerHTML = `
//     // <li class="list">
//     //     <span>${inputIndexTwo.value}</span>
//     //     <span class="list_1">
//     //         <span class="check">&check;</span>
//     //         <span class="times">&times;</span>
//     //     </span>
//     // </li>
//     // `
// // }
    listElement.insertAdjacentHTML("beforeend", 
        `
            <li class="list">
                <span>${inputIndexTwo.value}</span>
                <span class="list_1">
                    <span class="check">&check;</span>
                    <span class="times">&times;</span>
                </span>
            </li>
        `
    );
};
