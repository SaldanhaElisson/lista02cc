// função responsavel pela operação logica
function calcularVolume(){
    const numero1 = document.querySelector('.numero1').value
    const numero2 = document.querySelector('.numero2').value
    const numero3 = document.querySelector('.numero3').value
    let elementDom = document.querySelector('.resultado')
    let resultado
    if(numero1 == numero2 && numero1 == numero3){
        elementDom.innerHTML = `<p> Todos os valores são iguais`
        return
    }

    if(numero1 > numero2) {
        if(numero1 >= numero3){
            resultado = numero1
        }
    } else if(numero2 > numero3){
        resultado= numero2
    } else{
        resultado= numero3
    }
    elementDom.innerHTML = `<p> O maior numero é  ${resultado}`
}

// quando clicar no botão vai executar a função calcularVolme
document.querySelector('button').addEventListener('click', (e) => {
     e.preventDefault
     calcularVolume()
    } )




