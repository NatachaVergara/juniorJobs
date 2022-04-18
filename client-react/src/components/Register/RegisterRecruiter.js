import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import classes from "./RegisterTalent.module.css";
import { Col, Row } from "reactstrap";
import RegisterBtn from "../Buttons/RegisterBtn";
// eslint-disable-next-line no-unused-vars
import { MyCheckbox, MyTextInput } from "../../utils/inputsFunctions";
import { emailRegex, urlRegex } from "../../utils/regex";
import { errorAlerts} from '../../utils/errorsAlert'
import {useCRUD} from '../../services/useCRUD'


export default function RegisterRecruiter(props) {
  const {onCreateSubmit}  = useCRUD()
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
          register: true,
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, errorAlerts[0].nameAlert)
            .required(errorAlerts[4].requiredAlert),
          lastName: Yup.string()
            .min(2, errorAlerts[0].nameAlert)
            .required(errorAlerts[4].requiredAlert),
          password: Yup.string()
            .min(4, errorAlerts[1].passwordAlert)
            .required(errorAlerts[4].requiredAlert),
          passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
             .required(errorAlerts[4].requiredAlert),

          email: Yup.string()
            .email(errorAlerts[2].emailAlert)
            .matches(emailRegex)
            .max(255)
            .required(errorAlerts[4].requiredAlert),
          url: Yup.string()
            .matches(urlRegex, errorAlerts[3].urlAlert)
            .required(errorAlerts[4].requiredAlert),
          company: Yup.string()
            .max(350, errorAlerts[5].textDescription)
            .required(errorAlerts[4].requiredAlert),
          acceptedTerms: Yup.boolean()
            .required(errorAlerts[4].requiredAlert)
            .oneOf([true], errorAlerts[6].acceptedTerms),
        })}

        
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values);
          onCreateSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Row>
              <Col>
                <MyTextInput
                  label="Name *"
                  name="name"
                  type="text" />
              </Col>
              <Col>
                <MyTextInput
                  label="Last name *"
                  name="lastName"
                  type="text" />
              </Col>
            </Row>
            <Row>
              <Col>
                <MyTextInput
                  label="E-mail *"
                  name="email"
                  type="text"
                  placeholder="example@juniorjobs.com"
                />
              </Col>
              <Col>
                <MyTextInput
                  label="Password *"
                  name="password"
                  type="password" />
              </Col>
              <Col>
                <MyTextInput
                  label="Password Confirmation *"
                  name="passwordConfirmation"
                  type="password"
                  placeholder=""
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <MyTextInput
                  label="image *"
                  name="image"
                  type="url" />
              </Col>
              <Col>
                <MyTextInput
                  label="LinkedIn profile *"
                  name="url"
                  type="url" />
              </Col>
            </Row>
            <MyTextInput
              label="Description of company *"
              name="company"
              type="textarea"
              placeholder="Tell us about the company"
            />
            <MyCheckbox name="acceptedTerms *">
            {"  "} I accept the terms and conditions
            </MyCheckbox>
            <RegisterBtn
              isSubmitting={isSubmitting}
              isValid={!isValid}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
