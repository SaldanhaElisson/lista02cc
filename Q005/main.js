// função responsavel pela operação algebrica
function calcularVolume(){
    const numero1 = document.querySelector('.numero1').value
    const numero2 = document.querySelector('.numero2').value

    let elementDom = document.querySelector('.resultado')
    if(numero1 == numero2){
        elementDom.innerHTML = `<p> Todos os valores são iguais </p>`  
        return  
    }
  
    elementDom.innerHTML = `<p> A diferença entre o maior valor e o menor é:  ${Math.abs(numero1- numero2)} </p>`
}

// quando clicar no botão vai executar a função calcularVolme
document.querySelector('button').addEventListener('click', (e) => {
     e.preventDefault
     calcularVolume()
    } )




