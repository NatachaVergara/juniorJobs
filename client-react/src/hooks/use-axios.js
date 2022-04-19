import axios from "axios";
import swal from "sweetalert";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Store/UserContext";

axios.defaults.baseURL = "http://localhost:3002";

export const useAxios = () => {
  const [response, setResponse] = useState();
  const { userType, isUser, setIsUser, setUserType, setUserId,userData, setUserData } = useUserContext()
  let navigate = useNavigate()
  const fetchData = useCallback((params) => {
    axios
      .request(params)
      .then((res) => {
        // console.log(res.data)
        // setResponse(res.data)
        // setUserData(res.data)
        // console.log(response)
        // console.log(userData)


        // setUserId(res.id)
        // setUserData(res.data)



        // Metodo update Talent
        if (userType === 'Talent' && isUser) {
          console.log(res.data)
          swal(`Your profile has been updated`);
        //Metodo update Recruiter
        } else if (userType === 'Recruiter' && isUser) {
          console.log(res.data)
          swal(`Your profile has been updated`);
        }

       // Metodo Create
        if(params.data.register) {
          console.log(res.data)
          setResponse(res.data);
          swal(`Welcome, you can now login to your account`)          
          navigate('/login')
        }

       // Metodo Login
        if (params.data.login) {       
          console.log(res.data)
          swal(`Bienvenido/a ${res.data.name}`)
          setIsUser(true)
          setUserType(params.data.userType)
          setUserId(res.data.id)
          setUserData(res.data)
          navigate('/')
        }




      })


      .catch(function (error) {
        if (error) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          return swal(JSON.stringify(error.response.data));
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          return swal(JSON.stringify(error.statusText));
        } else {
          // Something happened in setting up the request that triggered an Error
          return swal("Last Error", JSON.stringify(error.data));
        }
      });

  }, [setUserData, response, userData, setUserId, userType, isUser, navigate, setIsUser, setUserType]);

  return { response, fetchData };
};
