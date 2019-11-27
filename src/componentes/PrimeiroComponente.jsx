import React from 'react'

let isLegal = true;

//Por padrão do parâmetro se usa props, mas pode ser qlker nome que vc quiser.
export default (props) => 
    <div>
        <h1>Valor 1: {props.valor}</h1>
        <h2>Valor 2: {props.valor2}</h2>
        <h2>Valor 3: {props.valor3}</h2>
        <p>Legal? {isLegal ? 'Sim' : 'Não'}</p>
    </div>


//export default () => 
//    <div>
//        <h1>Primeiro Componente (Arrow)!</h1>
//    </div>
    
//function primeiro(){
//    return <h1>Primeiro Componente!</h1>
//}

//export default primeiro;