import React, { useEffect, useState } from 'react'
import { Col } from 'reactstrap';
import { useUserContext } from '../../Store/UserContext';

import Offercard from '../OffersCard/Offercard';
import Spinner from '../Spinner/Spinner';
import style from './JobOffersContainer.module.scss'

const JobOffersContainer = () => {
    const { jobOffers } = useUserContext();

    const [offers, setOffers] = useState(jobOffers)
    
    
    const searchAll = () => {
        setOffers(jobOffers)
    }

    const searchSchedule = (value) => {        
            let schedule = jobOffers.filter(offers => offers.id_Schedule === Number(value))
            setOffers(schedule)
            return   
    }

    const searchSeniority = (value) => {       
            let seniority = jobOffers.filter(offers => offers.id_Seniority === Number(value))
            setOffers(seniority)
            return
    }




  

    return (
        <div className={style.container}>
            <h1 className='d-flex justify-content-center align-items-center m-3'> JOB OFFERS ACTIVE </h1>
            <div className='d-flex justify-content-start align-items-center'>
                <span>Search by: </span>
                <button className='m-2 btn' onClick={searchAll}>All</button>
                <button className='m-2 btn' onClick={() => searchSchedule(1)}>Full-time</button>
                <button className='m-2 btn' onClick={() => searchSchedule(2)}>Part-Time</button>
                <button className='m-2 btn' onClick={() => searchSeniority(1)}  >Junior</button>
                <button className='m-2 btn' onClick={() => searchSeniority(2)}>Trainee</button>
            </div>

            <Col className={style.col} sm='12' md='4'>
                {!jobOffers ?
                    <Spinner /> :
                    <>
                    {offers.map((offer, index) => (
                            <Offercard
                                key={index}
                                offer={offer}
                                id={offer.id}                                
                            />
                        ))}
                    </>
                }


            </Col>


        </div>
    )
}

export default JobOffersContainer