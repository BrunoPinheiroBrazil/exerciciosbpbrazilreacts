import React from 'react';
import Membro from './Membro';


export default props =>
    <div>
        <Membro nome="Bruno" sobrenome={props.sobrenome} />
        <Membro nome="Vanessa" sobrenome={props.sobrenome} />
        <Membro nome="Stephanie" sobrenome={props.sobrenome} />
        <Membro nome="Jéssica" sobrenome={props.sobrenome} />
    </div>