import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from "sweetalert";


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


  const userLogin = async (values, resetForm) => {


    try {
      const response = await axios.post('http://localhost:3002/users/login',
        {
          email: values.email,
          password: values.password,
          userType: values.userType
        },
        { header: { 'Content-type': 'application/x-www-form-urlencoded' } }
      )

      console.log(response)  
      swal(response.data)
      resetForm()
      //Aca podriamos usar el userType en vez de es user true-false
      //setIsUser(value.userType)
      setIsUser(true)
      navigate('/')



    } catch (error) {
      return swal(JSON.stringify(error.response.data.message));
      //alert(JSON.stringify(error.response.data.message))
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