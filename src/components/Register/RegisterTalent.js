import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Col, Label, Row } from "reactstrap";
import { MyCheckbox, MySelect, MyTextInput } from "../../utils/inputsFunctions";
import { emailRegex, phoneRegex, urlRegex } from "../../utils/regex";
import { errorAlerts } from "../../utils/errorsAlert";

import FetchRoutes from "../../Fetch/FetchRoutes";
import { useUserContext } from "../../Store/UserContext";
import FormBtn from "../Buttons/FormBtn";

export default function RegisterTalent({ createUser }) {

  //Me permite traer la informacion especifica para poder mapearlo y mostrarlo en el formulario
  const { seniorities, exp, speciality, education, lenguage, skills } = useUserContext();
  FetchRoutes()

  return (
    <>
      <h1 className="h1">Complete your talent profile!</h1>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirmation: "",
          phone: "",
          url: "",
          repository: "",
          image: "",
          birthdate: "",
          id_Seniority: 1,
          id_Experience: 1,
          id_Speciality: 1,
          id_Education: 1,
          Skill: [],
          Language: [],
          profile: "",
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
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required(errorAlerts[4].requiredAlert),
          email: Yup.string()
            .email(errorAlerts[2].emailAlert)
            .matches(emailRegex)
            .max(255)
            .required(errorAlerts[4].requiredAlert),
          phone: Yup.string()
            .matches(phoneRegex, "Phone number is not valid")
            .required(errorAlerts.requiredAlert),
          url: Yup.string()
            .matches(urlRegex, errorAlerts[3].urlAlert)
            .required(errorAlerts[4].requiredAlert),
          repository: Yup.string()
            .matches(urlRegex, errorAlerts[3].urlAlert)
            .required(errorAlerts[4].requiredAlert),
          birthdate: Yup.date().max(
            new Date(new Date() - 599616000000),
            "Must to be +18 years old"
          ),
          profile: Yup.string()
            .max(350, errorAlerts[5].textDescription)
            .required(errorAlerts[4].requiredAlert),
          acceptedTerms: Yup.boolean()
            .required(errorAlerts[4].requiredAlert)
            .oneOf([true], errorAlerts[6].acceptedTerms),
        })}
        onSubmit={(values) => {
          values.id_Seniority = +values.id_Seniority;
          values.id_Education = +values.id_Education;
          values.id_Speciality = +values.id_Speciality;
          values.id_Experience = +values.id_Experience;
          values.Skill = +values.Skill;
          values.Language = +values.Language;
          createUser(values)

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
            <Col xs='12'
              md='6'>
              <MyTextInput
                label="Phone number *"
                name="phone"
                type="text"
                placeholder="+54 342 6 156 014"
              />
            </Col>
          </Row>
          <Row>
            <Col xs='12'
              md='6'>
              <MyTextInput
                label="Password *"
                name="password"
                type="password"
                placeholder=""
              />
            </Col>
            <Col xs='12'
              md='6'>
              <MyTextInput
                label="Password Confirmation *"
                name="passwordConfirmation"
                type="password"
                placeholder=""
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
            <Col xs='12' md='6'>
              <MyTextInput label="Date of birth *" name="birthdate" type="date" />
            </Col>
          </Row>
          <Row>
            <Col xs='12'
              md='6'>
              <MyTextInput
                label="LinkedIn *"
                name="url"
                type="url" />
            </Col>
            <Col xs='12'
              md='6'>
              <MyTextInput
                label="Remote repository *"
                name="repository"
                type="url"
              />
            </Col>
          </Row>

          <Row>
            <Col xs='12'
              md='6'>
              <MySelect label="Seniority *" name="id_Seniority">
                {seniorities.map(s =>
                  (<option key={s.id} value={s.id}>{s.name} </option>))}

              </MySelect>
            </Col>

            <Col xs='12' md='6'>
              <MySelect label="Speciality*" name="id_Speciality">
                {speciality.map((s) =>
                  (<option className='text-dark' key={s.id} value={s.id}>{s.category} </option>))}
              </MySelect>
            </Col>


          </Row>

          <Row>
            <Label className="mt-3 mb-1">Skills *</Label>
            {skills.map((sk) => (
              <Col key={sk.id} sm='3' xs='6'>
                <label>
                  <Field
                    key={sk.id}
                    type="checkbox"
                    name="Skills"
                    value={sk.id.toString()}
                  />
                  {sk.name}
                </label>
              </Col>
            ))}
          </Row>
          <Row>
            <Label className="mt-3 mb-1">Lenguage *</Label>
            {lenguage.map((l) => (
              <Col key={l.id} sm='3' xs='6'>
                <label>
                  <Field
                    key={l.id}
                    type="checkbox"
                    name='Lenguage'
                    value={l.id.toString()}
                  />
                  {l.language}
                </label>


              </Col>
            ))}

          </Row>
          <Row>
            <Col xs='12'
              md='6'>
              <MySelect name="id_Education" label='Education'>
                {education.map(e => (<option key={e.id} value={e.id}>{e.name}</option>))}
              </MySelect>
            </Col>

            <Col xs='12' md='6'>
              <MySelect name='id_Experience' label='Experience**'>
                {exp.map(e => (<option key={e.id} value={e.id}>{e.period} </option>))}
              </MySelect>
            </Col>
          </Row>

          <Row>
            <Col xs='12'
              md='12'>
              <MyTextInput
                label="Profile description *"
                name="profile"
                type="textarea"
                placeholder="Describe yourself"
              />
            </Col>
          </Row>
          <Row>
            <Col xs='12'
              md='6'>
              <MyCheckbox name="acceptedTerms">
                {"  "} I accept the terms and conditions
              </MyCheckbox>

            </Col>
          </Row>
          <FormBtn />
        </Form>

      </Formik>
    </>
  );
}
