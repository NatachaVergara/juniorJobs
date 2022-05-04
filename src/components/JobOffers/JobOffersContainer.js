import React from 'react'
import { Col } from 'reactstrap';
import { useUserContext } from '../../Store/UserContext';
import FeaturedCard from '../Home/FeaturedCard'
import style from './JobOffersContainer.module.scss'

const JobOffersContainer = () => {
    const { jobOffers } = useUserContext();


    return (
        <div className={style.container}>
            <h1>ALL JOB OFFERS</h1>

            <Col className={style.col} sm='12' md='4'>
               
                    {!jobOffers ? 
                        <h3>Loading.....</h3> :
                        <>
                            {jobOffers.map((offer, index) => (
                                <FeaturedCard
                                    key={index}
                                    offer={offer}
                                    id={offer.id}
                                    experience={offer.id_Experience}
                                    seniority={offer.id_Seniority}
                                    spe={offer.id_Speciality}
                                    sch={offer.id_Schedule}
                                />
                            ))}

                        </>

                    }
              

            </Col>


        </div>
    )
}

export default JobOffersContainer