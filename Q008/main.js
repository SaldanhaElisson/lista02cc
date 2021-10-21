// função responsavel pela operação logica
function calcular(){
    const Media = document.querySelector('.numero1').value
    let elementDom = document.querySelector('.resultado')
    let resultado;

    if(Media <= 4.9){
        resultado = 'D'
    }else if( Media>=5 && Media<=6.9 ){
        resultado = 'C'
    }else if( Media>=7 && Media<=8.9 ){
        resultado = 'B'
    } else if( Media>=9 && Media<=10 ){
        resultado = 'A'
    }
    
    elementDom.innerHTML = `<p> O conceito é:  ${resultado} </p>`
}

// quando clicar no botão vai executar a função calcularVolme
document.querySelector('button').addEventListener('click', (e) => {
     e.preventDefault
     calcular()
    } )




