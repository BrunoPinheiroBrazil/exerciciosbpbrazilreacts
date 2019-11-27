import React from 'react';
import {filhosComProps} from '../utils/utils'

export default props =>
    <div>
        <h1>Família</h1>
        {filhosComProps(props)/*Melhor solução! Utilizando uma função encapsulada no "utils/utils.js"*/}
        
        {/*React.Children.map(props.children, filho => {
            return React.cloneElement(filho, {...props}); //Melhor Solução quando passamos diversos elementos para os objetos filhos!
        })*/}
        {/*React.cloneElement(props.children, {...props})/*Crio um novo objeto, passo as propriedades, 
                                                e uso o tal do Spread, que vai espalhar as propriedades 
                                                para dentro do novo obj criado ali mesmo */}
        {/*React.cloneElement(props.children, //Aqui eu passo detalhadamente qual parâmetro quero passar.
            { sobrenome : props.sobrenome })*/}
        {/*React.cloneElement(props.children, //Aqui eu passo tudo que é propriedades, 
                                              //independente de nomes. 
            {props})*/}
    </div>