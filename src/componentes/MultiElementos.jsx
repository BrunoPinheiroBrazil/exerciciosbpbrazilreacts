import React from 'react';


//Solução 3, utilizando Array
export default props => [
        <h1>Parte 1</h1>,
        <h2>Parte 2</h2>
    ]

//Solução 2, utilizando Fragment do React.
// export default props =>
//     <React.Fragment>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </React.Fragment>
    
//Solução 1, mais comum e simples para MultiElementos importados.
// export default props =>
//     <div>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </div>