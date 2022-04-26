import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, CardTitle, CardText, Card } from "reactstrap";

export const FeaturedCard = ({ color, offer,experience, seniority, sch, spe   }) => {
  const [sr, setSR] = useState([])
  const [exp, setExp] = useState([])
  const [schedule, setSchedule] = useState([])
  const [speciality, setSspeciality] = useState([])

  
  const BASE_URL = `http://localhost:3002`


  useEffect(() => {
    const fetchSeniority = async () => {
      const response = await fetch(`${BASE_URL}/Seniorities/${seniority}`)
      const data = await response.json()

      setSR(data)
    }
    fetchSeniority()

  }, [BASE_URL, seniority])


  useEffect(() => {
    const fetchExperience = async () => {
      const response = await fetch(`${BASE_URL}/experience/${experience}`);
      const data = await response.json()

      setExp(data)
    }
    fetchExperience()

  }, [BASE_URL, experience])
  
 

  useEffect(() => {
    const fetchShedules = async () => {
      const response = await fetch(`${BASE_URL}/schedules/${sch}`);
      const data = await response.json()

      setSchedule(data)
    }
    fetchShedules()

  }, [BASE_URL, sch])

  useEffect(() => {
    const fetchspeciality = async () => {
      const response = await fetch(`${BASE_URL}/speciality/${spe}`);
      const data = await response.json()
      setSspeciality(data)
    }
    fetchspeciality()

  }, [BASE_URL, spe])



  return (
    <Col className='p-3' sm='6'>
      <Row>
        <Link to='/job'
        className='text-decoration-none btn' >
          <Col sm="12">
            <Card body color={color}>
              <Row>
                <Col >
                  <CardTitle tag="h5">{offer.title} </CardTitle>
                  <CardText>{offer.description} </CardText>
                  <div className='d-flex justify-content-between align-item-center'>
                  <CardText>{sr.name} </CardText>
                  <CardText>{exp.period} </CardText>
                  <CardText>{schedule.schedule} </CardText>
                  <CardText>{speciality.category} </CardText>
                  </div>
                 
                </Col>
              </Row>
            </Card>
          </Col>
        </Link>
      </Row>
    </Col>
  );
};

export default FeaturedCard;
