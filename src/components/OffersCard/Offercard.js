import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CardText } from 'reactstrap';
import { BASE_URL } from '../../utils/URL';
import style from './OfferCard.module.scss'


const Offercard = ({ offer }) => {
    const [srID, setSR] = useState([])
    const [expID, setExp] = useState([])
    const [scheduleID, setSchedule] = useState([])
    const [specialityID, setSspeciality] = useState([])
    let id = offer.id

    useEffect(() => {
        const fetchSeniority = async () => {
            try {
                const response = await fetch(`${BASE_URL}/Seniorities/${offer.id_Seniority}`)
                const data = await response.json()
                setSR(data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchSeniority()



        const fetchExperience = async () => {

            try {
                const response = await fetch(`${BASE_URL}/experience/${offer.id_Experience}`);
                const data = await response.json()
                setExp(data)

            } catch (error) {
                console.log(error)
            }
        }

        fetchExperience()

        const fetchShedules = async () => {

            try {
                const response = await fetch(`${BASE_URL}/schedules/${offer.id_Schedule}`);
                const data = await response.json()

                setSchedule(data)
            } catch (error) {
                console.log(error)
            }

        }
        fetchShedules()



        const fetchspeciality = async () => {

            try {
                const response = await fetch(`${BASE_URL}/speciality/${offer.id_Speciality}`);
                const data = await response.json()
                setSspeciality(data)
            } catch (error) {
                console.log(error)
            }

        }
        fetchspeciality()



    }, [offer.id_Experience, offer.id_Schedule, offer.id_Seniority, offer.id_Speciality])

  



    return (
        <div className={style.card}>
            <div className={style.header}>{offer.title}</div>
            <div className={style.body}>
                <CardText>{srID.name} </CardText>
                <CardText>{expID.period} </CardText>
                <CardText>{scheduleID.schedule} </CardText>
                <CardText>{specialityID.category} </CardText>
            </div>
            <div className={style.button}>
                <Link className="btn btn-outline-danger" to={`/job/${id}`} >Go to offer </Link>
            </div>
        </div>

    );
};

export default Offercard