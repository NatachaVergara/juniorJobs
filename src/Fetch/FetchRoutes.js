import { useEffect } from 'react'
import { useUserContext } from '../Store/UserContext';
import { BASE_URL } from '../utils/URL';

const FetchRoutes = () => {
    const { setSeniorities, setExp, setSpeciality, setSkills, setEducation, setSchedule, setRemote } = useUserContext();

useEffect(() =>{

    const fetchDataSeniorities = async () => {
        const response = await fetch(`${BASE_URL}/Seniorities`);
        const data = await response.json();
        setSeniorities(data);
      };
      fetchDataSeniorities();
      const fetchDataEducation = async () => {
        const response = await fetch(`${BASE_URL}/education`);
        const data = await response.json();
        setEducation(data);
      };
      fetchDataEducation();
      const fetchDataExperience = async () => {
        const response = await fetch(`${BASE_URL}/experience`);
        const data = await response.json();
        setExp(data);
      };
      fetchDataExperience();
  
      const fetchDatasetSpeciality = async () => {
        const response = await fetch(`${BASE_URL}/speciality`);
        const data = await response.json();
        setSpeciality(data);
      };
      fetchDatasetSpeciality();
  
      const fetchDataSkills = async () => {
        const response = await fetch(`${BASE_URL}/skills`);
        const data = await response.json();
        setSkills(data);
      };
      fetchDataSkills();

      const fetchSchedule = async () => {
        const response = await fetch(`${BASE_URL}/schedules`);
        const data = await response.json();
        setSchedule(data);
      };
      fetchSchedule();

      const fetchRemote = async () => {
        const response = await fetch(`${BASE_URL}/remotes`);
        const data = await response.json();
        setRemote(data);
      };
      fetchRemote();


      
}, [setEducation, setExp, setRemote, setSchedule, setSeniorities, setSkills, setSpeciality])


}

export default FetchRoutes