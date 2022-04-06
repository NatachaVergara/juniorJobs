import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { talentUsers } from '../db/dbUsers'


const UserContext = createContext(null)
//Esta es la funcion que tengo que llamar en los componentes 
//const { } = useUserContext()
export const useUserContext = () => {
  return useContext(UserContext)
}

//Creo una funcion para utilizar el localStorage y que no se pierda el logueo del user cada vez que se refresca el sitio

const getLocalUser = () => {
  let user = localStorage.getItem('user')

  if (user) {
    return JSON.parse(localStorage.getItem('user'))
  } else {
    return false
  }
}







const UserContextProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(getLocalUser())
  let navigate = useNavigate()


  const userLogin = (email, password, resetForm) => {
    // console.log(talentUsers)
    // console.log(email, password)

    if (talentUsers[0].email !== email && talentUsers[0].password !== password) {
      alert('El correo electronico ingresado no se encuentra registrado, asegurese de haberlo ingresado correctamente')
    } else if (talentUsers[0].email === email && talentUsers[0].password !== password) {
      alert(`La contraseña ingresada no corresponde con el mail ingresado, asegurese de habelo ingresado correctamente`)

    } else if (talentUsers[0].email !== email && talentUsers[0].password !== password) {

      alert('Tanto el email como la contraseña ingresados están incorrectos, por favor revise la información y vuelva a intentar')
    } else if (talentUsers[0].email === email && talentUsers[0].password === password) {
      resetForm()
      setIsUser(true)
      navigate('/')
    }
  }
//Creo un estado user dentro de mi localStorage
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(isUser))
  }, [isUser])




  return (
    <UserContext.Provider
      value={{ isUser, setIsUser, userLogin }}
    >
      {children}
    </UserContext.Provider>
  )
}




export default UserContextProvider