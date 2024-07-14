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
/*
const promise = new Promise(( resolve, reject) => {
    if(1==2){
        resolve("ALL OK")
    }else{
        reject("NOT OK")
    }
})
*/
//druga opcja z timout jako symulowaniem pobierania danych
/*
function doSomething() {
return new Promise(( resolve, reject) => {
    setTimeout(() => {
        //resolve("Data downloaded succesfully")    
        reject("Error while data downloading")
    }, 3000)
})
}

doSomething()
    .then(result => {
        console.log("Success")
        console.log("Success")
        console.log("Success")
    })
    .catch(error => {
        console.log(error)
    })
*/
//promise.then(result => {
//    console.log(result)
//})

//ASYNC, AWAIT

//Standardowe podejście
/*
function doThings(){
    return Promise.resolve("ok")
}

doThings()
    .then(res => {
        console.log(res)
    })

//ASYNC

async function doThingsAsync(){
    return "Ok"
}

doThingsAsync()
    .then(res => {
        console.log(res)
    })

//Async z błędem

async function doThingsAsync(){
    return Promise.reject("not ok")
}

doThingsAsync()
    .then(res => {
        console.log(res)
    })
    .catch(error =>{
        console.log(error)
    })
*/

//Cwiczenie na odpytywanie endpointów i czekanie aż się dane załadują

function loadUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("A")
        }, 1000)
    })
}

//Funkcja z błędęm, do obsłuzenia
function loadBooks(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve("Book")
            reject("Books not downloaded")
        }, 1000)
    })
}

function loadPets(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pet")
        }, 1000)
    })
}

async function render(){
    const user = await loadUserData()
    //const books = await loadBooks()
    let books
    loadBooks()
    .then(res => {
        books = res
    })
    .catch(err => {
        //books = err
        console.log(err)
        books = " "
    })
    const pets = await loadPets()
    console.log(user, books, pets)
}

window.onload = function(){
    render()
}