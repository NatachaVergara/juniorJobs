import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { Container } from "reactstrap";
import { useUserContext } from "../../Store/UserContext";
import "./NewJobForm.scss";

const NewJobForm = () => {
  const { userID } = useUserContext();
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <Container>
      <Formik
        initialValues={{
          title: "",
          description: "",
          location: "",
          id_Recruiter: userID,
          id_Schedule: 0,
          id_Remote: 0,
          id_Talent: 0,
          id_Seniority: 0,
          id_Experience: 0,
          id_Speciality: 0,
          //   jobArea: 1,
          //   checked: [],
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log(values);
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 3000);
        }}
      >
        {() => (
          <Form className="newjob-form">
            <div>
              <label htmlFor="title" className="formTitle">
                Puesto / Título del aviso <span>*</span>
              </label>
              <Field type="textarea" id="title" name="title" />
            </div>
            <div>
              <label htmlFor="description" className="formTitle">
                Descripción del puesto <span>*</span>
              </label>
              <Field as="textarea" id="description" name="description" />
            </div>
            <div>
              <label htmlFor="location" className="formTitle">
                Descripción del puesto <span>*</span>
              </label>
              <Field as="textarea" id="location" name="location" />
            </div>

            <div>
              <label className="formTitle" htmlFor="id_Schedule">
                Schedule
              </label>
              <Field name="id_Schedule" as="select" id="id_Schedule">
                <option value={0}>Presencial</option>
                <option value={1}>Hybrid</option>
                <option value={2}>Remote</option>
              </Field>
            </div>
            <div>
              <label className="formTitle" htmlFor="id_Remote">
                Remote
              </label>
              <Field name="id_Remote" as="select" id="id_Remote">
                <option value={0}>Si</option>
                <option value={1}>No</option>
              </Field>
            </div>

            <div>
              <label className="formTitle" htmlFor="id_Seniority">
                Seniority
              </label>
              <Field name="id_Seniority" as="select" id="id_Seniority">
                <option value={0}>Trainee</option>
                <option value={1}>Junior</option>
              </Field>
            </div>
            <div>
              <label className="formTitle" htmlFor="id_Experience">
                Experience
              </label>
              <Field name="id_Experience" as="select" id="id_Experience">
                <option value={0}>0-2 months</option>
                <option value={1}>2-6 months</option>
                <option value={2}>6-12 monts</option>
                <option value={3}>1-2 years</option>
                <option value={4}>2-4 years</option>
              </Field>
            </div>
            <div>
              <label className="formTitle" htmlFor="id_Speciality">
                Speciality
              </label>
              <Field name="id_Speciality" as="select" id="id_Speciality">
                <option value={0}>Administrador de Base de Datos/DBA</option>
                <option value={1}>Administrador de Infraestructura</option>
                <option value={2}>Administrador de Redes</option>
              </Field>
            </div>

            {!formularioEnviado && (
              <div className="btnContainer">
                <button type="submit" className="publishButton">
                  Publicar
                </button>
              </div>
            )}
            {formularioEnviado && (
              <p className="ofertaPublicada">Oferta publicada!</p>
            )}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default NewJobForm;
