function updatetime() {
    document.getElementById("timenow").innerHTML= new Date();

}

setInterval(updatetime , 1000);