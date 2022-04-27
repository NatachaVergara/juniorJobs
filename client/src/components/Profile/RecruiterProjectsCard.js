import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";
//import { useCRUD } from "../../services/useCRUD";
import { useUserContext } from "../../Store/UserContext";
import { BASE_URL } from "../../utils/URL";
import classes from "./RecruiterProjectsCard.module.scss";

export default function ProjectsCard(props) {
  const [jobOffers, setJobOffers] = useState([])
  const { userID } = useUserContext();


  useEffect(() => {
    const fetchOffers = async () => {
      const response = await fetch(`${BASE_URL}/jobOffers?recruiter=${userID}`);
      const data = await response.json()
      console.log(data)
      setJobOffers(data)
    }
    fetchOffers()

  }, [userID])










  console.log(jobOffers)
  return (

    <Card body  className={classes.profile}>
      <CardBody>
        <CardTitle tag="h5" className='fs-2 text-center text-secondary'>ACTIVE OFFERS</CardTitle>
        <Row>
          {jobOffers.map((o, i) => (
            <Col sm='5'  key={i}>
              <Card body color="dark" className={classes.projects}>
                <CardBody>
                  <CardTitle tag="h5" className='text-center m-2 p-2'> {o.title} </CardTitle>
                  <CardSubtitle className="mb-2 text-light " tag="h6">
                    {o.description}
                  </CardSubtitle>
                  <CardText className={classes.cardText}>Location: {o.location} </CardText>
                  <CardText className={classes.cardText}>Experience:  </CardText>
                  <CardText className={classes.cardText}>Seniotity:  </CardText>
                  <CardText className={classes.cardText}>Schedule:  </CardText>
                  <CardText className={classes.cardText}>Speciality:  </CardText>
                  <CardText>
                  </CardText>
                </CardBody>
                <div className={classes.button}>
                <Button type="submit" className='btn btn-outline-success' > Edit offer</Button>
                <Button type="submit" className='btn btn-outline-danger' > Delete</Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
}
