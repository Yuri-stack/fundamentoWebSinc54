function hello(){
    alert("Hello World")
}

let nome = document.getElementById('nome');
let email = document.getElementById('email');
let assunto = document.getElementById('assunto');

function enviar(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Todos os campos devem ser preenchidos")
    }else{
        alert("Seu feedback foi enviado")
    }
}

// Location

let paragrafo = document.querySelector('#espaco')

function getSpace(){
    let local =  location.href
    paragrafo.innerHTML = local
}

// Dark Theme
function darkTheme(){
    document.body.classList.toggle('dark-theme')
}