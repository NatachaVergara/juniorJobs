import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
// import classes from "./RegisterTalent.module.css";
import { Button, Col, Container, Input, Label, Row } from "reactstrap";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name}>{label}</Label>
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
      <Label htmlFor={props.id || props.name}>{label}</Label>
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

export default function RegisterRecruiter(props) {
  return (
    <>
      <h1 className="h1">Complete your recruiter profile!</h1>
      <Formik
        initialValues={{
          userName: "",
          userLastName: "",
          email: "",
          phone: "",
          userAge: 18,
          company: "",
          companyDescription: "",
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .min(4, "Must be 4 characters or more")
            .required("Required"),
          userLastName: Yup.string()
            .min(4, "Must be 4 characters or more")
            .required("Required"),
          email: Yup.string()
            .email("Field should contain a valid e-mail")
            .max(255)
            .required("E-mail is required"),
          phone: Yup.string().matches(phoneRegex, "Phone number is not valid"),
          userAge: Yup.number().moreThan(17, "Enter a number greater than 18"),
          company: Yup.string()
            .max(350, "Must be 350 characters or less")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
        })}
        // onSubmit={(values, { setSubmitting }) => {
        //   setSubmitting(true);
        //   props.onSubmit(values);
        //   setSubmitting(false);
        // }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Row>
              <Col>
                <MyTextInput label="Name" name="userName" type="text" />
              </Col>
              <Col>
                <MyTextInput
                  label="Last name"
                  name="userLastName"
                  type="text"
                />
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
                  label="Phone number"
                  name="phone"
                  type="text"
                  placeholder="+54 342 6 156 014"
                />
              </Col>
              <Col>
                <MyTextInput label="Age" name="userAge" type="number" />
              </Col>
            </Row>
            <Row>
              <Col>
                <MyTextInput
                  label="Profile"
                  name="company"
                  type="textarea"
                  placeholder="Describe the company"
                />
              </Col>
            </Row>
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
