
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcNeutralDecision, FcBusiness, FcApproval } from "react-icons/fc";
import "./Register.scss";
import RegisterRecruiter from "./RegisterRecruiter";
import RegisterTalent from "./RegisterTalent";
import { Container } from "reactstrap";
import { useUserContext } from "../../Store/UserContext";
import swal from "sweetalert";
import axios from "axios";
import { BASE_URL } from "../../utils/URL";

const Register = () => {
  //Traigo del context el estado usertType para poder elegir el formulario que correponde
  const { setUserType, userType } = useUserContext();
  let navigate = useNavigate();
  const formTalento = () => {
    setUserType("talents");
  };
  //Iria al formulario de recruter
  const formRecruiter = () => {
    setUserType("recruiters");
  };


  const createUser = async (values) => {

    try {
      const response = await axios({
        method: 'POST',
        url: `${BASE_URL}/${userType}`,
        data: values
      })
      console.log(response)
      swal(`Welcome to JUNIOR JOBS, you can now login to your account`)
      navigate('/login')

    } catch (error) {
      console.log(error.response)
      swal(error.response.data)
    }


  }

  return (
    <>
      <div className="container m-auto d-flex flex-column mt-5 pt-5 registerContainer">
        <h1 className="d-flex justify-content-center text-dark">
          ¿HOW WILL YOU REGISTER?
        </h1>
        <div className="mt-5 registerBody">
          <div className="registerCard">
            <h3 className="text-center text-dark">
              Im Talent <FcNeutralDecision />
            </h3>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => formTalento()}
            >
              Talent form
            </button>
          </div>
          <div className="registerCard text-dark">
            <h3>
              Im Recruiter <FcBusiness />
            </h3>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => formRecruiter()}
            >
              Recruiter form
            </button>
          </div>
        </div>
      </div>
      <Container>
        {userType === "recruiters" ? (
          <RegisterRecruiter createUser={createUser} ></RegisterRecruiter>
        ) : null}
        {userType === "talents" ? <RegisterTalent  createUser={createUser}></RegisterTalent> : null}
      </Container>
      <Link
        to="/login"
        className="d-flex justify-content-center align-items-center mb-5 mt-5 pt-5 text-decoration-none text-light"
      >
        {" "}
        <FcApproval /> I already have an account{" "}
      </Link>
    </>
  );
};

export default Register;
