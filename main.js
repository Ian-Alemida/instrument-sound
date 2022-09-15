/*
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}

function tocaSomSplash(){
    document.querySelector('#som_tecla_splash').play();
}

function tocaSomToim(){
    document.querySelector('#som_tecla_toim').play();
}

function tocaSomTic(){
    document.querySelector('#som_tecla_tic').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
document.querySelector('.tecla_tic').onclick = tocaSomTic;
document.querySelector('.tecla_clap').onclick = tocaSomClap;
document.querySelector('.tecla_toim').onclick = tocaSomToim;
document.querySelector('.tecla_splash').onclick = tocaSomSplash;
*/

function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0

while(contador < 9 ){
    listaDeTeclas[0].onclick = tocaSomPom;
    contador = contador++
}