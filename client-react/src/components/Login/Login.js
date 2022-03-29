import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import './Login.scss'
function Login() {
  let navigate = useNavigate()



  //Creo un usuario en el localStorage para imitar que si existe en la base de datos
  const user = {
    email: 'user@email.com',
    password: '123456'
    
  }

  localStorage.setItem('token', JSON.stringify(user));




  return (
    <>
    
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
          let isUser = JSON.parse(localStorage.getItem('token'))
          console.log(valores.email, valores.password)

          if (isUser.email !== valores.email && isUser.password !== valores.password) {
            alert('El correo electronico ingresado no se encuentra registrado, asegurese de haberlo ingresado correctamente')
          }

          if (isUser.email === valores.email && isUser.password !== valores.password) {
            alert(`La contraseña ingresada no corresponde con el mail ingresado, asegurese de habelo ingresado correctamente`)

          }
          if (isUser.email !== valores.email && isUser.password !== valores.password) {

            alert('Tanto el email como la contraseña ingresados están incorrectos, por favor revise la información y vuelva a intentar')
          }

          if (isUser.email === valores.email && isUser.password === valores.password) {
            resetForm()           
            console.log('usuario logeado/Formik funcionando')
            
            


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
                  placeholder="email@email.com"
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
              type='submit'
               className='boton btn btn-primary'>Ingresar
            </button>
          </Form>
          

        )}


      </Formik>
       {/* Link para resetear la contraseña    */}
      <span className="d-flex justify-content-center align-items-center mt-5 pt-5">¿Olvidaste tu contraseña?</span>


    </>
  )
}

export default Login