import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../utils/URL";

const UserContext = createContext(null);
//Esta es la funcion que tengo que llamar en los componentes
//const { } = useUserContext()
export const useUserContext = () => {
  return useContext(UserContext);
};

//Creo una funcion para utilizar el sessionStorage y que no se pierda el logueo del user cada vez que se refresca el sitio

const getLocalUser = () => {
  let user = sessionStorage.getItem("user");

  if (user) {
    return JSON.parse(sessionStorage.getItem("user"));
  } else {
    return false;
  }
};
const getLocalUserType = () => {
  let userTypeLS = sessionStorage.getItem("userTypeLS");

  if (userTypeLS) {
    return JSON.parse(sessionStorage.getItem("userTypeLS"));
  } else {
    return null;
  }
};
const getLocalUserID = () => {
  let userIDLS = sessionStorage.getItem("userIDS");

  if (userIDLS) {
    return JSON.parse(sessionStorage.getItem("userIDS"));
  } else {
    return null;
  }
};

const getLocalUserData = () => {
  let userDataLS = sessionStorage.getItem("userData");

  if (userDataLS) {
    return JSON.parse(sessionStorage.getItem("userData"));
  } else {
    return null;
  }
};


const UserContextProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(getLocalUser());
  const [userType, setUserType] = useState(getLocalUserType());
  const [jobOffers, setJobOffers] = useState([])
  const [recruiterOffers, setRecruiterOffers] = useState([])
  const [userID, setUserId] = useState(getLocalUserID());
  const [userData, setUserData] = useState(getLocalUserData());
  const [offerData, setOfferData] = useState([])
  const [seniorities, setSeniorities] = useState([])
  const [exp, setExp] = useState([])
  const [schedule, setSchedule] = useState([])
  const [speciality, setSpeciality] = useState([])
  const [skills, setSkills] = useState([])
  const [education, setEducation] = useState([])
  const [remote, setRemote] = useState([])
  const [lenguage, setLenguage] = useState([])
  const [offerID, setOfferID] = useState([])


  //Creo un estado user dentro de mi sessionStorage
  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(isUser));
  }, [isUser]);

  //Creo un estado userType dentro de mi sessionStorage
  useEffect(() => {
    sessionStorage.setItem("userTypeLS", JSON.stringify(userType));
  }, [userType]);

  //Creo un estado userID dentro de mi sessionStorage
  useEffect(() => {
    sessionStorage.setItem("userIDS", JSON.stringify(userID));
  }, [userID]);
  //Creo un estado userData dentro de mi sessionStorage
  useEffect(() => {
    sessionStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);





  useEffect(() => {
    console.log('...loading all jobOffers')
    axios({
      url: `${BASE_URL}/jobOffers`
    }).then((response)=>{
      setJobOffers(response.data)
    }).catch((error) => {console.log(error)})
 
  }, [setJobOffers])





  return (
    <UserContext.Provider
      value={{
        isUser,
        userType,
        userID,
        userData,
        jobOffers,
        seniorities,
        exp,
        schedule,
        speciality,
        skills,
        education,
        remote,
        lenguage,
        offerData,
        offerID,
        recruiterOffers,
        setIsUser,
        setUserType,
        setUserId,
        setUserData,
        setJobOffers,
        setSeniorities,
        setExp,
        setSchedule,
        setSpeciality,
        setSkills,
        setEducation,
        setLenguage,
        setRemote,
        setOfferData,
        setOfferID,
        setRecruiterOffers,
      
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
