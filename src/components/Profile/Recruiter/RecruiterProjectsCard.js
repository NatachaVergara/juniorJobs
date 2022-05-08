import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Row } from "reactstrap";
//import { useCRUD } from "../../services/useCRUD";
import { useUserContext } from "../../../Store/UserContext";
import { BASE_URL } from "../../../utils/URL";
import ProyectCard from "./ProyectCard";
import classes from "./RecruiterProjectsCard.module.scss";
import swal from 'sweetalert'
import FetchOffer from '../../../Fetch/FetchOffer'
export default function ProjectsCard() {
  const { userID, jobOffers, setJobOffers } = useUserContext();
  const [recruiterOffer, setRecruiterOffer] = useState([])
  const { fetchOffers } = FetchOffer()

  FetchOffer()


console.log('hola')
  //filtro a las jobsOffers segun el id del recruiter y a la informacion la envio a la ProyectCard
  useEffect(() => {
    let userOffers = jobOffers.filter(u => u.id_Recruiter === userID)
    setRecruiterOffer(userOffers)
  }, [jobOffers, userID])


  //Funcion para hacer el update del jobOffer
  const onHandleUpdate = (offerId, values, toggle) => {
    axios.put(`${BASE_URL}/jobOffers/${offerId}`,
      {
        title: values.title,
        description: values.description,
        location: values.location,
        id_Recruiter: values.id_Recruiter,
        id_Schedule: values.id_Schedule,
        id_Remote: values.id_Remote,
        id_Seniority: values.id_Seniority,
        id_Experience: values.id_Experience,
        id_Speciality: values.id_Speciality,
      }

    ).then((res) => {
      console.log(res)
      console.log(res.data)
      console.log(res.data.message)
      console.log(res.status)

      if (res.status === 201) {
        swal(res.data.message)
        console.log(jobOffers)
        fetchOffers()
        toggle()

      } else {
        swal('Error')
      }
    }).catch(err => { console.log(err) })
  }

  //funcion para eliminar un jobOffer
  const onHandleDelete = async (id) => {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      buttons: {
        cancel: {
          text: "Cancel",
          value: false,
          visible: true,
          className: "btn btn-outline-danger text-dark",
          closeModal: true,

        },
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn btn-outline-success",
          closeModal: true
        }

      }
    }).then((result) => {
      if (result) {
        axios.delete(`${BASE_URL}/jobOffers/${id}`)
          .then((res) => {
            console.log(res)
            console.log(res.data)
            console.log(res.data.message)
            console.log(res.status)

            if (res.status === 204)
              setJobOffers(jobOffers.filter((i) => i.id !== id))
            swal('Offer has been deleted')


            if (res.status === 404) {
              swal('No job offer found in out data base')
            }
          })
          .catch((error) => {
            console.log(error)
            console.log(error.status)
            console.log(error.message)
          })
      }
    })
  }




  return (

    <Card body className={classes.profile}>
      <CardBody>
        <CardTitle tag="h5" className='fs-2 text-center text-secondary'>ACTIVE OFFERS</CardTitle>
        {!recruiterOffer ? <CardTitle tag="h5" className='fs-2 text-center text-dark'> NO ACTIVE OFFERS</CardTitle> : <Row>
          {recruiterOffer.map((o) => (
            <ProyectCard
              key={o.id}
              offer={o}
              offerId={o.id}
              description={o.description}
              title={o.title}
              createDate={o.createDate}
              location={o.location}
              onHandleDelete={onHandleDelete}
              update={onHandleUpdate}
            />
          ))}
        </Row>}

      </CardBody>
    </Card>
  );
}
