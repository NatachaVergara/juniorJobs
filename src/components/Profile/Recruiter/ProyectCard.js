import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from "yup";
import { Row, Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { BASE_URL } from '../../../utils/URL';
import classes from "./RecruiterProjectsCard.module.scss";
import { MySelect, MyTextInput } from '../../../utils/inputsFunctions';
import { errorAlerts } from '../../../utils/errorsAlert';
import { useUserContext } from '../../../Store/UserContext';
import FetchRoutes from '../../../Fetch/FetchRoutes';



const ProyectCard = ({ offerId, offer, description, title, createDate, location, onHandleDelete, update }) => {
    const [experiences, setExperiences] = useState([])
    const [remotes, setRemotes] = useState([])
    const [schedules, setSchedules] = useState([])
    const [seniorities, setSeniorities] = useState([])
    const [specialities, setSpecialities] = useState([])
    const [modal, setModal] = useState(false)  
    
    
    
    useEffect(() => {
        const fetchDataSeniorities = async () => {
            const response = await fetch(`${BASE_URL}/Seniorities/${offer.id_Seniority}`);
            const data = await response.json();
            setSeniorities(data);
        };
        fetchDataSeniorities()

        const fetchDataExperience = async () => {
            const response = await fetch(`${BASE_URL}/experience/${offer.id_Experience}`);
            const data = await response.json();
            setExperiences(data);
        }
        fetchDataExperience();

        const fetchDataSpeciality = async () => {
            const response = await fetch(`${BASE_URL}/speciality/${offer.id_Speciality}`);
            const data = await response.json();
            setSpecialities(data);
        }
        fetchDataSpeciality();

        const fetchDataRemote = async () => {
            const response = await fetch(`${BASE_URL}/remotes/${offer.id_Remote}`);
            const data = await response.json();
            setRemotes(data);
        }
        fetchDataRemote();
        const fetchDataSchedule = async () => {
            const response = await fetch(`${BASE_URL}/schedules/${offer.id_Schedule}`);
            const data = await response.json();
            setSchedules(data);
        }
        fetchDataSchedule();

    }, [offer.id_Experience, offer.id_Remote, offer.id_Schedule, offer.id_Seniority, offer.id_Speciality])

    ////////////--------------/////////////////
    ///Fron here is all use in the modal
    const toggle = () => setModal(!modal)
    //Traigo las diferentes rutas del context que son llamadas con el FetchRoutes()
    const {seniorities: srty, exp, schedule,speciality,  remote} = useUserContext()
    FetchRoutes()


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
                                    id_Schedule:  offer.id_Schedule,
                                    id_Remote: offer.id_Remote,
                                    id_Talent: null,
                                    id_Seniority: offer.id_Seniority,
                                    id_Experience: offer.id_Experience,
                                    id_Speciality: offer.id_Speciality

                                }}
                                  
                                validationSchema={Yup.object({
                                    title: Yup.string().required(errorAlerts[4].requiredAlert),
                                    description: Yup.string().required(errorAlerts[4].requiredAlert),
                                    location: Yup.string().required(errorAlerts[4].requiredAlert)
                                })}


                                onSubmit={(values) => {
                                    update(offerId, values, toggle )
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
                                                <MySelect label="Speciality" name="id_Speciality"> {speciality.map((s, i) => (
                                                    <option className='text-dark' key={i} value={s.id}>{s.category} </option>
                                                ))}
                                                </MySelect>
                                            </Col>
                                            <Col md='6' xs='6'>
                                                <MySelect label='Seniority' name='id_Seniority'>
                                                    {srty.map(s => (<option className='text-dark' key={s.id} value={s.id}> {s.name} </option>))}
                                                </MySelect>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md='6' xs='6'>
                                                <MySelect label='Experience' name='id_Experience'>
                                                    {exp.map(e => (
                                                        <option className='text-dark' key={e.id} value={e.id}> {e.period} </option>
                                                    ))}
                                                </MySelect>

                                            </Col>
                                            <Col md='6' xs='6'>
                                                <MySelect label='Schedule' name='id_Schedule'>
                                                    {schedule.map(s => (
                                                        <option className='text-dark' key={s.id} value={s.id}>{s.schedule} </option>
                                                    ))}
                                                </MySelect>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md='6' xs='6'>
                                                <MySelect label='Remote' name='id_Remote'>
                                                    {remote.map(r => (
                                                        <option className='text-dark' key={r.id} value={r.id}>{r.name} </option>
                                                    ))}
                                                </MySelect>

                                            </Col>


                                        </Row>
                                        <ModalFooter>
                                            <Button
                                                color="primary" type='submit' >
                                                Update
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