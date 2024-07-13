
window.onload = function(){

    document.getElementById("actionButton").onclick = function(){
        alert("Suma liczb to: " + (Number(document.getElementById("inputBoxZm1").value) + Number(document.getElementById("inputBoxZm2").value)))
    }

}

