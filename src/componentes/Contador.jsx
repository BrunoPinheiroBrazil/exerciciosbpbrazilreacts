import React, {Component} from 'react'

export default class Contador extends Component{
    
    //Solução 01 para acessar o "this"
    // constructor(props){
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }

    //Solução 02
    //<button onClick={() => this.maisUm()}>Incrementar</button>

    state = {
        numero : 0
    }
    
    // maisUm = () =>{
    //     this.setState({ numero: this.state.numero + 1 })
    //     //this.state.numero++;
    //     //onsole.log(this);
    // }

    //Uso sempre a seta => para definir o "this" para o contexto atual aqui
    //e não o this geral..para eu poder acessar ele internamente 
    alterarNumero = (diferenca) => {
        this.setState({
            numero: this.state.numero + diferenca
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <div>
                    Número: {this.state.numero}
                </div>
                <button onClick={() => this.alterarNumero(1)}>Incrementar</button>
                <button onClick={() => this.alterarNumero(-1)}>Decrementar</button>
            </React.Fragment>
        )
    }
}