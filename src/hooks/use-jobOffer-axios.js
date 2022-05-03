import { useState, useCallback } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { BASE_URL } from '../utils/URL'
import {useNavigate} from 'react-router-dom'
axios.defaults.baseURL = BASE_URL


export const useAxiosJobOffers = () => {
    const [response, setResponse] = useState()
    //let navigate = useNavigate()
    const fetchDataJO = useCallback((params) => {
        axios
            .request(params)
            .then((res) => {
                console.log('Params', params)
                console.log(res)
                console.log(res.data)
                console.log(res.data.message)
               // setResponse(res.data)    

              //  console.log(response)    

                

            })
            .catch(function (error) {
                if (error) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.error(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                   return swal(JSON.stringify(error.response.data.message));
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request)
                    //return swal(JSON.stringify(error.statusText));
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log(error.data)
                    return swal("Last Error", JSON.stringify(error.data));
                }
            });
    }, [])


    return { response, fetchDataJO }
}