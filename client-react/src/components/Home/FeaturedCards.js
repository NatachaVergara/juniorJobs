import { useEffect, useState } from "react";
import { Row } from "reactstrap";
import { useUserContext } from '../../Store/UserContext'
import FeaturedCard from "./FeaturedCard";

const FeaturedCards = () => {

  const [jobOffers, setJobOffers] = useState([])
  const [offer, setOffer] = useState([])
  const { userID, isUser } = useUserContext();


  useEffect(() => {
    const fetchOffers = async () => {
      const response = await fetch(`http://localhost:3002/jobOffers`)
      const data = await response.json()
      console.log(data)
      setJobOffers(data)
    }
    fetchOffers()

  }, [userID])



  return (
    <>
      <h3>Active Job posting</h3>
      <Row>

        {jobOffers.map((offer, index) => (
           <FeaturedCard color="info" key={index} offer={offer} />
          ))}
      </Row>
      {/* <Row>
        <FeaturedCard />

        <FeaturedCard color="info" />
      </Row>{" "}
      <Row>
        <FeaturedCard color="info" />

        <FeaturedCard />
      </Row>{" "}
      <Row>
        <FeaturedCard />

        <FeaturedCard color="info" />
      </Row> */}
    </>
  );
};

export default FeaturedCards;
