import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, CardText } from "reactstrap";
import { BASE_URL } from "../../utils/URL";



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
    <Col className='p-3' sm='4' >
      <Row>
        <Col sm="12">
          <Row>
            <div className="card text-white  border-light mb-3 p-3" style={{ maxWidth: '100%' }}>
              <div className="card-header">{offer.title}</div>
              <div className="card-body">
                <div className='d-flex flex-column justify-content-between align-item-center'>
                  <CardText>{sr.name} </CardText>
                  <CardText>{exp.period} </CardText>
                  <CardText>{schedule.schedule} </CardText>
                  <CardText>{speciality.category} </CardText>
                </div>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <Link className=" btn btn-danger card-date w-50" to={`/job/${id}`} >Go to offer </Link>
              </div>
            </div>

          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default FeaturedCard;
