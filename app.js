let titulo = document.querySelector('h1');
let parrafo = document.querySelector("p");
let intentos = 1;
let numeroSecreto = 0;


function condicionesIniciales(){
    titulo.innerHTML="Número Secreto";
    parrafo.innerHTML="Selecciona un Número del 1 al 10";
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled','True');
    console.log(numeroSecreto);
}

condicionesIniciales();


function verificarNum() {
    let numUser = parseInt(document.getElementById('numUserInput').value);
    
    if (numUser === numeroSecreto) {
        parrafo.innerHTML="Acertaste, en "+intentos+" "+((intentos==1) ? "intento" : "intentos");   
        document.getElementById('reiniciar').removeAttribute('disabled');     
    }else{
        if (numUser > numeroSecreto) {
            parrafo.innerHTML="No Acertaste, el número secreto es mayor!";
        } else {
            parrafo.innerHTML="No Acertaste, el número secreto es menor!";
        }
        intentos++;
        cleanInput();
    }
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

function cleanInput() {
    document.getElementById('numUserInput').value = "";
}

function newGame(){
    cleanInput();
    condicionesIniciales();
    
}
