import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import classes from "./RegisterTalent.module.css";
import { Col, Row } from "reactstrap";
import RegisterBtn from "../Buttons/RegisterBtn";
// eslint-disable-next-line no-unused-vars
import { MyCheckbox, MyTextInput } from "../../utils/inputsFunctions";
import { urlRegex } from "../../utils/regex";

export default function RegisterRecruiter(props) {
  return (
    <>
      <h2 className="h1">Complete your recruiter profile!</h2>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirmation: "",
          company: "",
          image: "",
          url: "",
          // acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(4, "Must be 4 characters or more")
            .required("Required"),
          lastName: Yup.string()
            .min(4, "Must be 4 characters or more")
            .required("Required"),
          password: Yup.string()
            .min(4, "Must be 4 characters or more")
            .required("Required"),
          passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
          email: Yup.string()
            .email("Field should contain a valid e-mail")
            .max(255)
            .required("E-mail is required"),
            url: Yup.string()
            .matches(urlRegex, "Url is not valid")
            .required("Required"),
          company: Yup.string()
            .max(350, "Must be 350 characters or less")
            .required("Required"),
          // acceptedTerms: Yup.boolean()
          //   .required("Required")
          //   .oneOf([true], "You must accept the terms and conditions."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values);
          props.onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Row>
              <Col>
                <MyTextInput
                 label="Name" 
                 name="name"
                 type="text" />
              </Col>
              <Col>
                <MyTextInput 
                label="Last name"
                 name="lastName" 
                 type="text" />
              </Col>
            </Row>
            <Row>
              <Col>
                <MyTextInput
                  label="E-mail"
                  name="email"
                  type="text"
                  placeholder="example@juniorjobs.com"
                />
              </Col>
              <Col>
                <MyTextInput
                  label="Password"
                  name="password"
                  type="password" />
              </Col>
              <Col>
                <MyTextInput
                  label="Password Confirmation"
                  name="passwordConfirmation"
                  type="password"
                  placeholder=""
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <MyTextInput
                  label="image"
                  name="image"
                  type="url" />
              </Col>
              <Col>
                <MyTextInput
                  label="LinkedIn profile"
                  name="url"
                  type="url" />
              </Col>
            </Row>
            <MyTextInput
              label="Description of company"
              name="company"
              type="textarea"
              placeholder="Tell us about the company"
            />
            {/* <MyCheckbox name="acceptedTerms">
              {" I accept the terms and conditions"}
            </MyCheckbox> */}
           <RegisterBtn
            isSubmitting={isSubmitting}
            isValid={isValid}
           />
          </Form>
        )}
      </Formik>
    </>
  );
}
