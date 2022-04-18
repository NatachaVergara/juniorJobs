import axios from "axios";
import swal from "sweetalert";
import { useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from "../Store/UserContext";
axios.defaults.baseURL = "http://localhost:3002";

export const useAxios = () => {
  const [response, setResponse] = useState(undefined);
  const { userType, isUser, setUserData} = useUserContext()
  let navigate = useNavigate()
  const fetchData = useCallback((params) => {
    axios
      .request(params)
      .then((res) => {
       if (userType === 'Talent' && isUser) {
          swal(`Your profile has been updated`);
          
        } else if (userType === 'Recruiter' && isUser) {
          console.log(res.data)
          swal(`Your profile has been updated`);  
          navigate('/profile')
        } else {
          swal(`Welcome, you can now login to your account`)
          console.log(res.data)
          setResponse(res.data);
          navigate('/login')
        }

      })


      .catch(function (error) {
        console.log(error.response, error.message);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          return swal(error.response.data.message, "from database", "warning");
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          return swal(error.message, "", "warning");
        } else {
          // Something happened in setting up the request that triggered an Error
          return swal("Last Error", error.message);
        }
      });
  }, [navigate]);

  return { response, fetchData };
};
