import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { useUserContext } from '../../Store/UserContext'
import FeaturedCard from "./FeaturedCard";
import style from './Styles/FeatureCards.module.scss'
const FeaturedCards = () => {
  const { jobOffers } = useUserContext();

  console.log(jobOffers[2])

  return (
    <section className={style.section}>
      <h3 className={style.title}>ACTIVE JOB OFFERS</h3>
      <Row>
        <Col className={style.col} sm='12' md='4'>
          {jobOffers[0] ?
            <FeaturedCard
              id={jobOffers[0].id}
              offer={jobOffers[0]}
              experience={jobOffers[0].id_Experience}
              seniority={jobOffers[0].id_Seniority}
              spe={jobOffers[0].id_Speciality}
              sch={jobOffers[0].id_Schedule}

            /> : <h1>cargando.....</h1>}
        </Col>

        <Col className={style.col} sm='12' md='4'>
          {jobOffers[1] ?
            <FeaturedCard
              id={jobOffers[1].id}
              offer={jobOffers[1]}
              experience={jobOffers[1].id_Experience}
              seniority={jobOffers[1].id_Seniority}
              spe={jobOffers[1].id_Speciality}
              sch={jobOffers[1].id_Schedule}

            /> : <h1>cargando.....</h1>}
        </Col>
        <Col className={style.col} sm='12'md='4'>
          {jobOffers[2] ?
            <FeaturedCard
              id={jobOffers[2].id}
              offer={jobOffers[2]}
              experience={jobOffers[2].id_Experience}
              seniority={jobOffers[2].id_Seniority}
              spe={jobOffers[2].id_Speciality}
              sch={jobOffers[2].id_Schedule}

            /> : <h6>loading.....</h6>}
        </Col>
      </Row>

      <div className={style.button}>
        <Link to='/joboffers' className='btn btn-outline-success p-3'>GO TO ALL    ACTIVE   OFFERS</Link>
      </div>

    </section>
  );
};

export default FeaturedCards;
