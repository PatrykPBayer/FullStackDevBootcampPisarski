//Prototypes

const Player = function(nick, email){
    this.nick = nick
    this.email = email
    this.shoot = () => console.log("SHOOT!")
}
//prototypujemy graczy - właściwości pola dziedziczone od konstruktora ale nie są dostępne bezpośrednio, rozszerzenie fukcjonalności kalsy
//przypisuje wszystkim obiektom tworzonym tak samo

Player.prototype.login = () => console.log("Logged!")
Player.prototype.logout = () => console.log("Logout!")
Player.prototype.moveleft = () => console.log("Go left!")
Player.prototype.moveright = () => console.log("Go right!")

//tworzymy graczy
const player1 = new Player("Nick1", "email1@google.com")
const player2 = new Player("Nick22", "email22@google.com")
const player3 = new Player("Nick333", "email333@google.com")

//wypisujemy graczy w konsoli
console.log(player1)
console.log(player2)
console.log(player3)

player1.shoot()
player1.login()