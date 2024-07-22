//Write a program that performs a get query for the sample endpoint -> http://httpbin.org/get


async function callApi(){
    const apiResponse = await fetch("http://httpbin.org/get")   //await by poczekało na wykonanie

    if(!apiResponse.ok){
        console.log("Error:" + apiResponse.status)
    }else{
        console.log(apiResponse)
    }
    // .then(res => {
    //     console.log(res)
    // })
    // .catch(err => {
    //     console.log("Error")
    // })
    //console.log(apiResponse)
}

window.onload = function(){
    callApi()
}

