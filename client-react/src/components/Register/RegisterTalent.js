import React from "react";
import {
  Formik,
  Form,
  useField,
  FieldArray,
  Field,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";
import { Button, Card, Col, Container, Input, Label, Row } from "reactstrap";
//import SkillsArray from "./SkillsArrayField";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name} className="mt-3">
        {label}
      </Label>
      <Input
        {...field}
        {...props}
        invalid={meta.error && meta.touched}
        valid={!meta.error && meta.touched}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name} className="mt-3">
        {label}{" "}
      </Label>
      <Input
        type="select"
        {...field}
        {...props}
        invalid={meta.error && meta.touched}
        valid={!meta.error && meta.touched}
      />
      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <Label>
        <Input
          {...field}
          {...props}
          type="checkbox"
          invalid={meta.error && meta.touched}
          valid={!meta.error && meta.touched}
        />
        {children}
      </Label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
// const MyRange = ({ label, ...props }) => {
//   const [field, meta] = useField({ ...props, type: "range" });
//   return (
//     <>
//       <Label htmlFor={props.id || props.name}>
//         {label}, is <b>{field.value}</b>
//       </Label>
//       <Input type="range" {...field} {...props} />

//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };
const MyRadio = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <div>
      <Label>
        <Container>
          <Input
            {...field}
            {...props}
            // type="radio"
            invalid={meta.error && meta.touched}
            valid={!meta.error && meta.touched}
          />
        </Container>
        {label}
      </Label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
