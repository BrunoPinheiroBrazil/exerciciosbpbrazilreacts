import React from 'react'
import Filho from './Filho'

export default props => {
    let lugarInformado = 'Nenhum'
    const notificarSaidaPai = 
    lugar => {
        lugarInformado = alert(`Liberado para ${lugar}`)
        console.log(lugar)
    }
    return (
        <div>
            <Filho notificarSaida={notificarSaidaPai} />
        </div>
    )
}
