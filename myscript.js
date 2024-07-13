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