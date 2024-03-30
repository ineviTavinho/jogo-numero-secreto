let numeroSecreto = gerarNumeroAleatorio();
let tentativas= 1;
let palavraTentativa;

function gerarNumeroAleatorio(){
    return parseInt(Math.random() *100 +1 );
}
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
}
function zerarEntrada(){
    chute = document.querySelector('input');
    chute.value = '';
}
function mensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número de 1 a 100');
}
mensagemInicial();

function chutar(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        document.getElementById('chutar').setAttribute('disabled', true);
        document.getElementById('reiniciar').removeAttribute('disabled');
        zerarEntrada();
        palavraTentativa = tentativas>1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1',`Você acertou`);
        exibirTextoNaTela('p',`O número secreto é ${numeroSecreto} e você encontrou com ${tentativas} ${palavraTentativa}`);
    }while(chute != numeroSecreto){
        zerarEntrada();
        if (chute > numeroSecreto){
            exibirTextoNaTela('p',`O número secreto é menor que ${chute}`);
        }else{
            exibirTextoNaTela('p',`O número secreto é maior que ${chute}`);
        }
        return tentativas++;
    }
}
function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    document.getElementById('chutar').removeAttribute('disabled');
    mensagemInicial();
    zerarEntrada();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}