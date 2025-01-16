let listaNumeroSorteado = [];
let limiteSortidos = 3
let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMsgInicial()

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMsgInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${limiteSortidos}`);
}



function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numerosecreto){
        exibirTextoNaTela('h1', 'Acertou!!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativas';
        let msgTentativas = `Você descobriu o número Secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(chute > numerosecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * limiteSortidos + 1);
    let quantidadeNumerosEscolhidoa = listaNumeroSorteado.length;

    if (quantidadeNumerosEscolhidoa == limiteSortidos){
        listaNumeroSorteado = [];
    }
    if(listaNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumeroSorteado.push(numeroEscolhido);
        console.log(listaNumeroSorteado)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    exibirMsgInicial();
    numerosecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1 ;
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
