import { Row } from "reactstrap";
import { useUserContext } from '../../Store/UserContext'
import FeaturedCard from "./FeaturedCard";

const FeaturedCards = () => {
   const { jobOffers } = useUserContext();
  

   
  return (
    <>
      <h3>Active Job posting</h3>
      <Row>
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
      </Row>
   
    </>
  );
};

export default FeaturedCards;
