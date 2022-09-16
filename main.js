// Reproduz o som desejado recebendo o id dele
function tocaSom (idElementAudio){
    document.querySelector(idElementAudio).play();
}

// Seleciona todos os elementos com a class ".tecla"
const listaDeTeclas = document.querySelectorAll('.tecla');

// Estrutura de repetição ou condicional com for, ira se repetir enquanto 'i' for menor que a listaDeTeclas
for (let i = 0; i < listaDeTeclas.length; i++) {
        //agora a const 'tecla' tem o mesmo valor do incice da lista de teclas
    const tecla = listaDeTeclas[i]
        //a const 'instrumento' guarda o valor da segunda class da const 'tecla'
    const instrumento = tecla.classList[1]
        //uma string q guarda o id do instrumento referente ao botão q esta sendo pressionado
    const idAudio = `#som_${instrumento}`

    //Ao clicar em algum botão ativara uma function q vai reproduzir o som equivalente a essa tecla
    tecla.onclick = function(){
        tocaSom(idAudio)
    };
}
// O codigo pega o botão q esta sendo precionado atraves de seu indice na listaDeTeclas, logo em seguida ele pega sua class para completar a string do idAudio e ativa o som desejado pelo usuario com a function tocaSom 