const urlRegex =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
const phoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default function RegisterTalent(props) {
  return (
    <>
      <h1 className="h1">Complete your talent profile!</h1>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
          phone: "",
          url: "",
          repository: "",
          image: "",
          birthdate: new Date(),
          id_seniority: 1,
          id_experience: 0,
          id_speciality: 1,
          id_education: 1,
          skills: [{ name: 0, level: 0 }],
          languages: [{ name: 0, level:0}] ,
          profile: "",
          acceptedTerms: false,
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
          email: Yup.string()
            .email("Field should contain a valid e-mail")
            .max(255)
            .required("E-mail is required"),
          phone: Yup.string().matches(phoneRegex, "Phone number is not valid"),
          // .required("Required"),
          url: Yup.string()
            .matches(urlRegex, "Url is not valid")
            .required("Required"),
          repository: Yup.string()
            // .matches(urlRegex, "Url is not valid")
            .required("Required"),
          birthdate: Yup.date().max(
            new Date(new Date() - 599616000000),
            "Must to be +18 years old"
          ),
          id_seniority: Yup.number()
            .oneOf([0, 1, 2, 3, 4], "Invalid seniority Type")
            .required("Required"),
          // id_experience: Yup.number()
          //   .oneOf([0, 1, 2, 3, 4], "Invalid experience range")
          //   .required("Required"),
          id_speciality: Yup.number().oneOf(
            [0, 1, 2, 3, 4, 5, 6, 7],
            "Invalid speciality Type"
          ),
          id_education: Yup.number().oneOf(
            [0, 1, 2, 3, 4, 5, 6, 7],
            "Invalid Education Type"
          ),
          profile: Yup.string()
            .max(350, "Must be 350 characters or less")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          values.id_seniority = +values.id_seniority;
          values.id_education = +values.id_education;
          values.id_speciality = +values.id_speciality;
          values.id_experience = +values.id_experience;
          values.skills = values.skills.map((skill) => ({
            name: +skill.name,
            level: +skill.level,
          }));
          values.languages = values.languages.map((language) => ({
            name: +language.level,
            level: +language.level,
          }))
          console.log(values);
          props.onSubmit(values);
          setSubmitting(false);
        }}
        // onSubmit={(values, { setSubmitting }) => {
        //   console.log(values);
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        //   }, 400);
        // }}
      >
        {({ isSubmitting, isValid, values }) => (
          <Form>
            <Row>
              <Col>
                <MyTextInput label="Name" name="name" type="text" />
              </Col>
              <Col>
                <MyTextInput label="Last name" name="lastName" type="text" />
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
                  type="password"
                  placeholder=""
                />
              </Col>
              <Col>
                <MyTextInput
                  label="Phone number"
                  name="phone"
                  type="text"
                  placeholder="+54 342 6 156 014"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <MyTextInput label="LinkedIn Link" name="url" type="url" />
              </Col>
              <Col>
                <MyTextInput
                  label="Remote repositories link"
                  name="repository"
                  type="url"
                />
              </Col>
            </Row>
            <MyTextInput label="Date of birth" name="birthdate" type="date" />
            <Row>
              <Col>
                <MySelect label="Seniority" name="id_seniority">
                  <option value={0}>Select one of the list</option>
                  <option value={1}>Trainee</option>
                  <option value={2}>Junior</option>
                </MySelect>
              </Col>
              <Col>
                <MySelect label="Speciality if apply" name="id_speciality">
                  <option value={0}>Aritificial intelligence</option>
                  <option value={1}>Games</option>
                  <option value={2}>Fintech</option>
                  <option value={3}>Data science</option>
                  <option value={4}>Networks</option>
                  <option value={5}>Computer-Human Interface</option>
                </MySelect>
              </Col>
            </Row>
            <h2 className="mt-4 ">Languages and skills</h2>
            <Row>
              <FieldArray name="skills">
                {({ insert, remove, push }) => (
                  <div>
                    {values.skills.length > 0 &&
                      values.skills.map((skill, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            <label htmlFor={`skills.${index}.name`}>Name</label>
                            <Field name={`skills.${index}.name`} as={MySelect}>
                              <option value={0}>Javascript</option>
                              <option value={1}>Python</option>
                              <option value={2}>Go</option>
                              <option value={3}>NodeJs</option>
                              <option value={4}>ReactJs</option>
                              <option value={5}>Remix</option>
                              

                            </Field>
                            <ErrorMessage
                              name={`skills.${index}.name`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor={`skills.${index}.level`}>
                              Level
                            </label>
                            <Field name={`skills.${index}.level`} as={MySelect}>
                              <option value={0}>Basic</option>
                              <option value={1}>Intermidate</option>
                              <option value={2}>Advanced</option>
                            </Field>
                            <ErrorMessage
                              name={`skills.${index}.level`}
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
              </FieldArray>
            </Row>
            <Row>
              <FieldArray name="languages">
                {({ insert, remove, push }) => (
                  <div>
                    {values.languages.length > 0 &&
                      values.languages.map((language, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            <label htmlFor={`languages.${index}.name`}>Name</label>
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
                              Level
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
            </Row>
            <MyTextInput
              label="Education"
              name="id_education"
              type="textarea"
              placeholder="Describe your academic background"
            />
            <MyTextInput
              label="Profile description"
              name="profile"
              type="textarea"
              placeholder="Describe yourself"
            />

            <Card body color="" className="my-3">
              <Row>
                <Col>
                  <MyRadio
                    label="0-2 months"
                    name="id_experience"
                    type="radio"
                    value="0"
                  />
                </Col>
                <Col>
                  <MyRadio
                    label="2-6 months"
                    name="id_experience"
                    type="radio"
                    value="1"
                  />
                </Col>
                <Col>
                  <MyRadio
                    label="6-12 months"
                    name="id_experience"
                    type="radio"
                    value="2"
                  />
                </Col>
                <Col>
                  <MyRadio
                    label="1-2 yeas"
                    name="id_experience"
                    type="radio"
                    value="3"
                  />
                </Col>
                <Col>
                  <MyRadio
                    label="2-4 years"
                    name="id_experience"
                    type="radio"
                    value="4"
                  />
                </Col>
              </Row>
            </Card>
            <MyCheckbox name="acceptedTerms">
              {" I accept the terms and conditions"}
            </MyCheckbox>
            <div>
              <Button color="primary" disabled={isSubmitting || !isValid}>
                Submit
              </Button>
              <Button color="danger" disabled={isSubmitting || !isValid}>
                Remove this profile
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

