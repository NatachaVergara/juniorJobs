import React from "react";
import {
  Formik,
  Form,
 // FieldArray,
  //Field,
  //ErrorMessage,
} from "formik";
import * as Yup from "yup";
import { Card, Col, Label, Row } from "reactstrap";
import RegisterBtn from "../Buttons/RegisterBtn";
// eslint-disable-next-line no-unused-vars
import { MyCheckbox, MyRadio, MySelect, MyTextInput } from "../../utils/inputsFunctions";
import { emailRegex, phoneRegex, urlRegex } from "../../utils/regex";
import { errorAlerts } from '../../utils/errorsAlert'
import { useUserContext } from "../../Store/UserContext";
import {useCRUD} from '../../services/useCRUD'



const TalentUpdateForm = ({ data, onSubmit, setIsEditing }) => {
  const {setUserData} = useUserContext()
  const {onUpdateSubmit} = useCRUD()
  
  return (
    <>
      <h1 className="h1">Edit your profile!</h1>
      <Formik
        initialValues={{
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          password: "pr123",
          passwordConfirmation: "pr123",
          phone: data.phone,
          url: data.url,
          repository: data.repository,
          image: data.image,
          birthdate: data.birthdate,
          id_Seniority: data.id_Seniority,
          id_Experience: data.id_Experience,
          // id_Speciality: data.id_Speciality,
          id_Education: data.id_Education,
          // Skill: [{ name: 0, level: 0 }],
          // languages: [{ name: 0, level:0}] ,
          profile: data.profile,
          // acceptedTerms: false,
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
            .required(errorAlerts.requiredAlert),
          id_Experience: Yup.number()
            .oneOf([1, 2, 3, 4, 5], "Invalid experience range")
            .required(errorAlerts.requiredAlert),
          id_Speciality: Yup.number().oneOf(
            [0, 1, 2, 3, 4, 5, 6, 7],
            "Invalid speciality Type"
          ),
          id_Education: Yup.number().oneOf(
            [1, 2, 3, 4, 5],
            "Invalid Education Type"
          ),
          profile: Yup.string()
            .max(350, errorAlerts[5].textDescription)
            .required(errorAlerts[4].requiredAlert),
          // acceptedTerms: Yup.boolean()
          //   .required(errorAlerts[4].requiredAlert)
          //   .oneOf([true], errorAlerts[6].acceptedTerms),
        })}
        onSubmit={(values, { setSubmitting }) => {
        
          values.id_Seniority = +values.id_Seniority;
          values.id_Education = +values.id_Education;
          // values.id_Speciality = +values.id_Speciality;
          values.id_Experience = +values.id_Experience;

          // values.Skill = values.Skill.map((skill) => ({
          //   name: +skill.name,
          //   level: +skill.level,
          // }));
          // values.languages = values.languages.map((language) => ({
          //   name: +language.level,
          //   level: +language.level,
          // }))
          setSubmitting(true);              
          setUserData(values)
          onUpdateSubmit(values)
          setSubmitting(false);
          setIsEditing(false)
        }}

      >
        {({ isSubmitting, isValid, values }) => (
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
                  type="password"
                  placeholder=""
                />
              </Col>
              <Col>
                <MyTextInput
                  label="Password Confirmation *"
                  name="passwordConfirmation"
                  type="password"
                  placeholder=""
                />
              </Col>
              <Col>
                <MyTextInput
                  label="Phone number *"
                  name="phone"
                  type="text"
                  placeholder="+54 342 6 156 014"
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
                  label="LinkedIn *"
                  name="url"
                  type="url"
                />

              </Col>
              <Col>
                <MyTextInput
                  label="Remote repositories *"
                  name="repository"
                  type="url"
                />
              </Col>
            </Row>
            <MyTextInput label="Date of birth *" name="birthdate" type="date" />
            <Row>
              <Col>
                <MySelect label="Seniority *" name="id_Seniority">
                  <option value={1}>Trainee</option>
                  <option value={2}>Junior</option>
                </MySelect>
              </Col>
              {/* <Col>
                <MySelect label="Speciality if apply *" name="id_Speciality">
                  <option value={0}>Aritificial intelligence</option>
                  <option value={1}>Games</option>
                  <option value={2}>Fintech</option>
                  <option value={3}>Data science</option>
                  <option value={4}>Networks</option>
                  <option value={5}>Computer-Human Interface</option>
                </MySelect>
              </Col> */}
            </Row>
            <Label className='mt-3 mb-0'>Languages and skills *</Label>
            <Row>
              {/* <FieldArray name="Skill">
                {({ insert, remove, push }) => (
                  <div>
                    {values.Skill.length > 0 &&
                      values.Skill.map((skill, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            <label htmlFor={`Skill.${index}.name`}>Name *</label>
                            <Field name={`Skill.${index}.name`} as={MySelect}>
                              <option value={1}>Api Rest</option>
                              <option value={2}>C</option>
                              <option value={3}>C++</option>
                              <option value={4}>CSS</option>
                              <option value={5}>Express</option>
                              <option value={6}>Git</option>


                            </Field>
                            <ErrorMessage
                              name={`Skill.${index}.name`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor={`Skill.${index}.level`}>
                              Level *
                            </label>
                            <Field name={`Skill.${index}.level`} as={MySelect}>
                              <option value={0}>Basic</option>
                              <option value={1}>Intermidate</option>
                              <option value={2}>Advanced</option>
                            </Field>
                            <ErrorMessage
                              name={`Skill.${index}.level`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <Button
                              color="danger"
                              className="mt-4"
                              onClick={() => remove(index)}
                            >
                              X
                            </Button>
                          </div>
                        </div>
                      ))}
                    <Button
                      color="success"
                      className="my-3"
                      onClick={() => push({ name: "", level: "" })}
                    >
                      Add skill
                    </Button>
                  </div>
                )}
              </FieldArray> */}
            </Row>
            {/* <Row>
              <FieldArray name="languages">
                {({ insert, remove, push }) => (
                  <div>
                    {values.languages.length > 0 &&
                      values.languages.map((language, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            <label htmlFor={`languages.${index}.name`}>Name *</label>
                            <Field name={`languages.${index}.name`} as={MySelect}>
                              <option value={0}>English</option>
                              <option value={1}>Spanish</option>
                              <option value={2}>French</option>
                              <option value={3}>German</option>
                              <option value={4}>Italian</option>
                              <option value={5}>Portugues</option>
                              

                            </Field>
                            <ErrorMessage
                              name={`languages.${index}.name`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor={`languages.${index}.level`}>
                              Level *
                            </label>
                            <Field name={`languages.${index}.level`} as={MySelect}>
                              <option value={0}>Basic</option>
                              <option value={1}>Intermidate</option>
                              <option value={2}>Advanced</option>
                            </Field>
                            <ErrorMessage
                              name={`languages.${index}.level`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <Button
                              color="danger"
                              className="mt-4"
                              onClick={() => remove(index)}
                            >
                              X
                            </Button>
                          </div>
                        </div>
                      ))}
                    <Button
                      color="success"
                      className="my-3"
                      onClick={() => push({ name: "", level: "" })}
                    >
                      Add Language
                    </Button>
                  </div>
                )}
              </FieldArray>
            </Row> */}
            <Col>
              <MySelect
                label="Education *"
                name="id_Education">
                <option value={1}>Bootcamp</option>
                <option value={2}>Curso</option>
                <option value={3}>Ingenieria</option>
                <option value={4}>Licenciatura</option>
                <option value={5}>Tecnicatura</option>
              </MySelect>
            </Col>
            <MyTextInput
              label="Profile description *"
              name="profile"
              type="textarea"
              placeholder="Describe yourself"
            />
            <Label>Experience *</Label>
            <Card body color="" className="my-3 mt-0">
              <Row>
                <Col>
                  <MyRadio
                    label="0-2 months"
                    name="id_Experience"
                    type="radio"
                    value="1"
                  />
                </Col>
                <Col>
                  <MyRadio
                    label="2-6 months"
                    name="id_Experience"
                    type="radio"
                    value="2"
                  />
                </Col>
                <Col>
                  <MyRadio
                    label="6-12 months"
                    name="id_Experience"
                    type="radio"
                    value="3"
                  />
                </Col>
                <Col>
                  <MyRadio
                    label="1-2 yeas"
                    name="id_Experience"
                    type="radio"
                    value="4"
                  />
                </Col>
                <Col>
                  <MyRadio
                    label="2-4 years"
                    name="id_Experience"
                    type="radio"
                    value="5"
                  />
                </Col>
              </Row>
            </Card>
         
            <RegisterBtn
              isSubmitting={isSubmitting}
              isValid={isValid}
              id={data.id} />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default TalentUpdateForm