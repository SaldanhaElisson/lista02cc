// função responsavel pela operação algebrica
function calcularTabuada (number){
    let html="";
    for(let i = 1; i <= 10; i++){
        html += `<tr> <td> ${number} * ${i} = </td> <td> ${number * i} </td> </tr>` 
    }
   return html
}

//função responsavel por gerar a tabela
function gerarTabela (quantidade){
   
    for(let i = 1; i <= quantidade; i++){
        let tabela = document.querySelector(`#tabuada${i}`)
        console.log(tabela)
        let tabuada = calcularTabuada(i)
        tabela.innerHTML = tabuada
    }
}

// execução do algoritmo
gerarTabela(3)


