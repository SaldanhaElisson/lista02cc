// função responsavel pela operação logica
function calcular(){
    const numero1 = document.querySelector('.numero1').value
    const numero2 = document.querySelector('.numero2').value
    const numero3 = document.querySelector('.numero3').value
    let elementDom = document.querySelector('.resultado')
    let resultado = Number(numero1)**2 + Number(numero2)+Number(numero3)
    
    elementDom.innerHTML = `<p> O resultado é:  ${resultado}`
}

// quando clicar no botão vai executar a função calcularVolme
document.querySelector('button').addEventListener('click', (e) => {
     e.preventDefault
     calcular()
    } )




