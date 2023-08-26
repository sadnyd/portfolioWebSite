let message="inside main"
let workEl=document.getElementById("work-btn")
let messageEl=document.getElementById("message-el")

function msg(){
    console.log(message)
    messageEl.textContent=message
}
function work(){
    message="inside work"
    msg()
}

function about(){
    message="inside about"
    msg()
    
}

function contact(){
    message="inside contact"
    msg()
}

function blogs(){
    message="inside blogs"
    msg()
}
