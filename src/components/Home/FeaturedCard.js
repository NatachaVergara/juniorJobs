import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../utils/URL";
import style from './Styles/FeatureCard.module.scss'


export const FeaturedCard = ({ offer, experience, seniority, sch, spe }) => {
  const [sr, setSR] = useState([])
  const [exp, setExp] = useState([])
  const [schedule, setSchedule] = useState([])
  const [speciality, setSspeciality] = useState([])
  

  useEffect(() => {
    const fetchSeniority = async () => {
      try {
        const response = await fetch(`${BASE_URL}/Seniorities/${seniority}`)
        const data = await response.json()
        setSR(data)

      } catch (error) {
        console.log(error)
      }
    }
    fetchSeniority()

    

    const fetchExperience = async () => {

      try {
        const response = await fetch(`${BASE_URL}/experience/${experience}`);
        const data = await response.json()
        setExp(data)

      } catch (error) {
        console.log(error)
      }
    }

    fetchExperience()

    const fetchShedules = async () => {

      try {
        const response = await fetch(`${BASE_URL}/schedules/${sch}`);
        const data = await response.json()

        setSchedule(data)
      } catch (error) {
        console.log(error)
      }

    }
    fetchShedules()



    const fetchspeciality = async () => {

      try {
        const response = await fetch(`${BASE_URL}/speciality/${spe}`);
        const data = await response.json()
        setSspeciality(data)
      } catch (error) {
        console.log(error)
      }

    }
    fetchspeciality()



  }, [experience, sch, seniority, spe])

  let id = offer.id



  return (
   
    
         
            <div className={style.card}>
              <div className={style.header}>{offer.title}</div>
             
                <div className={style.body}>
                  <CardText>{sr.name} </CardText>
                  <CardText>{exp.period} </CardText>
                  <CardText>{schedule.schedule} </CardText>
                  <CardText>{speciality.category} </CardText>
                </div>
             
              <div className={style.button}>
                <Link className="btn btn-outline-danger" to={`/job/${id}`} >Go to offer </Link>
              </div>
            </div>
       
      
   
  );
};

export default FeaturedCard;
