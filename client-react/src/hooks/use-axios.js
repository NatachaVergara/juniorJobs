import axios from "axios";
import swal from "sweetalert";
import { useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
axios.defaults.baseURL = "http://localhost:3002";

export const useAxios = () => {
  const [response, setResponse] = useState(undefined);
  let navigate = useNavigate()
  const fetchData = useCallback((params) => {
    axios
      .request(params)
      .then((res) => {
        console.log(res, "res on use-axios");
        setResponse(res.data);
        navigate('/login')

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
  }, []);

  return { response, fetchData };
};
