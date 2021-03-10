import React, { createContext, useEffect, useState } from 'react'
import { auth, db, provider } from '../firebase'

const dataContext = createContext()

const DataProvider = (props) => {

    const dataUsuario = {
        uid: null,
        estado: null,
        email: '',
        name: '',
        prefijo: '',
        logo: '',
        empresa: '',
        lema: ''
    }

    const [usuario, setUsuario] = useState(dataUsuario)
    const [exito, setExito] = useState(false)
    const [datos, setDatos] = useState(false)
    const [principal, setPrincipal] = useState(false)


    useEffect(() => {
        const name = async () => {
            try {
                auth.onAuthStateChanged((user) => {
                    console.log('user', user)
                    if (user) {
                        setUsuario({
                            ...dataUsuario,
                            uid: user.uid,
                            estado: true,
                            email: user.email
                        }) 
                    } else {
                        setUsuario({ ...dataUsuario, estado: false })
                    }
                })

            } catch (error) {
            }
        }
        name()
        console.log('usuario', usuario)
        detectarUsuario()
    }, [])

    const logIn = async () => {
        try {
            const res = await auth.signInWithPopup(provider)
            const usuarioDB = await db.collection('usuarios').doc(res.user.uid).get()
            if (usuarioDB.exists) {
                setUsuario({
                    ...dataUsuario,
                    name: usuarioDB.data().name,
                    logo: usuarioDB.data().logo,
                    estado: true,
                    empresa: usuarioDB.data().empresa,
                    prefijo: usuarioDB.data().prefijo,
                    lema: usuarioDB.data().lema,
                    uid: usuarioDB.data().uid,
                    email: usuarioDB.data().email
                })
            } else {
                await db.collection('usuarios').doc(res.user.uid).set({
                    ...dataUsuario,
                    uid: res.user.uid,
                    name: res.user.displayName,
                    estado: true,
                    email: res.user.email
                })
            }
            
        } catch (e) {
            console.log('e', e)
        }
    }


    const detectarUsuario = async () => {
        try {
            let user = auth.currentUser
            if (user) {
                const usuarioDB = await db.collection('usuarios').doc(usuario.uid).get()
                if (usuarioDB.exists) {
                    console.log('simon')
                    setUsuario({
                        ...dataUsuario,
                        name: usuarioDB.data().name,
                        logo: usuarioDB.data().logo,
                        estado: true,
                        empresa: usuarioDB.data().empresa,
                        prefijo: usuarioDB.data().prefijo,
                        lema: usuarioDB.data().lema, 
                        uid: usuarioDB.data().uid,
                        email: usuarioDB.data().email
                    })
                } else {
                    console.log('naranjas', usuarioDB)
                    setUsuario({
                        ...dataUsuario,
                        uid: user.uid,
                        name: user.displayName,
                        estado: true,
                        email: user.email
                    })
                }
            } else {
                setUsuario({ ...dataUsuario, estado: false })
            }
        } catch (e) {
            console.log('e', e)
        }
    }

    const cerrarSesion = async () => {
        try {
            await auth.signOut()
        } catch (error) {
            console.log('error', error)
        }
        detectarUsuario()
    }

    const actualizarDatos = async () => {
        try {
            await db.collection('usuarios').doc(usuario.uid).set(usuario)
        } catch (error) {
            console.log('error', error)
        }
    }


    return (
        <dataContext.Provider value={{
            usuario, logIn, cerrarSesion, setUsuario, actualizarDatos, exito, setExito, datos, setDatos, principal, setPrincipal,  detectarUsuario
        }}>
            {props.children}
        </dataContext.Provider>
    )
}
export { DataProvider, dataContext }
