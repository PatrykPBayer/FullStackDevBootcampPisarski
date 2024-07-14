//Wzorce projektowe - gotowe rozwiązania na istniejące problemy

//Factory - ułątwia tworzenie nowych obiektów określonego (stworzonego typu)

//Klasyczna klasa
/*
class Product{
    display(){
        console.log("Product")
    }
}

//Klasa product factory do częstego tworzenia
class ProductFactory{
    createProduct(){
        return new Product()
    }
}

const factory = new ProductFactory()

const product = factory.createProduct();    //średnik
const product2 = factory.createProduct();
product.display()
product2.display()
*/

//z parametrami

class Product{

    constructor(width, height, weight){
        this.width = width
        this.height = height
        this.weight = weight
    }

    display(){
        console.log("Product: " + this.width + " " + this.height + " " + this.weight)
    }
}

//Klasa product factory do częstego tworzenia
class ProductFactory{
    createProduct(width, height, weight){
        return new Product(width, height, weight)
    }
}

const factory = new ProductFactory()

const product = factory.createProduct(20, 100, 90);    //średnik nieobowiązkowy
const product2 = factory.createProduct(30, 60, 90);
product.display()
product2.display()

