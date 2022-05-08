import { useUserContext } from '../Store/UserContext'
import { BASE_URL } from '../utils/URL'


const FetchOffer = () => {
 const { setJobOffers} = useUserContext()
  
 const fetchOffers = async () => {
  const response = await fetch(`${BASE_URL}/jobOffers`)
  const data = await response.json()
  setJobOffers(data)
}

  return {fetchOffers}
}

export default FetchOffer