import React, { useContext, useEffect } from 'react'
import { dataContext } from '../context/DataProvider'

const Datos = () => {
    const { usuario, setUsuario, actualizarDatos, exito, setExito, setPrincipal, detectarUsuario } = useContext(dataContext)
    const actualizar = () => {
        actualizarDatos()
        setExito(true)
    }
    useEffect(() => {
        setPrincipal(false)
        detectarUsuario(usuario.uid)
    }, [])
    console.log('usuario', usuario)
    return (
        <div className='container mt-5'>
            {
                exito &&
                <div className="alert alert-success" role="alert">
                    Datos Guardados!!!
                    </div>
            }
            <div className='row'>
                <div className='col'>
                    <div className='form-floating mb-3'>
                        <input
                            type='text'
                            className='form-control'
                            id='empresa'
                            placeholder=''
                            value={usuario.empresa}
                            onChange={(e) => setUsuario({ ...usuario, empresa: e.target.value })}
                        />
                        <label htmlFor='empresa'>Nombre de la empresa</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input
                            type='text'
                            className='form-control'
                            id='nombre'
                            placeholder=''
                            value={usuario.name}
                            onChange={(e) => setUsuario({ ...usuario, name: e.target.value })}
                        />
                        <label htmlFor='nombre'>Nombre</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input
                            type='text'
                            className='form-control'
                            id='prefijo'
                            placeholder=''
                            value={usuario.prefijo}
                            onChange={(e) => setUsuario({ ...usuario, prefijo: e.target.value })}
                        />
                        <label htmlFor='prefijo'>Prefijo</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input
                            type='text'
                            className='form-control'
                            id='lema'
                            placeholder=''
                            value={usuario.lema}
                            onChange={(e) => setUsuario({ ...usuario, lema: e.target.value })}
                        />
                        <label htmlFor='lema'>Lema</label>
                    </div>
                   {/* <div className='mb-3'>
                         <label htmlFor='formFile' className='form-label'>Logo</label>
                        <input className='form-control' type='file' id='formFile' accept='image/*' />
                    </div> */}
                    <button type="button" className="btn btn-success w-100" onClick={actualizar}>Guardar</button>
                </div>
            </div>
        </div>
    )
}

export default Datos
