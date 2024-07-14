//Zadanie1
/*
let zmienna = 12
console.log(typeof zmienna)

zmienna = "Język Java Script"
console.log(typeof zmienna)
*/

//Callback
/*
function myDisplayer(text){
    alert(text)
}

//funkcja do kalkulatora
function myCalculator(num1, num2, myCallback){
    let sum = num1 + num2
    myCallback(sum)
}
//wywołujemy callback??
myCalculator(5, 5, myDisplayer)

window.onload = function(){
    myCalculator(6, 6, myDisplayer)
}
*/
//Promise, wywołanie dwóch różnych funkcji w zależności od warunku

const promise = new Promise(( resolve, reject) => {
    if(1==1){
        resolve("ALL OK")
    }else{
        reject("NOT OK")
    }
})
