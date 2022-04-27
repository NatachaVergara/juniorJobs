import { useEffect } from "react";
import { Row } from "reactstrap";
import useFetch from "../../Fetch/fetch";
import { useUserContext } from '../../Store/UserContext'
import { BASE_URL } from "../../utils/URL";
import FeaturedCard from "./FeaturedCard";

const FeaturedCards = () => {
 
  const { jobOffers, setJobOffers } = useUserContext();
  //const {fetchOffers} = useFetch()


  useEffect(() => {
    const fetchOffers = async () => {
      const response = await fetch(`${BASE_URL}/jobOffers`)
      const data = await response.json()
      console.log(data)
      setJobOffers(data)
    }
    fetchOffers()
  },[setJobOffers])



console.log(jobOffers)

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
