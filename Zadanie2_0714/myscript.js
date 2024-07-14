//2. Utwórz przycisk z atrybutem name="moj-przycisk".
// Po kilknięciu na przycisk chcemy korzystając z obiektu zdarzenia wyświetlić: 
//przechwycony obiekt zdarzenia, wartośc atrybutu name, 
//wartość atrybutu value. (e.target.name, e.target.value)

window.onload = function(){
    document.getElementById("buttonClick").onclick = function(){
        alert(document.getElementById("buttonClick").name + " and " + document.getElementById("buttonClick").value)
        
    }
}