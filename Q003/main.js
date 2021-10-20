// função responsavel pela operação algebrica
function calcularVolume(){
    const numero = document.querySelector('input').value
    let elementDom = document.querySelector('.resultado')
    const resultado =  numero % 2 != 0 ? 'impar': 'par'
    elementDom.innerHTML = `<p> O numero é  ${resultado}`
}

// quando clicar no botão vai executar a função calcularVolme
document.querySelector('button').addEventListener('click', (e) => {
     e.preventDefault
     calcularVolume()
    } )




