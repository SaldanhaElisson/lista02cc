// função responsavel pela operação logica
function calcular(){
    const Month = document.querySelector('.numero1').value
    let elementDom = document.querySelector('.resultado')
    // expresão regular que verificar se o numero está entre 1 e 12
    const regMonth = /(1([0-2])|^0*([1-9]){1}$)/
    const meses = ['janeiro', 'fevereiro', 'março', 'abril' ,'maio', 'junho' ,'julho' ,'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    let resultado;

    // logica responsavel em colocar o mês
    if(regMonth.test(Month)){
        resultado = meses[Number(Month)-1]
        elementDom.innerHTML = `<p> O resultado é:  ${resultado} </p>`
    }else{
        elementDom.innerHTML = `<p> Mês invalido <p>`
    }

}

// quando clicar no botão vai executar a função calcularVolme
document.querySelector('button').addEventListener('click', (e) => {
     e.preventDefault
     calcular()
    } )




