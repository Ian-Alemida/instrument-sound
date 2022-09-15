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

document.querySelector('.tecla_pom').onclick = tocaSomPom;
document.querySelector('.tecla_clap').onclick = tocaSomClap;
document.querySelector('.tecla_toim').onclick = tocaSomToim;
document.querySelector('.tecla_splash').onclick = tocaSomSplash;
