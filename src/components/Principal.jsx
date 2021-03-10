import React, { useContext, useEffect } from 'react'
import { dataContext } from '../context/DataProvider'

const Principal = () => {
	const { setDatos, usuario,  detectarUsuario } = useContext(dataContext)
	useEffect(() => {
		setDatos(false)
		detectarUsuario(usuario.uid)
	}, [])
	return (
		<>
			<div className="card">
				<div className="card-header">
					{usuario.empresa}
  				</div>
				<div className="card-body">
					<blockquote className="blockquote mb-0">
						<p>{`${usuario.prefijo}  ${usuario.name}`}</p>
						<footer className="blockquote-footer">{usuario.lema} </footer>
					</blockquote>
				</div>
			</div>
		</>
	)
}

export default Principal
