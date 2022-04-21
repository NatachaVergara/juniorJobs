import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { useAxios } from "../../hooks/use-axios";
import { useUserContext } from "../../Store/UserContext";
import styles from "./NewJobForm.module.scss";

const NewJobForm = () => {
  const { fetchData, response } = useAxios();
  const { userID } = useUserContext();
  const [optionsFromDb, setOptionsFromDb] = useState({});
  console.log("options from db", optionsFromDb);
  console.log("response in new job form on submit", response);

  useEffect(() => {
    let optionsFromDb = {
      level: [
        { id: 1, name: "Beginner" },
        { id: 2, name: "Intermediate" },
        { id: 3, name: "Advanced" },
      ],
    };
    const getFormOptions = async () => {
      try {
        let seniorities = await fetch("http://localhost:3002/Seniorities");
        seniorities = await seniorities.json();
        optionsFromDb.seniorities = seniorities;
        let education = await fetch("http://localhost:3002/education");
        education = await education.json();
        optionsFromDb.education = education;
        let experience = await fetch("http://localhost:3002/experience");
        experience = await experience.json();
        optionsFromDb.experience = experience;
        let speciality = await fetch("http://localhost:3002/speciality");
        speciality = await speciality.json();
        optionsFromDb.speciality = speciality;
        let skills = await fetch("http://localhost:3002/skills");
        skills = await skills.json();
        optionsFromDb.skills = skills;
        let languages = await fetch("http://localhost:3002/language");
        languages = await languages.json();
        optionsFromDb.languages = languages;
        let remotes = await fetch("http://localhost:3002/remote");
        // remotes = await remotes.json();
        optionsFromDb.remotes = remotes;
        let schedules = await fetch("http://localhost:3002/Schedule");
        // schedules = await schedules.json();
        optionsFromDb.schedules = schedules;

        setOptionsFromDb(optionsFromDb);
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
        id_Seniority: 1,
        id_Education: 1,
        id_Experience: 1,
        id_Speciality: 1,
        id_Skill: [],
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
      }}
    >
      {({ isSubmitting, values }) => (
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
              {optionsFromDb.education &&
                optionsFromDb.education.length > 0 &&
                optionsFromDb.education.map(({ name, id }) => {
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
              {optionsFromDb.seniorities &&
                optionsFromDb.seniorities.length > 0 &&
                optionsFromDb.seniorities.map((seniority, index) => {
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
              {optionsFromDb.experience &&
                optionsFromDb.experience.length > 0 &&
                optionsFromDb.experience.map(({ period, id }) => {
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
              {optionsFromDb.speciality &&
                optionsFromDb.speciality.length > 0 &&
                optionsFromDb.speciality.map(({ category, id }) => {
                  return (
                    <option value={id} key={id}>
                      {category}
                    </option>
                  );
                })}
            </Field>
          </div>
          <div>
            <label className={styles.formTitle} htmlFor="id_Skill">
              SKILLS
            </label>
            <FieldArray name="id_Skill">
              {({ insert, remove, push }) => (
                <div>
                  {values.id_Skill.length > 0 &&
                    values.id_Skill.map((skill, index) => (
                      <div className="row" key={index}>
                        <div className="col">
                          <Field name={`id_Skill.${index}.id`} as="select">
                            {optionsFromDb.skills &&
                              optionsFromDb.skills.length > 0 &&
                              optionsFromDb.skills.map(({ name, id }) => {
                                return (
                                  <option value={id} key={id}>
                                    {name}
                                  </option>
                                );
                              })}
                          </Field>
                          <ErrorMessage
                            name={`id_Skill.${index}.id`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                        <div className="col">
                          <button type="button" onClick={() => remove(index)}>
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    className={styles.publishButton}
                    type="button"
                    onClick={() => push({ id: "" })}
                  >
                    Add skill
                  </button>
                </div>
              )}
            </FieldArray>{" "}
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
