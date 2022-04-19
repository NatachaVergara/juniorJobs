/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { qs } from "qs";
import { Link } from "react-router-dom";
import { FcNeutralDecision, FcBusiness, FcApproval } from "react-icons/fc";
import "./Register.scss";
import RegisterRecruiter from "./RegisterRecruiter";
import RegisterTalent from "./RegisterTalent";
import { Container } from "reactstrap";
import { useUserContext } from "../../Store/UserContext";

const Register = () => {
  //Traigo del context el estado usertType para poder elegir el formulario que correponde
  const { setUserType, userType } = useUserContext();

  const formTalento = () => {
    setUserType("Talent");
  };
  //Iria al formulario de recruter
  const formRecruiter = () => {
    setUserType("Recruiter");
  };

  return (
    <>
      <div className="container m-auto d-flex flex-column mt-5 pt-5 registerContainer">
        <h1 className="d-flex justify-content-center">
          ¿CÓMO TE VAS A REGISTRAR?
        </h1>
        <div className="mt-5 registerBody">
          <div className="registerCard">
            <h3 className="text-center">
              Soy Talento <FcNeutralDecision />
            </h3>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => formTalento()}
            >
              Ir a formulario Talento
            </button>
          </div>
          <div className="registerCard">
            <h3>
              Soy Recruter <FcBusiness />
            </h3>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => formRecruiter()}
            >
              Ir a formulario Recruter
            </button>
          </div>
        </div>
      </div>
      <Container>
        {userType === "Recruiter" ? (
          <RegisterRecruiter></RegisterRecruiter>
        ) : null}
        {userType === "Talent" ? <RegisterTalent></RegisterTalent> : null}
      </Container>
      <Link
        to="/login"
        className="d-flex justify-content-center align-items-center mb-5 mt-5 pt-5 text-decoration-none text-black"
      >
        {" "}
        <FcApproval /> Ya tengo cuenta{" "}
      </Link>
    </>
  );
};

export default Register;
