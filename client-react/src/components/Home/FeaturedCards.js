import { useEffect } from "react";
import { Row } from "reactstrap";
import useFetch from "../../Fetch/fetch";
import { useUserContext } from '../../Store/UserContext'
import FeaturedCard from "./FeaturedCard";

const FeaturedCards = () => {
 
  const { userID, jobOffers } = useUserContext();
  const {fetchOffers} = useFetch()

  useEffect(() => {
    fetchOffers('jobOffers')
  }, [userID])




  return (
    <>
      <h3>Active Job posting</h3>
      <Row>
        {jobOffers.map((offer, index) => (
           <FeaturedCard color="info"
            key={index} 
            offer={offer}
            id={offer.id}
            experience={offer.id_Experience}
            seniority={offer.id_Seniority}
            spe={offer.id_Speciality}
            sch={offer.id_Schedule}
            
            
            />
          ))}
      </Row>
   
    </>
  );
};

export default FeaturedCards;
