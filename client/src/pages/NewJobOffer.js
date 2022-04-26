import React from "react";
import { Container } from "reactstrap";
import NewJobForm from "../components/NewJobOffer/NewJobForm";
import "./NewJobOffer.module.scss";

const NewJobOffer = () => {
  return (
    <Container>
      <h1>POST A JOB OFFER</h1>
      <NewJobForm />
    </Container>
  );
};

export default NewJobOffer;
