import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { useAxios } from "../../hooks/use-axios";
import { useUserContext } from "../../Store/UserContext";
import styles from "./NewJobForm.module.scss";

const NewJobForm = () => {
  const { fetchData, response } = useAxios();
  const { userID } = useUserContext();
  const [values, setValues] = useState({});
  console.log("options from db", values);
  useEffect(() => {
    let values = {};
    const getFormOptions = async () => {
      try {
        let seniorities = await fetch("http://localhost:3002/Seniorities");
        seniorities = await seniorities.json();
        values.seniorities = seniorities;
        let education = await fetch("http://localhost:3002/education");
        education = await education.json();
        values.education = education;
        let experience = await fetch("http://localhost:3002/experience");
        experience = await experience.json();
        values.experience = experience;
        let speciality = await fetch("http://localhost:3002/speciality");
        speciality = await speciality.json();
        values.speciality = speciality;
        let skills = await fetch("http://localhost:3002/skills");
        skills = await skills.json();
        values.skills = skills;
        let languages = await fetch("http://localhost:3002/language");
        languages = await languages.json();
        values.languages = languages;
        let remotes = await fetch("http://localhost:3002/remote");
        // remotes = await remotes.json();
        values.remotes = remotes;
        let schedules = await fetch("http://localhost:3002/Schedule");
        // schedules = await schedules.json();
        values.schedules = schedules;

        setValues(values);
      } catch (err) {
        console.log(err);
        return err;
      }
    };
    getFormOptions();
  }, []);
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        location: "",
        id_Recruiter: userID,
        id_Talent: null,
        id_Seniority: 1,
        id_Education: 1,
        id_Experience: 1,
        id_Speciality: 1,
        // id_SkillJobOffer: [(name: 0), (level: 0)],
        // id_LanguageJobOffer: [(name: 0), (level: 0)],
        id_Remotes: 1,
        id_Schedule: 1,
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
        <Form className={styles.newjobForm}>
          <div>
            <label htmlFor="title" className={styles.formTitle}>
              Puesto / Título del aviso <span>*</span>
            </label>
            <Field type="textarea" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="description" className={styles.formTitle}>
              Descripción del puesto <span>*</span>
            </label>
            <Field as="textarea" id="description" name="description" />
          </div>
          <div>
            <label htmlFor="location" className={styles.formTitle}>
              Descripción del puesto <span>*</span>
            </label>
            <Field as="textarea" id="location" name="location" />
          </div>

          <div>
            <label className={styles.formTitle} htmlFor="id_Education">
              Education
            </label>
            <Field name="id_Education" as="select" id="id_Education">
              {values.education &&
                values.education.length > 0 &&
                values.education.map(({ name, id }) => {
                  return (
                    <option value={id} key={id}>
                      {name}
                    </option>
                  );
                })}
            </Field>
          </div>
          <div>
            <label className={styles.formTitle} htmlFor="id_Remote">
              Remote
            </label>
            <Field name="id_Remote" as="select" id="id_Remote">
              <option value={0}>Si</option>
              <option value={1}>No</option>
            </Field>
          </div>

          <div>
            <label className={styles.formTitle} htmlFor="id_Seniority">
              Seniority
            </label>
            <Field name="id_Seniority" as="select" id="id_Seniority">
              {values.seniorities &&
                values.seniorities.length > 0 &&
                values.seniorities.map((seniority, index) => {
                  return (
                    <option value={index} key={index}>
                      {seniority.name}
                    </option>
                  );
                })}
            </Field>
          </div>
          <div>
            <label className={styles.formTitle} htmlFor="id_Experience">
              Experience
            </label>
            <Field name="id_Experience" as="select" id="id_Experience">
              {values.experience &&
                values.experience.length > 0 &&
                values.experience.map(({ period, id }) => {
                  return (
                    <option value={id} key={id}>
                      {period}
                    </option>
                  );
                })}
            </Field>
          </div>
          <div>
            <label className={styles.formTitle} htmlFor="id_Speciality">
              Speciality
            </label>
            <Field name="id_Speciality" as="select" id="id_Speciality">
              {values.speciality &&
                values.speciality.length > 0 &&
                values.speciality.map(({ category, id }) => {
                  return (
                    <option value={id} key={id}>
                      {category}
                    </option>
                  );
                })}
            </Field>
          </div>

          {!isSubmitting && (
            <div className={styles.btnContainer}>
              <button type="submit" className={styles.publishButton}>
                Publicar
              </button>
            </div>
          )}
          {isSubmitting && (
            <p className={styles.ofertaPublicada}>Oferta publicada!</p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default NewJobForm;
