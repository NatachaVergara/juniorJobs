import axios from 'axios';
import { useEffect } from 'react'
import { useUserContext } from '../Store/UserContext';
import { BASE_URL } from '../utils/URL';

const FetchRoutes = () => {
  const { setSeniorities, setExp, setSpeciality, setSkills, setEducation, setSchedule, setRemote, setLenguage } = useUserContext();

  useEffect(() => {
    console.log('...fetching routes')
    const fetchData = async () => {
      try {
        axios.all([
          axios.get(`${BASE_URL}/Seniorities`),
          axios.get(`${BASE_URL}/education`),
          axios.get(`${BASE_URL}/experience`),
          axios.get(`${BASE_URL}/speciality`),
          axios.get(`${BASE_URL}/skills`),
          axios.get(`${BASE_URL}/schedules`),
          axios.get(`${BASE_URL}/remotes`),
          axios.get(`${BASE_URL}/language`)
        ]).then(response => {
          setSeniorities(response[0].data)
          setEducation(response[1].data)
          setExp(response[2].data)
          setSpeciality(response[3].data);
          setSkills(response[4].data);
          setSchedule(response[5].data);
          setRemote(response[6].data);
          setLenguage(response[7].data);
        })
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [setEducation, setExp, setLenguage, setRemote, setSchedule, setSeniorities, setSkills, setSpeciality])


}

export default FetchRoutes