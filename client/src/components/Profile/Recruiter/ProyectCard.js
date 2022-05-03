//import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap'
import { BASE_URL } from '../../../utils/URL';
import classes from "./RecruiterProjectsCard.module.scss";



const ProyectCard = ({ offerId, offer, description, exp, remote, schedule, seniority, speciality, title, createDate, location, onHandleDelete }) => {   
    const [experiences, setExperiences] = useState([])
    const [remotes, setRemotes] = useState([])
    const [schedules, setSchedules] = useState([])
    const [seniorities, setSeniorities] = useState([])
    const [specialities, setSpecialities] = useState([])
  //  const { onDeleteJobOffer } = useCRUD()
  //const navigate = useNavigate()
    useEffect(() => {
        const fetchDataSeniorities = async () => {
            const response = await fetch(`${BASE_URL}/Seniorities/${seniority}`);
            const data = await response.json();
            setSeniorities(data);
        };
        fetchDataSeniorities()

        const fetchDataExperience = async () => {
            const response = await fetch(`${BASE_URL}/experience/${exp}`);
            const data = await response.json();
            setExperiences(data);
        }
        fetchDataExperience();

        const fetchDataSpeciality = async () => {
            const response = await fetch(`${BASE_URL}/speciality/${speciality}`);
            const data = await response.json();
            setSpecialities(data);
        }
        fetchDataSpeciality();

        const fetchDataRemote = async () => {
            const response = await fetch(`${BASE_URL}/remotes/${remote}`);
            const data = await response.json();
            setRemotes(data);
        }
        fetchDataRemote();
        const fetchDataSchedule = async () => {
            const response = await fetch(`${BASE_URL}/schedules/${schedule}`);
            const data = await response.json();
            setSchedules(data);
        }
        fetchDataSchedule();

    }, [exp, remote, schedule, seniority, speciality])

   



    return (
        <><Col sm='12'>
            <Card body color="dark" className={classes.projects}>
                <CardBody>
                    <CardTitle tag="h5" className='text-center m-2 p-2'> OFFER ID  {offerId} || {title} </CardTitle>
                    <CardSubtitle className="mb-2 text-light " tag="h6">
                        {description}
                    </CardSubtitle>
                    <CardText className={classes.cardText}>Location:  {location} </CardText>
                    <CardText className={classes.cardText}>Offer created:  {createDate} </CardText>
                    <CardText className={classes.cardText}>Experience: {experiences.period}   </CardText>
                    <CardText className={classes.cardText}>Seniotity:  {seniorities.name}   </CardText>
                    <CardText className={classes.cardText}>Schedule:  {schedules.schedule} </CardText>
                    <CardText className={classes.cardText}>Remote:  {remotes.name} </CardText>
                    <CardText className={classes.cardText}>Speciality:  {specialities.category}  </CardText>
                    <CardText>
                    </CardText>
                </CardBody>
                <div className={classes.button}>
                    <Button type="submit" className='btn btn-outline-success'  > Edit offer</Button>
                    <Button type="submit" className='btn btn-outline-danger' onClick={() => onHandleDelete(offerId)} > Delete</Button>
                </div>

            </Card>


        </Col>



        </>
    )
}

export default ProyectCard