import React, { useContext } from 'react'
import { dataContext } from '../context/DataProvider'
import Datos from './Datos'
import Principal from './Principal'

const Navigation = () => {
    const { usuario, datos, principal } = useContext(dataContext)
    return (
        <div>
            {
                usuario.estado &&
                datos &&
                <Datos />

            }
            {   usuario.estado &&
                principal &&
                <Principal />
            }
        </div>
    )
}

export default Navigation
