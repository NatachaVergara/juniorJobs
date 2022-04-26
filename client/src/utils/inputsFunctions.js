import { useField } from 'formik';
import React from 'react'
import { Container, Input, Label } from 'reactstrap';

export const MyTextInput = ({ label, ...props }) => {
  const MyTextInput = () => {
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

  return MyTextInput()
}


export const MySelect = ({ label, ...props }) => {
  const MySelect = () => {
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

  return MySelect()
}


export const MyCheckbox = ({ children, ...props }) => {
  const MyCheckbox = () => {
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

  return MyCheckbox()

}

export const MyRadio = ({ label, ...props }) => {

  const MyRadio = () => {
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

  return MyRadio()
}



export const MyRange = ({ label, ...props }) => {
  const MyRange = () => {
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

  return MyRange()

}




