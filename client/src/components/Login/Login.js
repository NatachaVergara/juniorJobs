import React from 'react'
import { Field, Form, Formik } from 'formik'
//import { BsShieldLockFill } from "react-icons/bs";
import './Login.scss'

//import { usePostLogin } from '../../hooks/usePostLogin';
import { emailRegex} from '../../utils/regex';
import { errorAlerts} from '../../utils/errorsAlert'
import {useCRUD} from '../../services/useCRUD'



function Login() {
  //const { userLogin } = useUserContext()
 // const { fetchData } = usePostLogin()
const {onLoginSubmit} = useCRUD()
  return (
    <div className='formPage  mb-5 pb-5'>

      <Formik
        initialValues={{
          email: '',
          password: '',
          userType: '', 
          login: true
        }}
        className=''

        //Validando los inputs
        validate={(values) => {
          let isError = {}
          //Validando el email
          if (!values.email) {
            isError.email = 'Please, enter your email'
          } else if (!emailRegex.test(values.email)) {
            isError.email = errorAlerts[2].emailAlert
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
         //fetchData(values, resetForm)
         onLoginSubmit(values)
        

        }}
      >

        {({ errors, touched }) => (

          <Form className='form container mt-5 pt-5 bt-5'>
            <div className='d-flex flex-column mb-5'>
              <h1 className='d-flex justify-content-center align-items-center'>LOGIN</h1>
              <div className='container d-flex justify-content-center align-items-center'>
                <div className='pe-2'>
                  <Field
                    type="radio"
                    name="userType"
                    value="Recruiter"
                    className='me-2' />
                  as Recruiter</div>
                <div>
                  <Field type="radio"
                    name="userType"
                    value="Talent"
                    className='me-2' />
                  as Talent</div>
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

                {touched.email && errors.email ? <div className="form-text text-danger fs-6">{errors.email}</div> : <div id="emailHelp" className="form-text ">We will never share your email with others</div>}
              </div>

              <div className='mb-3 passwordDiv'>
                <label htmlFor="email m-1" className='mb-2'>Password</label>
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
              type='submit' className='boton btn btn-primary'>Log in
            </button>
          </Form>


        )}


      </Formik>
      {/* Link para resetear la contraseña    */}
      {/* <span className="d-flex justify-content-center align-items-center mt-5 mb-5 pt-5">
        <BsShieldLockFill /> ¿Olvidaste tu contraseña?
      </span> */}


    </div >
  )
}

export default Login