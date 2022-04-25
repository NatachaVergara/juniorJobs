
import { useUserContext } from '../Store/UserContext'

function useFetch() {
    const { setJobOffers } = useUserContext()

    console.log()
    const fetchOffers = async (jobOffers, id) => {
        const response = await fetch(`http://localhost:3002/${jobOffers}`)
        const data = await response.json()
       // console.log(data)
        setJobOffers(data)
      }

    


      return {fetchOffers}




}

export default useFetch