import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Row } from "reactstrap";
//import { useCRUD } from "../../services/useCRUD";
import { useUserContext } from "../../../Store/UserContext";
import { BASE_URL } from "../../../utils/URL";
import ProyectCard from "./ProyectCard";
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

    <Card body className={classes.profile}>
      <CardBody>
        <CardTitle tag="h5" className='fs-2 text-center text-secondary'>ACTIVE OFFERS</CardTitle>
        <Row>
          {jobOffers.map((o, i) => (
            <ProyectCard
              key={i}              
              offer={o}
              offerId={o.id}
              description={o.description}
              exp={o.id_Experience}
              remote={o.id_Remote}
              schedule={o.id_Schedule}
              seniority={o.id_Seniority}
              speciality={o.id_Speciality}
              title={o.title}
              createDate={o.createDate}
              location={o.location}
            />
          ))}
        </Row>
      </CardBody>
    </Card>
  );
}
