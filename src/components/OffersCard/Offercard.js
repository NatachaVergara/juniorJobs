import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CardText } from 'reactstrap';
import { BASE_URL } from '../../utils/URL';
import style from './OfferCard.module.scss'


const Offercard = ({ offer }) => {
    const [seniority, setSeniority] = useState([])
    const [experience, setExperience] = useState([])
    const [schedule, setSchedule] = useState([])
    const [speciality, setSpeciality] = useState([])
    let id = offer.id

    useEffect(() => {
        console.log('...fetching in Offercard')
        const fetchData = async () => {
            try {
                axios.all([
                    axios.get(`${BASE_URL}/Seniorities/${offer.id_Seniority}`),
                    axios.get(`${BASE_URL}/experience/${offer.id_Experience}`),
                    axios.get(`${BASE_URL}/speciality/${offer.id_Speciality}`),
                    axios.get(`${BASE_URL}/schedules/${offer.id_Schedule}`)                   
                ]).then(response => {
                    setSeniority(response[0].data);
                    setExperience(response[1].data);
                    setSpeciality(response[2].data);
                    setSchedule(response[3].data);
                  
                })
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()


    }, [offer.id_Experience, offer.id_Schedule, offer.id_Seniority, offer.id_Speciality])

    return (
        <div className={style.card}>
            <div className={style.header}>{offer.title}</div>
            <div className={style.body}>
                <CardText>{seniority.name} </CardText>
                <CardText>{experience.period} </CardText>
                <CardText>{schedule.schedule} </CardText>
                <CardText>{speciality.category} </CardText>
            </div>
            <div className={style.button}>
                <Link className="btn btn-outline-danger" to={`/job/${id}`} >Go to offer </Link>
            </div>
        </div>

    );
};

export default Offercard