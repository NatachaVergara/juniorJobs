import axios from 'axios'
import { useUserContext } from '../Store/UserContext'
import { BASE_URL } from '../utils/URL'

//Only working in 
const FetchOffer = () => {
  const { setJobOffers } = useUserContext()

  const fetchOffers = async () => {
    const response = await axios.get(`${BASE_URL}/jobOffers`)
    setJobOffers(response.data)
  }

  return fetchOffers
}

export default FetchOffer