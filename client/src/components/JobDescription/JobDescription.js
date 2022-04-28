import React, { useEffect, useState } from 'react'
import { AccessTimeRounded, CakeOutlined, CheckroomOutlined, DinnerDiningOutlined, LaptopMacOutlined, LocalHospitalOutlined, TagFacesOutlined, WatchLater } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import { Col, Row } from 'reactstrap';
import classes from './JobDescription.module.scss'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../utils/URL';



const JobDescription = () => {
    const { id } = useParams()
   
    const [offer, setOffer] = useState([])
    const [sr, setSR] = useState([])
    const [exp, setExp] = useState([])
    const [schedule, setSchedule] = useState([])
    const [speciality, setSspeciality] = useState([])
  
    useEffect(()=>{
        const fetchOffer = async ()=>{
            try {
                const response = await fetch(`${BASE_URL}/jobOffers/${id}`)
                const data = await response.json()
                setOffer(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchOffer()
    }, [id])    

    console.log(offer)
  
    
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


console.log(exp)



    return (
        <>
            <div className={classes.wrapper}>
                <h1 className={classes.title}>{offer.title} </h1>
                <ul>
                    <li>{offer.location} </li>
                    <li>|</li>
                    <li>{sr.name} </li>
                    <li>|</li>
                    <li> {schedule.schedule} </li>
                    <li>|</li>
                    <li>{speciality.category} </li>
                    <li>|</li>
                    <li>{exp.period} </li>
                </ul>

                <ul className={classes.items}>
                    <li>
                        <PersonIcon className={classes.icon} />
                        <span>22 postulaciones</span>
                    </li>
                    <li>
                        <WatchLater className={classes.icon} />
                        <span>Responde entre 2 y 10 días</span>
                    </li>
                    <li>
                        <TagFacesOutlined className={classes.icon} />
                        <span >Revisado por última vez ayer</span>
                    </li>
                </ul>
                <div>
                    <button className='btn btn-primary'>Postulate</button>
                </div>
            </div>
            <div className={classes.wrapperDesc}>
                <p className='text'>
                    Llevamos casi 20 años entregando soluciones de punta basadas en la interpretación de Big Data generada por cientos de millones de personas alrededor del mundo, con el objetivo final de mejorar sus vidas.

                    Hemos mejorado el engagement y lealtad de los clientes finales, al mismo tiempo aumentando los ingresos de grandes empresas alrededor del mundo, en el mercado de las telecomunicaciones, servicios financieros y comercio minorista.

                    Nuestras soluciones se basan en servicios gestionados con tecnología de propiedad intelectual propia y patentada. Somos líderes en el mercado con más de 50 instalaciones en producción hoy día en clientes ubicados en 15 países; nos respalda un equipo de profesionales en Latino América, Asia y Europa.
                </p>
                <h3 className='title m3 p-3'>Job Functions</h3>
                <p className='text'>
                    {offer.description}
                </p>
                <h3 className='title m-3 p-3'>Qualifications and requirements</h3>
                <p className='text'>
                    Buscamos profesionales juniors que posean los siguientes requisitos:
                    - Titulado de Ingeniería en Computación o Informática
                    - Contar con al menos 1 año de experiencia
                    - Dominio de los lenguajes: .Net y Python
                </p>
                <h3 className='title m-3 p-3'>Desirable skills</h3>
                <p className='text'>
                    - Deseable manejo uno o más de los siguientes: BBDD, PostgreSql,
                    - Inglés deseable
                    - Deseable dominio de Go, Oracle y/o SQL Server
                    - Deseable conocimiento en Implementación en Soluciones cloud GCP, Azure, AWS

                    - Deseable conocimiento de BBDD NoSQL

                    -Deseable experiencia en industria Telecomunicaciones, Bancaria / Financiera, Retail</p>
                <div className='conditions '>
                    <h3 className='title '>Conditions</h3>
                    <Row>
                        <Col className='col-left'>
                            <ul>
                                <li>
                                    <AccessTimeRounded className='icon' />
                                    <span>Flexible schedule</span>
                                </li>
                                <li>
                                    <LaptopMacOutlined className='icon' />
                                    <span>Paid internet service</span>
                                </li>
                                <li>
                                    <CakeOutlined className='icon' />
                                    <span>Free day on birthday</span>
                                </li>
                            </ul>
                        </Col>
                        <Col className='col-right'>
                            <ul>
                                <li>
                                    <LocalHospitalOutlined className='icon' />
                                    <span>Healthcare</span>
                                </li>
                                <li>
                                    <CheckroomOutlined className='icon' />
                                    <span>Informal wear</span>
                                </li>
                                <li>
                                    <DinnerDiningOutlined className='icon' />
                                    <span>Free meals</span>
                                </li>
                            </ul>

                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default JobDescription