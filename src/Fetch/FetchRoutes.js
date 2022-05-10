import axios from 'axios';
import { useEffect } from 'react'
import { useUserContext } from '../Store/UserContext';
import { BASE_URL } from '../utils/URL';

const FetchRoutes = () => {
  const { setSeniorities, setExp, setSpeciality, setSkills, setEducation, setSchedule, setRemote, setLenguage } = useUserContext();

  useEffect(() => {

    const fetchDataSeniorities = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/Seniorities`);
        setSeniorities(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchDataSeniorities();


    const fetchDataEducation = async () => {

      try {
        const response = await  axios.get(`${BASE_URL}/education`);
        setEducation(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchDataEducation();


    const fetchDataExperience = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/experience`);
        setExp(response.data);
      } catch (error) {
        console.log(error)
      }

    }
    fetchDataExperience();

    const fetchDatasetSpeciality = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/speciality`);
        setSpeciality(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchDatasetSpeciality();


    const fetchDataSkills = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/skills`);
        setSkills(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchDataSkills();


    const fetchSchedule = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/schedules`);
        setSchedule(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchSchedule();

    const fetchRemote = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/remotes`);
        setRemote(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchRemote();

    const fetchLenguage = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/language`);
        setLenguage(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchLenguage();
  }, [setEducation, setExp, setLenguage, setRemote, setSchedule, setSeniorities, setSkills, setSpeciality])


}

export default FetchRoutes