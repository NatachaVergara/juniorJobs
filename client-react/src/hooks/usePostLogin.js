
import axios from "axios";
import swal from "sweetalert";
import { useUserContext } from '../Store/UserContext';
import { useNavigate } from 'react-router-dom';

const URL = "http://localhost:3002/users/login";

export const usePostLogin = () => {
    const { setIsUser, setUsertype } = useUserContext()
    let navigate = useNavigate()


    const fetchData = async (values, resetForm) => {

        try {
            const response = await axios.post(URL,
                {
                    email: values.email,
                    password: values.password,
                    userType: values.userType
                },
                { header: { 'Content-type': 'application/x-www-form-urlencoded' } }
            )

            console.log(response)
            swal(response.data)
            resetForm()
            //Aca podriamos usar el userType en vez de es user true-false
            //setIsUser(value.userType)
            setIsUser(true)
            setUsertype(values.userType)
            navigate('/')

        } catch (error) {
            return swal(JSON.stringify(error.response.data.message));
            //alert(JSON.stringify(error.response.data.message))
        }


    }



    return { fetchData }


}

