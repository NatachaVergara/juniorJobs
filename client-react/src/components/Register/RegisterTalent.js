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
import SkillsArray from "./SkillsArrayField";

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
            type="radio"
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
          id_experience: 1,
          id_speciality: 1,
          id_education: 1,
          languages: [{ language: 0, languageLevel: 0 }],
          skills: [{ name: 0, level: 0 }],
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
            .oneOf([0, 1], "Invalid seniority Type")
            .required("Required"),
          id_experience: Yup.number()
            .oneOf([0, 1, 2, 3, 4], "Invalid experience range")
            .required("Required"),
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
                  <option value="">Select one of the list</option>
                  <option value="Trainee">Trainee</option>
                  <option value="Junior">Junior</option>
                </MySelect>
              </Col>
              <Col>
                <MySelect label="Speciality if apply" name="id_speciality">
                  <option value="AI">Aritificial intelligence</option>
                  <option value="Games">Games</option>
                  <option value="Fintech">Fintech</option>
                  <option value="Data science">Data science</option>
                  <option value="Networks">Networks</option>
                  <option value="Computer-Human Interface">
                    Computer-Human Interface
                  </option>
                  <option value="Computer Graphics">Computer Graphics</option>
                  <option value="Cyber security">Cyber security</option>
                </MySelect>
              </Col>
            </Row>
            <h2 className="mt-4 ">Languages and skills</h2>
            <Row>
              <FieldArray name="languages">
                {({ insert, remove, push }) => (
                  <Row>
                    {values.languages.length > 0 &&
                      values.languages.map((language, index) => (
                        <Row key={index}>
                          <Col>
                            <MyLanguageSelector />
                          </Col>
                          <Col>
                            <MyLanguageLevelSelector />
                          </Col>
                          <Col>
                            <Button
                              color="primary mt-4"
                              onClick={() => remove(index)}
                            >
                              X
                            </Button>
                          </Col>
                        </Row>
                      ))}
                    <Col>
                      <Button
                        color="secondary mt-2"
                        onClick={() =>
                          push({ language: "", languageLevel: "" })
                        }
                      >
                        Add
                      </Button>
                    </Col>
                  </Row>
                )}
              </FieldArray>
            </Row>
            <Row>
              <FieldArray name="skills">
                {({ insert, remove, push }) => (
                  <div>
                    {values.skills.length > 0 &&
                      values.skills.map((skill, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            <label htmlFor={`skills.${index}.name`}>Name</label>
                            <Field name={`skills.${index}.name`} type="select">
                              <option value={0}>Select one</option>,
                            </Field>
                            <ErrorMessage
                              name={`skills.${index}.name`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor={`skills.${index}.email`}>
                              Email
                            </label>
                            <Field
                              name={`skills.${index}.email`}
                              placeholder="jane@acme.com"
                              type="email"
                            />
                            <ErrorMessage
                              name={`skills.${index}.name`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <button
                              type="button"
                              className="secondary"
                              onClick={() => remove(index)}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    <button
                      type="button"
                      className="secondary"
                      onClick={() => push({ name: "", email: "" })}
                    >
                      Add skill
                    </button>
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

            <Card body color="" className="">
              <Row>
                <Col>
                  <MyRadio
                    label="0-2 months"
                    name="id_experience"
                    type="radio"
                    value={0}
                  />
                </Col>
                <Col>
                  <MyRadio
                    label="2-6 months"
                    name="id_experience"
                    type="radio"
                    value={1}
                  />
                </Col>
                <Col>
                  <MyRadio
                    label="6-12 months"
                    name="id_experience"
                    type="radio"
                    value={2}
                  />
                </Col>
                <Col>
                  <MyRadio
                    label="1-2 yeas"
                    name="id_experience"
                    type="radio"
                    value={3}
                  />
                </Col>
                <Col>
                  <MyRadio
                    label="2-4 years"
                    name="id_experience"
                    type="radio"
                    value={4}
                  />
                </Col>
              </Row>
            </Card>
            <MyCheckbox name="acceptedTerms">
              {""}I accept the terms and conditions
            </MyCheckbox>
            <div>
              <Button color="primary" disabled={isSubmitting || !isValid}>
                Submit
              </Button>
              <Button color="danger" disabled={isSubmitting || !isValid}>
                Remove this url
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

const MyLanguageSelector = () => (
  <MySelect label="Languages" name="languages.language">
    <option value={0}>Add a language</option>
    <option>Select Language</option>
    <option value={1}>Danish - dansk</option>
    <option value={2}>English</option>
    <option value={3}>Dutch - Nederlands</option>
    <option value={4}>English (Australia)</option>
    <option value={5}>English (Canada)</option>
    <option value={6}>English (India)</option>
    <option value={7}>English (New Zealand)</option>
    <option value={8}>English (South Africa)</option>
    <option value={9}>English (United Kingdom)</option>
    <option value={10}>English (United States)</option>

    <option value={11}>French - français</option>

    <option value={12}>German - Deutsch</option>

    <option value={13}>Italian - italiano</option>
    <option value={14}>Italian (Italy) - italiano (Italia)</option>
    <option value={15}>Italian (Switzerland) - italiano (Svizzera)</option>
    <option value={16}>Japanese - 日本語</option>

    <option value={17}>Polish - polski</option>
    <option value={18}>Portuguese - português</option>

    <option value={19}>Russian - русский</option>

    <option value={20}>Spanish - español</option>
    <option value={21}>Spanish (Argentina) - español (Argentina)</option>
  </MySelect>
);

const MyLanguageLevelSelector = () => (
  <MySelect label="Level" name="languages.languageLevel">
    <option value="Level">Select level</option>

    <option value="Basic">Basic</option>
    <option value="Intermediate">Intermediate</option>
    <option value="Intermediate">Advanced</option>
    <option value="Intermediate">Native - Fluent</option>
  </MySelect>
);
