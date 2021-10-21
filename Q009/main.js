// função responsavel pela operação logica
function calcular(){
    const Caracteres = document.querySelector('.caracteres').value
    const numero1 = document.querySelector('.numero1').value
    const numero2 = document.querySelector('.numero2').value

    let elementDom = document.querySelector('.resultado')
    let resultado;
    const regCarcateres = /(\x2B|\x2F|\x2A|\x2D)/
    const operacoes = {
        "+": () => {return Number(numero1)+Number(numero2)},
        "/": () => {return Number(numero1)/ Number(numero2)},
        "-": () => {return Number(numero1)-Number(numero2)},
        "*": () => {return Number(numero1)*Number(numero2)},
    }

    if(regCarcateres.test(Caracteres)){
        resultado = operacoes[`${Caracteres}`]()
    } else{
        alert('Por favor digite os caracteres certo')
    }
    
    
    elementDom.innerHTML = `<p> O resultado é:  ${resultado.toFixed(2)} </p>`
}

// quando clicar no botão vai executar a função calcularVolme
document.querySelector('button').addEventListener('click', (e) => {
     e.preventDefault
     calcular()
    } )




