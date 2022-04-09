import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcNeutralDecision, FcBusiness, FcApproval } from "react-icons/fc";
import "./Register.scss";
import { useAxios } from "../../hooks/use-axios";
import RegisterRecruiter from "./RegisterRecruiter";
import RegisterTalent from "./RegisterTalent";
import { Container } from "reactstrap";

const Register = () => {
  const [isRecruiter, setIsRecruiter] = useState(undefined);
  const [isTalent, setIsTalent] = useState(undefined);
  const [isSignup, setIsSignup] = useState(true);
  const { fetchData, response } = useAxios();
  function onSubmitHandler(values) {
    console.log("on register values:", values);
    let params = {};
    if (isRecruiter) {
      if (isSignup) {
        params.method = "post";
        params.url = "/recruiters";
        params.headers = { accept: "*/*" };
        params.data = { values };
      } else {
        params.method = "put";
        params.url = "/recruiters/:id";
        params.headers = { accept: "*/*" };
        params.auth = {
          username: "",
          password: "",
        };
        params.data = { values };
      }
    } else {
      if (isSignup) {
        params.method = "post";
        params.url = "/talents";
        params.headers = { accept: "*/*" };
        params.data = { values };
      } else {
        params.method = "put";
        params.url = "/talents/:id";
        params.headers = { accept: "*/*" };
        params.auth = {
          username: "",
          password: "",
        };
        params.data = { values };
      }
    }
    fetchData(params);
  }

  let navigate = useNavigate();
  //Iria al formulario de talento
  const formTalento = () => {
    setIsRecruiter(false);
    setIsTalent(true);
    navigate("/register");
  };
  //Iria al formulario de recruter
  const formRecruiter = () => {
    setIsRecruiter(true);
    setIsTalent(false);
    navigate("/register");
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
        {isRecruiter && (
          <RegisterRecruiter onSubmit={onSubmitHandler}></RegisterRecruiter>
        )}
        {isTalent && (
          <RegisterTalent onSubmit={onSubmitHandler}></RegisterTalent>
        )}
      </Container>
      <Link
        to="/login"
        className="d-flex justify-content-center align-items-center mt-5 pt-5 text-decoration-none text-black"
      >
        {" "}
        <FcApproval /> Ya tengo cuenta{" "}
      </Link>
    </>
  );
};

export default Register;
