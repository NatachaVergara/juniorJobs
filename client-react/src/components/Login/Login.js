import React from 'react'
import { Field, Form, Formik } from 'formik'
import { BsShieldLockFill } from "react-icons/bs";
import './Login.scss'
import { useUserContext } from '../../Store/UserContext';
import axios from 'axios'
function Login() {
  const { userLogin } = useUserContext()


  return (
    <div className='formPage'>

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}


        //Validando los inputs
        validate={(valores) => {
          let isError = {}
          //Validando el email
          if (!valores.email) {
            isError.email = 'Porfavor ingrese su email'
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
            isError.email = 'El correo solo puede contener letras, números, puntos, guiones, guion bajo y @'
          }
          //Validando la contraseña
          if (!valores.password) {
            isError.password = 'Por favor ingrese su contraseña'
          }

          return isError
        }}

        onSubmit={(valores, { resetForm }) => {
          userLogin(valores.email, valores.password, resetForm)

          //hardcodie el tipo de user
          let userType = 'Talent'


          const response = axios.post('http://localhost:3002',
            JSON.stringify({
              email: valores.email,
              password: valores.password,
              userType
            }),
          {
            header: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': 'http://localhost:3002',
              'Access-Control-Allow-Credentials': 'true'
            }
            
          })
          console.log(JSON.stringify(response?.data))
        }}
      >

        {({ errors, touched }) => (

          <Form className='form container mt-5 pt-5'>
            <h1 className='d-flex justify-content-center align-items-center mb-5'>LOGIN</h1>
            <div className="fields d-flex flex-column flex-md-row justify-content-around align-items-stretch">
              <div className="emailDiv mb-3 d-flex flex-column justify-content-center align-item-center">
                <label htmlFor="email" className='mb-2'>Email</label>

                <Field
                  type="email"
                  className="emailField form-control"
                  id="email"
                  name="email"
                  aria-labelledby="emailHelp"
                  placeholder="user@email.com"
                />

                {touched.email && errors.email ? <div className="form-text text-danger fs-6">{errors.email}</div> : <div id="emailHelp" className="form-text ">Nunca compartiremos su email con nadie.</div>}
              </div>

              <div className='mb-3 passwordDiv'>
                <label htmlFor="email m-1" className='mb-2'>Contraseña</label>
                <Field
                  type="password"
                  className="form-control passwordField"
                  id="password"
                  name="password"
                  placeholder="123456"
                />
                {touched.password && errors.password ? <div className="form-text text-danger fs-6">{errors.password}</div> : null}
              </div>
            </div>
            <button
              type='submit' className='boton btn btn-primary'>Ingresar
            </button>
          </Form>


        )}


      </Formik>
      {/* Link para resetear la contraseña    */}
      <span className="d-flex justify-content-center align-items-center mt-5 pt-5">
        <BsShieldLockFill /> ¿Olvidaste tu contraseña?
      </span>


    </div >
  )
}

export default Login