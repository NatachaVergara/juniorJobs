import { useUserContext } from '../Store/UserContext'
import { BASE_URL } from '../utils/URL'

function useFetch() {
  const { setJobOffers, setOfferID } = useUserContext()
    

    
   
    const fetchJobbOfferRecuiter = async (id) =>{
      const response = await fetch(`${BASE_URL}/jobOffers?recruiter=${id}`);
      const data = await response.json()      
      setOfferID(data)

    }




      return {fetchJobbOfferRecuiter }




}

export default useFetch