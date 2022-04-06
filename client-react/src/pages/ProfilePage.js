import { Fragment, useState } from "react";
import { Container } from "reactstrap";
import Profile from "../components/Register/Profile";
import RegisterRecruiter from "../components/Register/RegisterRecruiter";
import RegisterTalent from "../components/Register/RegisterTalent";
import { useAxios } from "../hooks/use-axios";

export default function ProfilePage() {
  // pide context, porque necesito manejar autorizaciones y estados de signup/editing, talent/recruiter
  const { fetchData, response } = useAxios();
  const [isSignup, setIsSignup] = useState(true);
  const [isRecruiter, setIsRecruiter] = useState(true);
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
        params.url = "/talent";
        params.headers = { accept: "*/*" };
        params.data = { values };
      } else {
        params.method = "put";
        params.url = "/talent/:id";
        params.headers = { accept: "*/*" };
        params.auth = {
          username: "",
          password: "",
        };
        params.data = { values };
      }
    }
    fetchData({ params });
  }

  return (
    <Fragment>
      <Profile onEdit={onEditHandler} onDelete={onSubmitHandler}></Profile>

      <Container>
        <RegisterTalent onSubmit={onSubmitHandler}></RegisterTalent>

        {isSignup && !isRecruiter && (
          <RegisterTalent onSubmit={onSubmitHandler}></RegisterTalent>
        )}

        {isSignup && isRecruiter && (
          <RegisterRecruiter onSubmit={onSubmitHandler}></RegisterRecruiter>
        )}
      </Container>
    </Fragment>
  );
}
