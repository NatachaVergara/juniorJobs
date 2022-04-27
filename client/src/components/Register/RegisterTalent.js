import React, { useEffect, useState } from "react";
import { Formik, Form, FieldArray, Field } from "formik";
import * as Yup from "yup";
import { Card, Col, Input, Label, Row } from "reactstrap";
import RegisterBtn from "../Buttons/RegisterBtn";
// eslint-disable-next-line no-unused-vars
import {
  MyCheckbox,
  MyRadio,
  MySelect,
  MyTextInput,
} from "../../utils/inputsFunctions";
import { emailRegex, phoneRegex, urlRegex } from "../../utils/regex";
import { errorAlerts } from "../../utils/errorsAlert";
import { useCRUD } from "../../services/useCRUD";
import { BASE_URL } from "../../utils/URL";



export default function RegisterTalent(props) {
  const { onCreateSubmit } = useCRUD();
  const [speciality, setSpeciality] = useState([])
  const [skills, setSkills] = useState([])


  useEffect(() => {
    const fetchDatasetSpeciality = async () => {
      const response = await fetch(`${BASE_URL}/speciality`);
      const data = await response.json();
      setSpeciality(data);
    };
    fetchDatasetSpeciality();

    const fetchDataSkills = async () => {
      const response = await fetch(`${BASE_URL}/skills`)
      const data = await response.json()
      setSkills(data)
    }
    fetchDataSkills()


  }, [])

  console.log(skills)


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
          birthdate: "1986-07-13",
          id_Seniority: 1,
          id_Experience: 0,
          id_Speciality: 1,
          id_Education: 1,
          Skill: [],
          //Language: [{ name: 1, level:1}] ,
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
          id_Seniority: Yup.number()
            .oneOf([1, 2], "Invalid seniority Type")
            .required(),
          id_Experience: Yup.number()
            .oneOf([1, 2, 3, 4, 5], "Invalid experience range")
            .required(),
          id_Speciality: Yup.number()
            .oneOf([0, 1, 2, 3, 4, 5, 6, 7], "Invalid speciality Type")
            .required(errorAlerts[4].requiredAlert),
          id_Education: Yup.number()
            .oneOf([1, 2, 3, 4, 5], "Invalid Education Type")
            .required(errorAlerts[4].requiredAlert),
          Skill: Yup.number().required(errorAlerts[4].requiredAlert).transform((v) => parseInt(v)),
          // Language: Yup.number().oneOf(
          //   [1, 2, 3, 4, 5, 6],
          //   "Invalid Skill Type"
          // ).required(errorAlerts[4].requiredAlert),
          profile: Yup.string()
            .max(350, errorAlerts[5].textDescription)
            .required(errorAlerts[4].requiredAlert),
          acceptedTerms: Yup.boolean()
            .required(errorAlerts[4].requiredAlert)
            .oneOf([true], errorAlerts[6].acceptedTerms),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          values.id_Seniority = +values.id_Seniority;
          values.id_Education = +values.id_Education;
          values.id_Speciality = +values.id_Speciality;
          values.id_Experience = +values.id_Experience;
          values.Skill = +values.Skill;
          // values.id_Remote = +values.id_Remote;

          // values.languages = values.languages.map((language) => ({
          //   name: +language.level,
          //   level: +language.level,
          // }))

          
          console.log(values.Skill);
          onCreateSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, value }) => (
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
                  label="image *"
                  name="image"
                  type="url" />
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
            <MyTextInput label="Date of birth *" name="birthdate" type="date" />
            <Row>
              <Col xs='12'
                md='6'>
                <MySelect label="Seniority *" name="id_Seniority">
                  <option value={1}>Trainee</option>
                  <option value={2}>Junior</option>
                </MySelect>
              </Col>
              <Col >
                <MySelect label="Speciality*" name="id_Speciality">
                  {speciality.map((s, i) => (
                    <option className='text-dark' key={i} value={s.id}>{s.category} </option>
                  ))}
                </MySelect>
              </Col>

              <Label className="mt-3 mb-0">Skills *</Label>
              <Row>
                {skills.map((sk, i) => (
                  <Col key={i} sm='3'>
                    <label>
                      <Field
                        key={sk.id}
                        type="checkbox"
                        name="Skill"
                        value={sk.id.toString()}

                      />
                      {sk.name}
                    </label>
                  </Col>
                ))}

              </Row>
            </Row>
            <Label className="mt-3 mb-0">Education/Formation*</Label>
            <Col xs='12'
              md='6'>
              <MySelect name="id_Education">
                <option value={1}>Bootcamp</option>
                <option value={2}>Curso</option>
                <option value={3}>Ingenieria</option>
                <option value={4}>Licenciatura</option>
                <option value={5}>Tecnicatura</option>
              </MySelect>
            </Col>
            <Col xs='12'
              md='12'>
              <MyTextInput
                label="Profile description *"
                name="profile"
                type="textarea"
                placeholder="Describe yourself"
              />
            </Col>
            <Label>Experience *</Label>
            <Card body color="" className="mt-0">
              <Row>
                <Col xs='12'
                  md='2'>
                  <MyRadio
                    label="0-2 months"
                    name="id_Experience"
                    type="radio"
                    value="1"
                  />
                </Col>
                <Col xs='12'
                  md='2'>
                  <MyRadio
                    label="2-6 months"
                    name="id_Experience"
                    type="radio"
                    value="2"
                  />
                </Col>
                <Col xs='12'
                  md='2'>
                  <MyRadio
                    label="6-12 months"
                    name="id_Experience"
                    type="radio"
                    value="3"
                  />
                </Col>
                <Col xs='12'
                  md='2'>
                  <MyRadio
                    label="1-2 years"
                    name="id_Experience"
                    type="radio"
                    value="4"
                  />
                </Col>
                <Col xs='12'
                  md='2'>
                  <MyRadio
                    label="2-4 years"
                    name="id_Experience"
                    type="radio"
                    value="5"
                  />
                </Col>
              </Row>

            </Card>
            <Row>
              <Col xs='12'
                md='6'>
                <MyCheckbox name="acceptedTerms">
                  {"  "} I accept the terms and conditions
                </MyCheckbox>

              </Col>

            </Row>

            <RegisterBtn
              isSubmitting={isSubmitting}
              isValid={isValid} />
          </Form>
        )}
      </Formik>
    </>
  );
}
