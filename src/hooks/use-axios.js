import axios from "axios";
import swal from "sweetalert";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Store/UserContext";
import { BASE_URL } from "../utils/URL";

axios.defaults.baseURL = BASE_URL;

export const useAxios = () => {
  const [response, setResponse] = useState();
  const { setIsUser, setUserType, setUserId, setUserData } = useUserContext()
  let navigate = useNavigate()



  const fetchData = useCallback((params) => {
    axios
      .request(params)
      .then((res) => {
        //Delete profile
        if (params.method === 'delete') {
          navigate('/login')
          setIsUser(false)
          setUserType(null)
          setUserId(null)
          setUserData(null)
        }



        //Update users
        if (params.method === 'put') {
          swal(res.data.message);
        }


        //Create users
        if (params.data.register) {
          // console.log(res.data)
          setResponse(res.data);
          swal(`Welcome, you can now login to your account`)
          navigate('/login')
        }

        //Login users
        if (params.data.login) {
          // console.log(res.data)
          swal(`Welcome ${res.data.name}`)
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

  }, [setUserData, setUserId, navigate, setIsUser, setUserType]);

  return { response, fetchData };
};
