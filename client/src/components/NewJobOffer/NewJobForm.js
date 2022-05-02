import { Formik, Form, Field } from "formik";
//import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import FetchRoutes from "../../Fetch/FetchRoutes";
//import { useAxios } from "../../hooks/use-axios";
import { useCRUD } from "../../services/useCRUD";
import { useUserContext } from "../../Store/UserContext";
//import { BASE_URL } from "../../utils/URL";
import styles from "./NewJobForm.module.scss";

const NewJobForm = () => {
  //const { fetchData, response } = useAxios();
  const { userID, seniorities, exp, schedule, speciality, remote } = useUserContext();
  const {onPostJobOffer} = useCRUD()
  
  FetchRoutes()

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        location: "",
        id_Recruiter: userID,
        id_Schedule: 1,
        id_Remote: 1,
        id_Seniority: 1,
        id_Experience: 1,
        id_Speciality:1
      }}
      onSubmit={(values, { resetForm, setSubmitting }) => {
       setSubmitting(true);     
       onPostJobOffer(values)
        setSubmitting(false);


      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.newjobForm}>
          <div>
            <label htmlFor="title" className={styles.formTitle}>
              Job Offer <span>*</span>
            </label>
            <Field type="textarea" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="description" className={styles.formTitle}>
              Job Description <span>*</span>
            </label>
            <Field as="textarea" id="description" name="description" />
          </div>
          <div>
            <label htmlFor="location" className={styles.formTitle}>
              Location <span>*</span>
            </label>
            <Field as="textarea" id="location" name="location" />
          </div>

          <div>
            <label className={styles.formTitle} htmlFor="id_Schedule">
              Schedule
            </label>
            <Field name="id_Schedule" as="select" id="id_Schedule">
              {schedule.map(sch => (<option key={sch.id} value={sch.id}>{sch.schedule} </option>))}
            </Field>
          </div>
          <div>
            <label className={styles.formTitle} htmlFor="id_Remote">
              Remote
            </label>
            <Field name="id_Remote" as="select" id="id_Remote">
              {remote.map(r => (<option key={r.id} value={r.id}>{r.name} </option>))}
            </Field>
          </div>

          <div>
            <label className={styles.formTitle} htmlFor="id_Seniority">
              Seniority
            </label>
            <Field name="id_Seniority" as="select" id="id_Seniority">
              {seniorities &&
                seniorities.length > 0 &&
                seniorities.map((seniority, index) => {
                  return (
                    <option value={seniority.id} key={index}>
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
              {exp.map(e => (<option key={e.id} value={e.id}> {e.period} </option>))}
            </Field>
          </div>
          <div>
            <label className={styles.formTitle} htmlFor="id_Speciality">
              Speciality
            </label>
            <Field name="id_Speciality" as="select" id="id_Speciality">
              {speciality.map((s, i) => (
                <option key={i} value={s.id}>{s.category} </option>
              ))}
            </Field>
          </div>

          {!isSubmitting && (
            <div className={styles.btnContainer}>
              <button type="submit" className='btn btn-outline-success m-2'>
                Publish offer
              </button>
            </div>
          )}
         
        </Form>
      )}
    </Formik>
  );
};

export default NewJobForm;
