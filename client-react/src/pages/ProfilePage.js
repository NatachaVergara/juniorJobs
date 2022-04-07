import { Fragment, useState } from "react";
import Profile from "../components/Register/Profile";
import RegisterRecruiter from "../components/Register/RegisterRecruiter";
import RegisterTalent from "../components/Register/RegisterTalent";
import { useAxios } from "../hooks/use-axios";

export default function ProfilePage() {
  // pide context, porque necesito manejar autorizaciones y estados de signup/editing, talent/recruiter
  const { fetchData, response } = useAxios();
  const [isSignup, setIsSignup] = useState(true);
  const [isRecruiter, setIsRecruiter] = useState(false);
  function onEditHandler(props) {
    // setIsSignup(true);
  }
  function onSubmitHandler(values) {
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
        params.data = {
          name: "User3",
          lastName: "Prueba",
          email: "prueba3@gmail.com",
          password: "pr123",
          birthdate: "1986-04-26",
          image: "https://www.tzuzulcode.com/_next/image?url=%2Flogo.png&w=64&q=75",
          repository: "www.git.com",
          url: "https://www.google.com.ar",
          profile: "www.linkedin.com",
          phone: "3115623245",
          id_Seniority: 1,
          id_Experience: 1,
          id_Speciality: 1,
          id_Education: 1 };
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
    fetchData({ ...params });
  }

  return (
    <Fragment>
      <Profile onEdit={onEditHandler} onDelete={onSubmitHandler}></Profile>

      {/* {isSignup && !isRecruiter && ( */}
        <RegisterTalent onSubmit={onSubmitHandler}></RegisterTalent>
      {/* )} */}

      {/* {isSignup && isRecruiter && ( */}
        <RegisterRecruiter onSubmit={onSubmitHandler}></RegisterRecruiter>
      {/* )} */}
    </Fragment>
  );
}
