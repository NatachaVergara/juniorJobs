import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";
import { useCRUD } from "../../services/useCRUD";
import { useUserContext } from "../../Store/UserContext";
import classes from "./RecruiterProjectsCard.module.scss";

export default function ProjectsCard(props) {
  const [jobOffers, setJobOffers] = useState([])
  const { userID } = useUserContext();


  useEffect(() => {
    const fetchOffers = async () => {
      const response = await fetch(`http://localhost:3002/jobOffers?recruiter=${userID}`);
      const data = await response.json()
      console.log(data)
      setJobOffers(data)
    }
    fetchOffers()

  }, [userID])

  console.log(jobOffers)
  return (

    <Card body color="light" className={classes.profile}>
      <CardBody>
        <CardTitle tag="h5">Active offers</CardTitle>
        <Row>
          {jobOffers.map((o, i) => (
            <Col>
              <Card body color="light" className={classes.projects}>
                <CardBody>
                  <CardTitle tag="h5"> {o.title} </CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {o.description}
                  </CardSubtitle>
                  <CardText>
                  </CardText>
                </CardBody>
                <Button className={classes.button} > Delete</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
}
