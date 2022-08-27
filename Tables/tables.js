// changing active tab when clicking
function week1(){
    document.getElementById("navweek1").classList.add("active")

    document.getElementById("navweek2").classList.remove("active")
    document.getElementById("navweek3").classList.remove("active")
    document.getElementById("navweek4").classList.remove("active")
}

function week2(){
    document.getElementById("navweek1").classList.remove("active")

    document.getElementById("navweek2").classList.add("active")
    document.getElementById("navweek3").classList.remove("active")
    document.getElementById("navweek4").classList.remove("active")
}

function week3(){
    document.getElementById("navweek1").classList.remove("active")
    document.getElementById("navweek2").classList.remove("active")

    document.getElementById("navweek3").classList.add("active")

    document.getElementById("navweek4").classList.remove("active")
}

function week4(){
    document.getElementById("navweek1").classList.remove("active")
    document.getElementById("navweek2").classList.remove("active")
    document.getElementById("navweek3").classList.remove("active")
    
    document.getElementById("navweek4").classList.add("active")
}