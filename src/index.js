import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeiroComponente from './componentes/PrimeiroComponente';
// import  TesteDefault, {CompA as A, CompB as B} from './componentes/DoisComponentes';
// import M from './componentes/MultiElementos' Eu poderia importar como M, uma vez que o M seria importado como "DEFAULT" lá no JSX.
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaBrazil from './componentes/FamiliaBrazil';
//import Familia from './componentes/Familia';
//import Membro from './componentes/Membro';
import ComponenteComFuncao from './componentes/ComponenteComFuncao'


const elemento = document.getElementById('root');

ReactDOM.render(
    
    <React.Fragment>
        <ComponenteComFuncao />
        <ComponenteComFuncao />
    </React.Fragment>
    
    // <div>
    //     <Familia sobrenome="Brazuca">
    //         <Membro nome="Bruno" />
    //         <Membro nome="Vanessa" />
    //         <Membro nome="Stephanie" />
    //         <Membro nome="Jéssica" />
    //     </Familia>
    //     <br></br>
    // </div>

    //<FamiliaBrazil sobrenome="Brazilia"/>
    // <div>
    //     <FamiliaBrazil />
    // </div>
    
    // <div>
    //     <TesteDefault valor="Teste TesteDefault do CompA" />
    // </div>

    //<div>
    //    <MultiElementos />
    //</div>

    /*<div>
        <PrimeiroComponente valor="Bom dia amigo!" valor2={2**4} valor3={Math.pow(2, 8)} />
    </div>*/
    // <div>
    //     <A valor="Olá eu sou o A!" />
    //     <B valor="Opa, sou o B!" />
    // </div>
, elemento);




//const jsx = <h1>Olá Reacts</h1>;
//ReactDOM.render(jsx, elemento);

//ReactDOM.render(<ul>
//                    <li>1) Josias</li>
//                    <li>2) Maria</li>
//                    <li>3) Eliéser</li>
//                </ul>
//                    , elemento);