import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FcNeutralDecision, FcBusiness } from "react-icons/fc";
import './Register.scss'

const Register = () => {
    let navigate = useNavigate()
    //Iria al formulario de talento
    const formTalento = () => {
        navigate('/profile')
    }
     //Iria al formulario de recruter
    const formRecruter = () => {
        navigate('/profile')
    }

    return (
        <div className='container m-auto d-flex flex-column mt-5 pt-5 registerContainer'>
            <h1 className='d-flex justify-content-center'>¿Cómo te vas a registrar?</h1>
            <div className='mt-5 registerBody'>

                <div className='registerCard'>
                    <h3 className='text-center'>Soy Talento  <FcNeutralDecision /></h3>
                    <button className='btn btn-primary' type="submit" onClick={() => formTalento()}>
                        Ir a formulario Talento</button>
                </div>
                <div className='registerCard'>
                    <h3>Soy Recruter <FcBusiness/></h3>
                    <button className='btn btn-primary' type="submit" onClick={() => formRecruter()}>
                        Ir a formulario Recruter</button>
                </div>

            </div>

        </div>
    )
}

export default Register