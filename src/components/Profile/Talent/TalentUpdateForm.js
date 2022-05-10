import React from "react";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import {  Col, Row } from "reactstrap";
import {  MySelect, MyTextInput } from "../../../utils/inputsFunctions";
import { emailRegex, phoneRegex, urlRegex } from "../../../utils/regex";
import { errorAlerts } from '../../../utils/errorsAlert'
import { useUserContext } from "../../../Store/UserContext";
import classes from './TalentUpdateForm.module.scss'
import FormBtn from "../../Buttons/FormBtn";
import FetchRoutes from "../../../Fetch/FetchRoutes";


const TalentUpdateForm = ({ data, setIsEditing,  onUpdate }) => {
 
  //Traigo la data desde el context
  const { setUserData, seniorities, exp, speciality, education } = useUserContext()
  FetchRoutes()


  return (
    <>
      <h1 className="h1">Edit your profile!</h1>
      <Formik
        initialValues={{
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          url: data.url,
          repository: data.repository,
          image: data.image,
          birthdate: data.birthdate,
          id_Seniority: data.id_Seniority,
          id_Experience: data.id_Experience,
          id_Speciality: data.id_Speciality,
          id_Education: data.id_Education,
          // Skill: [],
          // languages: [] ,
          profile: data.profile,

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
            .required(errorAlerts[4].requiredAlert)
        })}

        onSubmit={(values) => {
          values.id_Seniority = +values.id_Seniority;
          values.id_Education = +values.id_Education;
          values.id_Speciality = +values.id_Speciality;
          values.id_Experience = +values.id_Experience;
          onUpdate(values)
               
          setUserData(values)
          setIsEditing(false)

        }}

      >

        <Form className={classes.updateForm}>
          <Row>
            <Col xs='12'
              md='6'
            >
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
            <Col
              xs='12'
              md='6'>
              <MyTextInput
                label="E-mail *"
                name="email"
                type="text"
                placeholder="example@juniorjobs.com"
              />
            </Col>

            <Col
              xs='12'
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
            <Col
              xs='12'
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
            <Col
              xs='12'
              md='6'>
              <MyTextInput
                label="LinkedIn *"
                name="url"
                type="url"
              />

            </Col>
            <Col
              xs='12'
              md='6'>
              <MyTextInput
                label="Remote repositories *"
                name="repository"
                type="url"
              />
            </Col>

          </Row>
          <Row>
            <Col
              xs='12'
              md='6'>
              <MySelect label="Seniority *" name="id_Seniority">
                {seniorities.map(s =>
                  (<option key={s.id} value={s.id}>{s.name} </option>))}

              </MySelect>
            </Col>
            <Col>
              <MySelect label="Speciality*" name="id_Speciality">
                {speciality.map((s) =>
                  (<option className='text-dark' key={s.id} value={s.id}>{s.category} </option>))}
              </MySelect>
            </Col>
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
            <Col md='12' xs='12'></Col>
            <MyTextInput
              label="Profile description *"
              name="profile"
              type="textarea"
              placeholder="Describe yourself"
            />
          </Row>
          <FormBtn />
        </Form>

      </Formik>
    </>
  );
}

export default TalentUpdateForm