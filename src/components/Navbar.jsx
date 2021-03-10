import React, { useContext } from 'react'
import { dataContext } from '../context/DataProvider'

const Navbar = () => {
    const { usuario, logIn, cerrarSesion, setDatos, setPrincipal } = useContext(dataContext)
    return (
        <nav className='navbar navbar-dark bg-dark sticky-top'>
            <span className="navbar-brand ms-3">
                Historial Clinico
            </span>
            <div>
                {
                    !usuario.estado ?
                        <>
                            <button onClick={() => logIn()} className='btn btn-outline-success me-2'>Acceder</button>
                        </>
                        :
                        <>
                            <button onClick={()=> setPrincipal(true)} className="btn btn-outline-primary me-2">Inicio</button>
                            <button onClick={()=> setDatos(true)} className="btn btn-outline-primary me-2">Datos</button>
                            <button onClick={() => cerrarSesion()} className='btn btn-outline-danger me-2'>Cerrar Sesion</button>   
                        </>
                }
            </div>
        </nav>
    )
}

export default Navbar
