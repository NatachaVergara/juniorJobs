import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Col, Row } from "reactstrap";
import { MyTextInput } from "../../../utils/inputsFunctions";
import { emailRegex, urlRegex } from "../../../utils/regex";
import { errorAlerts } from '../../../utils/errorsAlert'
import { useUserContext } from "../../../Store/UserContext";

import FormBtn from "../../Buttons/FormBtn";

const RecruiterUpdateForm = ({ data, setIsEditing, onUpdate }) => {
  const { setUserData } = useUserContext()

  return (
    <>
      <h2 className="h1">Edit your profile!</h2>
      <Formik
        initialValues={{
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          company: data.company,
          image: data.image,
          url: data.url
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, errorAlerts[0].nameAlert)
            .required(errorAlerts[4].requiredAlert),
          lastName: Yup.string()
            .min(2, errorAlerts[0].nameAlert)
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

        })}


        onSubmit={(values) => {
          setUserData(values)
          onUpdate(values)
          setIsEditing(false)

        }}
      >

        <Form>
          <Row>
            <Col xs='12'
              md='6'>
              <MyTextInput
                label="Name *"
                name="name"
                type="text" />
            </Col>
            <Col xs='12'
              md='6'>
              <MyTextInput
                label="Last name *"
                name="lastName"
                type="text" />
            </Col>
          </Row>
          <Row>
            <Col xs='12'
              md='6'>
              <MyTextInput
                label="E-mail *"
                name="email"
                type="text"
                placeholder="example@juniorjobs.com"
              />
            </Col>

          </Row>
          <Row>
            <Col xs='12'
              md='6'>
              <MyTextInput
                label="image *"
                name="image"
                type="url" />
            </Col>
            <Col xs='12'
              md='6'>
              <MyTextInput
                label="LinkedIn profile *"
                name="url"
                type="url" />
            </Col>
          </Row>
          <Row>
            <Col xs='12'
              md='6'>
              <MyTextInput
                label="Description of company *"
                name="company"
                type="textarea"
                placeholder="Tell us about the company"
              />
            </Col>

          </Row>
          <FormBtn

          />
        </Form>
      </Formik>
    </>
  );
}

export default RecruiterUpdateForm