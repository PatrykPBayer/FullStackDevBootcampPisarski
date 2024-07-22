//Kalkulator


window.onload = function(){
    document.getElementById("Calculate").onclick = function(){
        const inpbox1 = Number(document.getElementById("inputBox1").value)
        const inpbox2 = Number(document.getElementById("inputBox2").value)
        const action = document.getElementById("inputAction").value

        if(action == "+"){
            alert("Wynik dodawania to: " + (inpbox1 + inpbox2))
        }else if(action == "-"){
            alert("Wynik odejmowania to: " + (inpbox1 - inpbox2))
        }else if(action == "*"){
            alert("Wynik mnożenia to: " + (inpbox1 * inpbox2))
        }else if(action == "/"){
            alert("Wynik dzielenia to: " + (inpbox1 / inpbox2))
        }else{
            alert("Wybrano złe działanie")
        }

    }
}
