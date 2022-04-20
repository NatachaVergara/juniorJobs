import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { useAxios } from "../../hooks/use-axios";
import { useUserContext } from "../../Store/UserContext";
import "./NewJobForm.module.scss";

const NewJobForm = () => {
  const { fetchData, response } = useAxios();
  const { userID } = useUserContext();
  const [seniorities, setSeniorities] = useState([]);
  console.log("seniorities in new job form", seniorities);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3002/Seniorities");
      const data = await response.json();
      setSeniorities(data);
    };
    fetchData();
  }, []);
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        location: "",
        id_Recruiter: userID,
        // id_Talent: null,
        id_Schedule: 1,
        id_Remote: 1,
        id_Seniority: 1,
        id_Experience: 1,
        id_Speciality: 1,
        //   jobArea: 1,
        //   checked: [],
        id_Skill:[1,2,3]
      }}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setSubmitting(true);
        resetForm();
        console.log("values on submit new job form", values);
        const config = {
          method: "POST",
          url: "/jobOffers",
          data: values,
          header: { "Content-type": "application/json" },
        };
        fetchData(config);
        setSubmitting(false);
        console.log("response in new job form on submit", response);
      }}
    >
      {({ isSubmitting }) => (
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
              {seniorities &&
                seniorities.length > 0 &&
                seniorities.map((seniority, index) => {
                  return (
                    <option value={index} key={index}>
                      {seniority.name}
                    </option>
                  );
                })}
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

          {!isSubmitting && (
            <div className="btnContainer">
              <button type="submit" className="publishButton">
                Publicar
              </button>
            </div>
          )}
          {isSubmitting && <p className="ofertaPublicada">Oferta publicada!</p>}
        </Form>
      )}
    </Formik>
  );
};

export default NewJobForm;
