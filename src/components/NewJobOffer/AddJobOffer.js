import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../Store/UserContext';
import { BASE_URL } from '../../utils/URL';
import swal from "sweetalert";

import { Field, Form, Formik } from 'formik';
import { Button, Col, Label, Row } from 'reactstrap';
import { MySelect, MyTextInput } from '../../utils/inputsFunctions';


const AddJobOffer = () => {
    const { userID, seniorities, exp, schedule, speciality, remote, skills, lenguage } = useUserContext();
    
    const navigate = useNavigate();

    const createJobOffer = async (values) => {
        console.log(values)
        axios
            .post(`${BASE_URL}/jobOffers`, {
                title: values.title,
                description: values.description,
                location: values.location,
                id_Recruiter: values.id_Recruiter,
                id_Schedule: values.id_Schedule,
                id_Remote: values.id_Remote,
                id_Seniority: values.id_Seniority,
                id_Experience: values.id_Experience,
                id_Speciality: values.id_Speciality,

            })
            .then((res) => {
                console.log(res)
                console.log(res.data)
                console.log(res.data.message)
                console.log(res.status)                
                if (res.status === 201) {
                    //Oferta de trabajo creada
                    swal(res.data.message)
                    navigate('/profile')
                }

                if (res.status === 202) {
                    //Oferta ya existe
                    swal(res.data.message)
                }

            }).catch(err => { console.log(err) })
    }

    return (
        <>

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
                    id_Speciality: 1,
                    Skill: [],
                    Language: [],
                }}
                onSubmit={(values) => {
                    values.id_Seniority = +values.id_Seniority;
                    values.id_Speciality = +values.id_Speciality;
                    values.id_Experience = +values.id_Experience;
                    values.id_Schedule = +values.id_Schedule;
                    values.id_Remote = +values.id_Remote;
                    values.Skill = +values.Skill;
                    values.Language = +values.Language;

                    console.log(values);
                    createJobOffer(values)
                }}
            >
                <Form>
                    <Row>
                        <Col md='6'>
                            <MyTextInput
                                label="Title *"
                                name="title"
                                type="text" />
                        </Col>
                        <Col md='6'>
                            <MyTextInput
                                label="Location *"
                                name="location"
                                type="text" />
                        </Col>

                    </Row>

                    <Row>
                        <Col md='12'>
                            <MyTextInput
                                label="Description *"
                                name="description"
                                type="textarea" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12'
                            md='4'>
                            <MySelect label="Seniority *" name="id_Seniority">
                                {seniorities.map(s =>
                                    (<option key={s.id} value={s.id}>{s.name} </option>))}
                            </MySelect>
                        </Col>

                        <Col xs='12' md='4'>
                            <MySelect label="Speciality*" name="id_Speciality">
                                {speciality.map((s) =>
                                    (<option className='text-dark' key={s.id} value={s.id}>{s.category} </option>))}
                            </MySelect>
                        </Col>
                        <Col xs='12' md='4'>
                            <MySelect name='id_Experience' label='Experience'>
                                {exp.map(e => (<option key={e.id} value={e.id}>{e.period} </option>))}
                            </MySelect>
                        </Col>

                    </Row>

                    <Row>
                        <Col md='6' xs='12'>
                            <MySelect name='id_Remote' label='Remote'>
                                {remote.map(r => (<option key={r.id} value={r.id}>{r.name} </option>))}
                            </MySelect>

                        </Col>



                        <Col md='6' xs='12'>
                            <MySelect name='id_Schedule' label='Schedule'>
                                {schedule.map(s => (<option key={s.id} value={s.id}>{s.schedule} </option>))}
                            </MySelect>



                        </Col>
                    </Row>


                    <Row>
                        <Label className="mt-3 mb-1">Skills *</Label>
                        {skills.map((sk) => (
                            <Col key={sk.id} sm='3' xs='6'>
                                <label>
                                    <Field
                                        key={sk.id}
                                        type="checkbox"
                                        name="Skills"
                                        value={sk.id.toString()}
                                    />
                                    {sk.name}
                                </label>
                            </Col>
                        ))}
                    </Row>

                    <Row>
                        <Label className="mt-3 mb-1">Lenguage *</Label>
                        {lenguage.map((l) => (
                            <Col key={l.id} sm='3' xs='6'>
                                <label>
                                    <Field
                                        key={l.id}
                                        type="checkbox"
                                        name='Lenguage'
                                        value={l.id.toString()}
                                    />
                                    {l.language}
                                </label>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col md='6'>
                            <Button type='submit' className='btn btn-outline-success m-5' >Submit</Button>
                        </Col>
                    </Row>
                </Form>





            </Formik>






        </>
    )
}

export default AddJobOffer