import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { useUserContext } from '../../Store/UserContext'
import Offercard from "../OffersCard/Offercard";
import Spinner from "../Spinner/Spinner";

import style from './Styles/FeatureCards.module.scss'
const FeaturedCards = () => {
  const { jobOffers } = useUserContext();


  return (
    <section className={style.section}>
      <h3 className={style.title}>ACTIVE JOB OFFERS</h3>
      <Row>
        <Col className={style.col} sm='12' md='4'>
          {jobOffers[0] ?
            <Offercard
              id={jobOffers[0].id}
              offer={jobOffers[0]}
              

            /> : <Spinner/>}
        </Col>

        <Col className={style.col} sm='12' md='4'>
          {jobOffers[1] ?
            <Offercard
              id={jobOffers[1].id}
              offer={jobOffers[1]}
             

            /> : <Spinner/>}
        </Col>
        <Col className={style.col} sm='12'md='4'>
          {jobOffers[2] ?
            <Offercard
              id={jobOffers[2].id}
              offer={jobOffers[2]}           

            /> :  <Spinner/>}
        </Col>
      </Row>

      <div className={style.button}>
        <Link to='/joboffers' className='btn btn-outline-success p-3'>GO TO ALL    ACTIVE   OFFERS</Link>
      </div>

    </section>
  );
};

export default FeaturedCards;
