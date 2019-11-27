import React from 'react'
import Filho from './Filho'

export default props => {
<<<<<<< HEAD
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
=======
    const notificarSaida = lugar => alert("Liberado para ${lugar}")
}
>>>>>>> 788ef63261ce17771a1cd25a60e75e3d76728798
