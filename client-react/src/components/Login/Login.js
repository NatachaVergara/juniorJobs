import React from 'react'
import { Field, Form, Formik } from 'formik'
import { BsShieldLockFill } from "react-icons/bs";
import './Login.scss'
import { useUserContext } from '../../Store/UserContext';
//import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
// import { postLogin } from '../../hooks/postLogin-axios';
function Login() {
  const { userLogin } = useUserContext()
 

  return (
    <div className='formPage'>

      <Formik
        initialValues={{
          email: '',
          password: '',
          userType: ''
        }}


        //Validando los inputs
        validate={(values) => {
          let isError = {}
          //Validando el email
          if (!values.email) {
            isError.email = 'Please, enter your email'
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            isError.email = 'El correo solo puede contener letras, números, puntos, guiones, guion bajo y @'
          }
          //Validando la contraseña
          if (!values.password) {
            isError.password = 'Please, enter your password'
          }

          //Validando los radios
          if (!values.userType) {
            isError.userType = 'Please, select how are you going to login, talent or recruter'
          }

          return isError
        }}

        onSubmit={(values, { resetForm }) => {
          userLogin(values, resetForm)

        }}
      >

        {({ errors, touched }) => (

          <Form className='form container mt-5 pt-5'>
            <div className='d-flex flex-column mb-5'>
              <h1 className='d-flex justify-content-center align-items-center'>LOGIN</h1>
              <div className='container d-flex justify-content-center align-items-center'>
                <div className='pe-2'>
                  <Field type="radio" name="userType" value="Recruiter" className='me-2'/>
                  Soy recruiter</div>
                <div>
                  <Field type="radio" name="userType" value="Talent" className='me-2' />
                  Soy talent</div>
              </div>
              {errors.userType ? <div className="form-text text-danger fs-6 ms-3">{errors.userType}</div> : null}

            </div>
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