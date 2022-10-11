let visor = document.getElementById('visor');
let valorSalvo = null;
let operadorSalvo = null;

let botaoNum = document.getElementsByClassName('numero');
for(let botao of botaoNum){
    botao.addEventListener('click', clicaNum);
}
function clicaNum(event){
    if(isNaN(visor.innerHTML) === true){
        visor.innerHTML = event.target.innerHTML;
    } else {
        visor.innerHTML = visor.innerHTML + event.target.innerHTML;
    }

}

let botaoC = document.getElementById('c');
botaoC.addEventListener("click", limpaVisor);
function limpaVisor(event){
    visor.innerHTML = "";
    valorSalvo = null;
}

let botaoOp = document.getElementsByClassName('operadores   ');
for(let botao of botaoOp){
    botao.addEventListener('click' , clicaOp);
} 
function clicaOp(event){
    if(isNaN(visor.innerHTML) === false){
        if(valorSalvo === null){
            valorSalvo = Number(visor.innerHTML);
        } else {
            let resultado = executaOp (valorSalvo, operadorSalvo, Number(visor.innerHTML))
            valorSalvo = resultado
        }
    }
    visor.innerHTML = event.target.innerHTML;
    operadorSalvo = event.target.innerHTML;
} 

let botaoIgual = document.getElementById('calcula');
botaoIgual.addEventListener('click' , calcResultado);

function calcResultado(event){
    if (valorSalvo != null && operadorSalvo != null && isNaN(visor.innerHTML) === false){
        let resultado = executaOp(valorSalvo, operadorSalvo, Number(visor.innerHTML));
        visor.innerHTML = resultado;
        valorSalvo = null;
        operadorSalvo = null;
    }
}

function executaOp(valor1, operador, valor2){
    if (operador === "+"){
         return valor1 + valor2;
    } else if (operador === "-"){
        return valor1 - valor2;
    } else if (operador === "X"){
        return valor1 * valor2;
    } else if (operador === "/"){
        return valor1 / valor2
    }
}

document.getElementsByTagName('body')[0].addEventListener('keydown', pressiona_tecla);

function pressiona_tecla(event) {
    if (event.key === '*'){
        document.getElementById('botao-multiplicacao').click();
    } else if (event.key === '1'){
        document.getElementById('1').click();
    } else if (event.key === '2'){
        document.getElementById('2').click();
    } else if (event.key === '3'){
        document.getElementById('3').click();
    } else if (event.key === '4'){
        document.getElementById('4').click();
    } else if (event.key === '5'){
        document.getElementById('5').click();
    } else if (event.key === '6'){
        document.getElementById('6').click();
    } else if (event.key === '7'){
        document.getElementById('7').click();
    } else if (event.key === '8'){
        document.getElementById('8').click();
    } else if (event.key === '9'){
        document.getElementById('9').click();
    } else if (event.key === '0'){
        document.getElementById('0').click();
    } else if (event.key === '-'){
        document.getElementById('-').click();
    } else if (event.key === '+'){
        document.getElementById('+').click();
    } else if (event.key === '/'){
        document.getElementById('/').click();
    } else if (event.key === '.'){
        document.getElementById('.').click();
    } else if (event.keyCode === 13){
        document.getElementById('calcula').click();
    } 
    
}
