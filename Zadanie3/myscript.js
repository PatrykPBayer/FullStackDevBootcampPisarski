//3.Pobierz 2 zmienne z formularza i wypisz ich sumę za pomocą alert (document.getElementById lub addEventListener)


window.onload = function(){

    document.getElementById("actionButton").onclick = function(){
        alert("Suma liczb to: " + (Number(document.getElementById("inputBoxZm1").value) + Number(document.getElementById("inputBoxZm2").value)))
    }
    //druga metoda
    const button = document.querySelector('#actionButton')
    const inputBoxZm1 = document.querySelector('#inputBoxZm1')
    const inputBoxZm2 = document.querySelector('#inputBoxZm2')

    button.addEventListener("click", function(){
        alert(Number(inputBoxZm1.value) + Number(inputBoxZm2.value))
    })
}

