
import axios from "axios";
import swal from "sweetalert";
import { useUserContext } from '../Store/UserContext';
import { useNavigate } from 'react-router-dom';

const URL = "http://localhost:3002/users/login";

export const usePostLogin = () => {
    //Seteo el tipo de user y lo guardo en el context para que se pueda usar en el resto del sitio cuando sea necesario
    const { setIsUser, setUserType, setUserId, setUserData } = useUserContext()
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
            swal(`Bienvenido/a ${response.data.name}`)
            resetForm()
            setIsUser(true)
            setUserType(values.userType)
            setUserId(response.data.id)
            setUserData(response.data)
            //navigate('/')

        } catch (error) {
            return swal(JSON.stringify(error.response.data))
        }
    }



    return { fetchData }


}

