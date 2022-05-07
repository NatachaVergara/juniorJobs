//import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from "yup";
import { Row, Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { BASE_URL } from '../../../utils/URL';
//import EditModal from './EditModal';
import classes from "./RecruiterProjectsCard.module.scss";
//import * as Yup from "yup";
//import { errorAlerts } from '../../../utils/errorsAlert';
import { MySelect, MyTextInput } from '../../../utils/inputsFunctions';
import { errorAlerts } from '../../../utils/errorsAlert';
import axios from 'axios';
import swal from 'sweetalert';
//import { useUserContext } from '../../../Store/UserContext';


const ProyectCard = ({ offerId, offer, description, exp, remote, schedule, seniority, speciality, title, createDate, location, onHandleDelete }) => {
    const [experiences, setExperiences] = useState([])
    const [remotes, setRemotes] = useState([])
    const [schedules, setSchedules] = useState([])
    const [seniorities, setSeniorities] = useState([])
    const [specialities, setSpecialities] = useState([])
    const [modal, setModal] = useState(false)
  //  const {recruiterOffers, setRecruiterOffers} = useUserContext()
   
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

    const toggle = () => setModal(!modal)

    const [todoSpeciality, setTodoSpeciality] = useState([])
    const [todoSchedule, setTodoSchedule] = useState([])
    const [todoExperience, setTodoExperience] = useState([])
    const [todoSeniority, setTodoSeniority] = useState([])
    const [todoRemote, setTodoRemote] = useState([])



    useEffect(() => {
        const fetchDatasetSpeciality = async () => {
            const response = await fetch(`${BASE_URL}/speciality`);
            const data = await response.json();
            setTodoSpeciality(data);
        };

        fetchDatasetSpeciality();

        const fetchDataSchedule = async () => {
            const response = await fetch(`${BASE_URL}/schedules`);
            const data = await response.json();
            setTodoSchedule(data);
        };

        fetchDataSchedule();

        const fetchDataSeniority = async () => {
            const response = await fetch(`${BASE_URL}/Seniorities`);
            const data = await response.json();
            setTodoSeniority(data);
        };

        fetchDataSeniority();


        const fetchDataExperience = async () => {
            const response = await fetch(`${BASE_URL}/experience`);
            const data = await response.json();
            setTodoExperience(data);
        };
        fetchDataExperience()

        const fetchDataRemote = async () => {
            const response = await fetch(`${BASE_URL}/remotes`);
            const data = await response.json();
            setTodoRemote(data);
        };
        fetchDataRemote()
    }, [])


 

    return (
        <>
            <Col sm='12' md='6'>
                <Card body color="dark" className={classes.projects}>
                    <CardBody>
                        <CardTitle tag="h5" className='text-center p-2'> OFFER ID  {offerId} || {title} </CardTitle>
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
                        <Button
                            type="submit" className='btn btn-outline-success' onClick={() => toggle()} > Edit offer</Button>

                        <Button type="submit" className='btn btn-outline-danger' onClick={() => onHandleDelete(offerId)} > Delete</Button>
                    </div>


                    <Modal
                        isOpen={modal}
                        toggle={toggle}
                    >
                        <ModalHeader toggle={toggle}>
                            Modal title
                        </ModalHeader>
                        <ModalBody>
                            <Formik
                                initialValues={{
                                    title: title,
                                    description: description,
                                    location: location,
                                    id_Recruiter: offer.id_Recruiter,
                                    id_Schedule: schedule,
                                    id_Remote: remote,
                                    id_Talent: null,
                                    id_Seniority: seniority,
                                    id_Experience: exp,
                                    id_Speciality: speciality

                                }}

                                validationSchema={Yup.object({
                                    title: Yup.string().required(errorAlerts[4].requiredAlert),
                                    description: Yup.string().required(errorAlerts[4].requiredAlert),
                                    location: Yup.string().required(errorAlerts[4].requiredAlert)
                                })}


                                onSubmit={(values) => {                                  

                                  
                                    axios.put(`${BASE_URL}/jobOffers/${offerId}`,
                                        {
                                            title: values.title,
                                            description: values.description,
                                            location: values.location,
                                            id_Recruiter: values.id_Recruiter,
                                            id_Schedule: values.id_Schedule,
                                            id_Remote: values.id_Remote,
                                            id_Seniority: values.id_Seniority,
                                            id_Experience: values.id_Experience,
                                            id_Speciality: values.id_Speciality,
                                        }

                                    ).then((res) => {
                                        console.log(res)
                                        console.log(res.data)
                                        console.log(res.data.message)
                                        console.log(res.status)

                                        if (res.status === 201) {
                                            swal(res.data.message)
                                            
                                            toggle()
                                        } else {
                                            swal('Error')
                                        }
                                    }).catch(err => { console.log(err) })

                                }}

                            >
                                {({ isValid }) =>
                                (
                                    <Form>
                                        <Row>
                                            <Col md='6' xs='6'>
                                                <MyTextInput
                                                    label='Title'
                                                    type="text"
                                                    name='title'
                                                    placeholder={title}
                                                />
                                            </Col>
                                            <Col md='6' xs='6'>
                                                <MyTextInput
                                                    label='Location'
                                                    type="text"
                                                    name='location'
                                                    placeholder={location}
                                                />
                                            </Col>


                                        </Row>
                                        <Row>

                                            <Col md='12'>
                                                <MyTextInput
                                                    label='Description'
                                                    type="textarea"
                                                    name='description'
                                                    placeholder={description}
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md='6' xs='6'>
                                                <MySelect label="Speciality" name="id_Speciality"> {todoSpeciality.map((s, i) => (
                                                    <option className='text-dark' key={i} value={s.id}>{s.category} </option>
                                                ))}
                                                </MySelect>
                                            </Col>
                                            <Col md='6' xs='6'>
                                                <MySelect label='Seniority' name='id_Seniority'>
                                                    {todoSeniority.map(s => (<option className='text-dark' key={s.id} value={s.id}> {s.name} </option>))}
                                                </MySelect>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md='6' xs='6'>
                                                <MySelect label='Experience' name='id_Experience'>
                                                    {todoExperience.map(e => (
                                                        <option className='text-dark' key={e.id} value={e.id}> {e.period} </option>
                                                    ))}
                                                </MySelect>

                                            </Col>
                                            <Col md='6' xs='6'>
                                                <MySelect label='Schedule' name='id_Schedule'>
                                                    {todoSchedule.map(s => (
                                                        <option className='text-dark' key={s.id} value={s.id}>{s.schedule} </option>
                                                    ))}
                                                </MySelect>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md='6' xs='6'>
                                                <MySelect label='Remote' name='id_Remote'>
                                                    {todoRemote.map(r => (
                                                        <option className='text-dark' key={r.id} value={r.id}>{r.name} </option>
                                                    ))}
                                                </MySelect>

                                            </Col>


                                        </Row>
                                        <ModalFooter>
                                            <Button
                                                color="primary" type='submit' disable={!isValid}   >
                                                Do Something
                                            </Button>
                                            {' '}
                                            <Button onClick={toggle} >
                                                Cancel
                                            </Button>
                                        </ModalFooter>
                                    </Form>)}
                            </Formik>


                        </ModalBody>

                    </Modal>

                </Card>


            </Col>



        </>


    )
}

export default ProyectCard