import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FetchRoutes from '../../Fetch/FetchRoutes';
import { useUserContext } from '../../Store/UserContext';
import { BASE_URL } from '../../utils/URL';
import styles from "./NewJobForm.module.scss";
const AddJobOffer = () => {
    const { userID, seniorities, exp, schedule, speciality, remote } = useUserContext();
    FetchRoutes()

    const navigate = useNavigate();
    const [offer, setOffer] = useState({
        title: "",
        description: "",
        location: "",
        id_Recruiter: userID,
        id_Schedule: 1,
        id_Remote: 1,
        id_Seniority: 1,
        id_Experience: 1,
        id_Speciality: 1

    })


    const { title, description, location, id_Recruiter, id_Schedule, id_Remote, id_Seniority, id_Experience, id_Speciality } = offer

    const createJobOffer = async (e) => {
        e.preventDefault()
        axios
            .post(`${BASE_URL}/jobOffers`, {
                title,
                description,
                location,
                id_Recruiter,
                id_Schedule,
                id_Remote,
                id_Seniority,
                id_Experience,
                id_Speciality

            })
            .then(({ data }) => {
                alert('Offer has been created', data)
                navigate('/profile')
            }).catch(err => { console.log(err) })       
    }

    const onChanges = (e) => {
        setOffer({
            ...offer,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1>Create a new Job offer</h1>

            <form onSubmit={createJobOffer} className={styles.newjobForm}>
                <div>
                    <label htmlFor="title" className={styles.formTitle}>
                        Job Offer <span>*</span>
                    </label>
                    <input
                        value={title}
                        name='title'
                        type='text'
                        id='title'
                        onChange={onChanges}
                    />
                </div>
                <div>
                    <label htmlFor="description" className={styles.formTitle}>
                        Job Description <span>*</span>
                    </label>
                    <input
                        value={description}
                        name='description'
                        type='text'
                        id='description'
                        onChange={onChanges}
                    />
                </div>
                <div>
                    <label htmlFor="location" className={styles.formTitle}>
                        Location <span>*</span>
                    </label>
                    <input
                        value={location}
                        name='location'
                        type='textarea'
                        id='location'
                        onChange={onChanges}
                    />
                </div>
                <div>
                    <label className={styles.formTitle} htmlFor="id_Schedule">
                        Schedule
                    </label>
                    <select
                        value={id_Schedule}
                        name='id_Schedule'
                        id=' id_Schedule'
                        onChange={onChanges}
                    >
                        {schedule.map(sch => (
                            <option key={sch.id} value={sch.id}>{sch.schedule}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className={styles.formTitle} htmlFor='id_Remote'
                    >Remote
                    </label>
                    <select
                        value={id_Remote}
                        name='id_Remote'
                        onChange={onChanges}>
                        {remote.map(r => (
                            <option key={r.id} value={r.id}> {r.name} </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor='id_Seniority' className={styles.formTitle}>Seniority</label>
                    <select
                        value={id_Seniority}
                        name='id_Seniority'
                        id='id_Seniority'
                        onChange={onChanges}
                    >{seniorities.map(s => (
                        <option key={s.id} value={s.id}>{s.name} </option>
                    ))}
                    </select>
                </div>


                <div>
                    <label htmlFor=' id_Experience' className={styles.formTitle}>Experience</label>
                    <select
                        value={id_Experience}
                        name='id_Experience'
                        id='id_Experience'
                        onChange={onChanges}
                    >
                        {exp.map(e => (
                            <option key={e.id} value={e.id}> {e.period} </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor='id_Speciality' className={styles.formTitle}>Speciality</label>
                    <select
                    value={id_Speciality}
                    name='id_Speciality'
                    id='id_Speciality'
                    onChange={onChanges}
                    >   
                    {speciality.map(s=>(
                        <option key={s.id} value={s.id}> {s.category}</option>
                    ))}
                    </select>
                </div>

                <button type='submit' className='btn btn-outline-success' >Enviar</button>
            </form>








        </div>
    )
}

export default AddJobOffer