import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import classes from "./RegisterForm.module.css";
import { Input, Label } from "reactstrap";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input {...field} {...props} />
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
      <Input type="select" {...field} {...props} />
      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
    </>
  );
};
const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <Label>
        <Input {...field} {...props} type="checkbox" />
        {children}
      </Label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
const MyRange = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "range" });
  return (
    <>
      <Label htmlFor={props.id || props.name}>
        {label}, is <b>{field.value}</b>
      </Label>
      <Input type="range" {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
const MyRadio = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <div>
      <Label>
        <Input {...field} {...props} type="radio" />
        {label}
      </Label>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default function RegisterForm(props) {
  return (
    <>
      <h1 className="h1">Complete your profile!</h1>
      <Formik
        initialValues={{
          userName: "",
          userLastName: "", // added for our select
          email: "",
          cellphone: "",
          linkedInUrl: 120,
          repositoryUrl: 120,
          userAge: true,
          seniority: "",
          experience: "",
          education: "",
          especiality: "",
          acceptedTerms: false, // added for our checkbox
        }}
        validationSchema={Yup.object({
          userName: Yup.string().min(2, "Must be 2 characters or more"),
          // .required("Required"),
          cellphone: Yup.string()
            .min(2, "Must be 2 characters or more")
            .matches(
              /^[abcdefghijklmnopqrstuvwxyz,]+$/,
              "Please enter online valid characters, comma separated"
            ),
          // .required("Required"),
          email: Yup.string(),
          //   .required("Required"),
          acceptedTerms: Yup.boolean()
            // .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          userLastName: Yup.string()
            // specify the set of valid values for job type
            // @see http://bit.ly/yup-mixed-oneOf
            .oneOf(
              [
                "african",
                "american",
                "greek",
                "italian",
                "Latin American",
                "indian",
                "french",
              ],
              "Invalid Job Type"
            ),
          // .required("Required"),
          //   carbs: Yup.number().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
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
        {({ isSubmitting, isValid }) => (
          <Form>
            <MyTextInput
              label="Title"
              name="userName"
              type="text"
              placeholder="part of the title"
            />
            <MyTextInput
              label="Ingredients"
              name="cellphone"
              type="text"
              placeholder="ingredients"
            />
            <MySelect label="userLastName" name="userLastName">
              <option value="">Select a userLastName type</option>
              <option value="african">African</option>
              <option value="american">American</option>
              <option value="italian">Italian</option>
              <option value="greek">Greek</option>
              <option value="Latin American">Latin american</option>
              <option value="indian">Indian</option>
              <option value="french">French</option>
            </MySelect>

            <MyRange
              label="Max carbs in grams "
              name="linkedInUrl"
              type="range"
              max="120"
              min="5"
            />

            <div className="radios">
              <MyRadio
                label="Gluten free"
                name="email"
                type="radio"
                value="gluten-free"
              />

              <MyRadio label="Paleo" name="email" type="radio" value="paleo" />
              <MyRadio label="Vegan" name="email" type="radio" value="vegan" />
              <MyRadio
                label="Vegetarian"
                name="email"
                type="radio"
                value="vegetarian"
              />
              <MyCheckbox name="acceptedTerms">
                I accept the terms and conditions
              </MyCheckbox>
            </div>

            <button
              className={`btn btn-primary ${classes.button}`}
              type="submit"
              disabled={isSubmitting || !isValid}
            >
              SUBMIT
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
