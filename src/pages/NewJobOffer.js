import React from "react";
import { Container } from "reactstrap";
import AddJobOffer from "../components/NewJobOffer/AddJobOffer";

import "./NewJobOffer.module.scss";

const NewJobOffer = () => {
  return (
    <Container>
      <h1>POST A JOB OFFER</h1>
    <AddJobOffer/>
      {/* <NewJobForm /> */}
    </Container>
  );
};

export default NewJobOffer;
