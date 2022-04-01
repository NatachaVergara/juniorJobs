import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import { BsShieldLockFill } from "react-icons/bs";
import { talentUsers } from '../../db/dbUsers'
import './Login.scss'
function Login() {
  

  let navigate = useNavigate()

  console.log(talentUsers[0])
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
          console.log(talentUsers)
          console.log(valores.email, valores.password)

          if (talentUsers[0].email !== valores.email && talentUsers[0].password !== valores.password) {
            alert('El correo electronico ingresado no se encuentra registrado, asegurese de haberlo ingresado correctamente')
          } else if (talentUsers[0].email === valores.email && talentUsers[0].password !== valores.password) {
            alert(`La contraseña ingresada no corresponde con el mail ingresado, asegurese de habelo ingresado correctamente`)

          } else if (talentUsers[0].email !== valores.email && talentUsers[0].password !== valores.password) {

            alert('Tanto el email como la contraseña ingresados están incorrectos, por favor revise la información y vuelva a intentar')
          } else if (talentUsers[0].email === valores.email && talentUsers[0].password === valores.password) {
            resetForm()
           localStorage.setItem('isLogin', true)
           navigate('/')
          }

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


    </div>
  )
}

export default Login