let message="inside main"

let messageEl=document.getElementById("message-el")

function work(){
    message="inside work"
}

function about(){
    message="inside about"
}

function contact(){
    message="inside contact"
}

function blogs(){
    message="inside blogs"
}

messageEl.textContent=message