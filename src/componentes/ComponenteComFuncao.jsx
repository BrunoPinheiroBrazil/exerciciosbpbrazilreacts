import React from 'react'

export default props => {
    
    const aprovados = ['Paula', 'Henrique', 'Gustavo', 'Pâmela']
    let num = Math.random()

    const gerarItens = itens =>{
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {num}
            {gerarItens(aprovados)}
        </ul>
    )
        
}