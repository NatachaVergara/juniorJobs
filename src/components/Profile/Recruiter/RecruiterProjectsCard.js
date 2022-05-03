import axios from "axios";
import { useEffect } from "react";
import { Card, CardBody, CardTitle, Row } from "reactstrap";
//import { useCRUD } from "../../services/useCRUD";
import { useUserContext } from "../../../Store/UserContext";
import { BASE_URL } from "../../../utils/URL";
import ProyectCard from "./ProyectCard";
import classes from "./RecruiterProjectsCard.module.scss";
import swal from 'sweetalert'

export default function ProjectsCard(props) {
  const { userID, setRecruiterOffers, recruiterOffers } = useUserContext();




  useEffect(() => {
    const fetchOffers = async () => {
      const response = await fetch(`${BASE_URL}/jobOffers?recruiter=${userID}`);
      const data = await response.json()
      console.log(data)
      setRecruiterOffers(data)
    }
    fetchOffers()

  }, [setRecruiterOffers, userID])

  const onHandleDelete = async (id) => {

    axios.delete(`${BASE_URL}/jobOffers/${id}`)
      .then((res) => {
        console.log(res)
        console.log(res.data)
        console.log(res.data.message)
        console.log(res.status)

        if (res.status === 204)
          setRecruiterOffers(recruiterOffers.filter((i) => i.id !== id))
        swal('Offer has been deleted')

      })
      .catch((error) => {
        console.log(error)
        console.log(error.status)
        console.log(error.message)
      })
  }


  console.log(recruiterOffers)

  return (

    <Card body className={classes.profile}>
      <CardBody>
        <CardTitle tag="h5" className='fs-2 text-center text-secondary'>ACTIVE OFFERS</CardTitle>
        {!recruiterOffers ? <CardTitle tag="h5" className='fs-2 text-center text-secondary'> NO ACTIVE OFFERS</CardTitle> : <Row>
          {recruiterOffers.map((o, i) => (
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
              onHandleDelete={onHandleDelete}
            />
          ))}
        </Row>}

      </CardBody>
    </Card>
  );
}
