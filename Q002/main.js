// função responsavel pela operação algebrica
function calcularVolume(){
    const raio = document.querySelector('input').value
    let elementDom = document.querySelector('.resultado')
    const resultado =  (4*3.14* Number(raio)**3)/3
    elementDom.innerHTML = `<p> Volume = ${resultado.toFixed(2)}`
}

// quando clicar no botão vai executar a função calcularVolme
document.querySelector('button').addEventListener('click', (e) => {
     e.preventDefault
     calcularVolume()
    } )




