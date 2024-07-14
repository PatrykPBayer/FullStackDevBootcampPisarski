//obiekty powtórka

const Person = function(name, surname, age){
    this.name = name
    this. surname = surname
    this.age = age
}

const person = new Person("Jan", "Kowalski", 35)
const person2 = new Person("Jan", "Nowak", 25)
console.log(person, person2)
console.log(person2.surname)         //drukowanie konkretnej cechy obiektu 

//tablica z obiektów

let persons = [person, person2, new Person("Mick", "Kowalski", 65)]
console.log(persons)