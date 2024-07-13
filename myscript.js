/*
//alert do wywołania na stronie
// alert("Hello world")

//Numeric - typ danych
//len - tworzenie zmiennej
//let length = 180
//alert(length)   //wywołanie zmiennej w alercie

console.log(length)  //wywołanie zmiennej w konsoli

let weight = 85.5
//alert(weight)
console.log(weight)


//Strings - typ danych
let color = "Yellow"
console.log(color)

//Boolean - typ zmiennej
let x = true
console.log(x)
let y = false
console.log(y)

//Object - definiowanie obiektu - typ zmiennej
const person = {firstName: "Patryk", lastName: "Pisarski"}      //const jako zmienna niezmienna
console.log(person)

//Array - typ zmiennej
let cars = ["Saab", "Volvo", "BMW"]

//Date
const date = new Date("2024-08-31")     //date - w formacie yyyy-mm-dd
console.log(date)

//Porównywanie danych

//Equal
console.log(length==weight)  //sam wynik
console.log("Porownanie len vs weight: " + (length==weight))    //wynik do zwrócenia w raz z opisem jako string

//Equal value and equal type
console.log(length === weight)

//Not equal
console.log(100 != 150)     //można tez wpisac same liczby

//Not equal and type
console.log(100 !== "100")

//Greater
console.log(100>99)

//Less
console.log(100< 110)

//greater or eq
console.log(100 >= 100)

//Less or eq
console.log(100 <= 100)

//Ternary operator - zwraca konketne wyrażenie w zależności od wyniku
let result = 100 > 98 ? "Tak" : "Nie"
console.log(result)


//LOOPS

//For loop
for(let i=0; i<9; i=i+1){ //lub i++
    console.log(i)
}
for(let i=10; i>=0; i--){ //lub i++
    console.log(i)
}
//console.log(i)  // zmienna poza pętlą nie jest rozpoznana - wyskoczy error w logu

//For each
cars.forEach(function(element){
    console.log(element)
})


//Warunki
//IF ELSE

let themperature = 40.8
if(themperature >= 36 && themperature <37){
    console.log("W normie")
}else if(themperature >= 37 && themperature < 38){
    console.log("Stan podgorączkowy")
}else if(themperature >=38 && themperature < 40){
    console.log("Stan poważny")
}else{
    console.log("Umierasz")
}

//OR

let money = 10
let voucher = false

if(money >20 || voucher){
    console.log("Możesz iść na film")
}else{
    console.log("Nie możesz iść na film")
}

//NOT
if(!(15>20)){
    console.log("NOT")
}
*/

//Funkcje

function exampleFunction(){
    console.log("Function")
}

function substractArgs(arg1, arg2){
    let result = arg1 + arg2
    console.log(result)
}

function calculateAge(yearOfBirth){
    return 2024 - yearOfBirth
}

function checkIfCanWatchMovie(age, money){
    if(age >= 18 && money >= 30){
        return true
    }else{
        return false
    }
}


window.onload = function (){
    exampleFunction()
    substractArgs(2, 3)
    substractArgs(5, 7)
    substractArgs(89372991284759128943789123, 32958508010913830985050190)

    let myAge = calculateAge(1995)
    console.log("Mój wiek to: " + myAge)        //zwracanie funkcji gdy jest return
    let myMoney = 50
    console.log(checkIfCanWatchMovie(myAge, myMoney))
}

//Funkcja arrow function

function basicAdd(a, b){        //standardowa funkcja
    return a + b
}

const newAdd = (a, b) => a + b //tak definiujemy fukcję arrow

const addAndPrint = (a, b) =>{
    let ret = a + b
    console.log("add and print ", ret)
    return ret
}



window.onload = function (){
    console.log(basicAdd(2,5))
    console.log("New add: " + newAdd(3, 7))

    addAndPrint(4, 5)

    let array = [1, 2, 3, 4]
    array.forEach (element =>{
        console.log(element)
    })

    document.getElementById("actionButton").onclick = function(){
        alert("Witaj " + document.getElementById("inputBox").value)
    }

    //Inna metoda wywołania okna
    const button = document.querySelector('#actionButton')
    const inputBox = document.querySelector('#inputBox')
const message = document.querySelector('#message')

message.innerHTML='<h1> aaaa</h1>'          //przekazanie html do div w index???
    button.addEventListener("click", function(){
        alert("CLICK")
        alert(inputBox.value)
        //message.innerHTML='<h1> aaaa</h1>'
    })

}

