//1. Zdefiniuj obiekt o nazwie oferta, z następującymi właściwościami:
// marka, model, cena i metodą o nazwie koszt100km(), która zwraca wartość 37 zł.

const Oferta = function(marka, model, cena){
    this.marka = marka
    this.model = model
    this.cena = cena
    this.koszt100km = () => console.log("37 zł")
}

const oferta = new Oferta("BMW", "3", 90000)

console.log(oferta)