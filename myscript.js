//Wzorce projektowe - gotowe rozwiązania na istniejące problemy

//Singleton - pozwala zapewnic istnienie wyłącznie jednej instancji klasy/obiektu

//klasa zwykła
/*
class AppConfig {       //nazwa kalsy z dużej litery zawsze
    firstName = "Patryk"
    lastName = "Pi"
    age = 15
}          

//instancja klasy

const myInstance = new AppConfig()
console.log(myInstance)
*/
//klasa z singletonem

class AppConfig {       
    constructor(number = 5, urlToServer = "prod_server"){    //domyślna wartośc dla obiektu
        if(AppConfig.exists){
            return AppConfig.instance
        }
    //else
    this.randomNumber = Math.random()
    this.number = number
    this.urlToServer = urlToServer
    AppConfig.exists = true
    AppConfig.instance = this
    return this
    }
} 

const configObject = new AppConfig(8, "localhost")
const configObject2 = new AppConfig(12)

console.log(configObject)
console.log(configObject2)
console.log(configObject==configObject2)