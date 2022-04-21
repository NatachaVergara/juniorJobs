import { useUserContext } from '../Store/UserContext';
import { useAxios } from "../hooks/use-axios";
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";

export const useCRUD = () => {
    const { userID, userType, setUserType, setIsUser } = useUserContext();
    const { fetchData, response } = useAxios();
    let params = {}
    let navigate = useNavigate()
    function onCreateSubmit(values) {
        console.log("on register values:", values);      
      
        if (userType === "Recruiter") {     
            params.method = "post";
            params.url = "/recruiters";
            params.header = {'Content-type': 'application/x-www-form-urlencoded'};
            params.data =  values
        } else {      
            params.method = "post";
            params.url = "/talents";
            params.header = {'Content-type': 'application/x-www-form-urlencoded'};
            params.data =  values
        }
        fetchData(params);
      }



    function onUpdateSubmit(values) {
        console.log("on updata values:", values);   
        if (userType === "Talent") {
            params.method = 'put'
            params.url = `/talents/${userID}`;
            params.header = { 'Content-type': 'application/x-www-form-urlencoded' };
            params.data = values

        } else if (userType === "Recruiter") {
            params.method = 'put'
            params.url = `/recruiters/${userID}`;
            params.header = { 'Content-type': 'application/x-www-form-urlencoded' };
            params.data = values
        }

        fetchData(params);
    }


    function onLoginSubmit(values){
        console.log("on login values:", values);   
        params.method = 'post'
        params.url = '/users/login'
        params.header = { 'Content-type': 'application/x-www-form-urlencoded' };
        params.data = values
        fetchData(params);
       
        // setUserType(values.userType)
        // setIsUser(true)
        // navigate('/')
        // swal(`Bienvenido/a`)
    }


    return {onLoginSubmit, onCreateSubmit,onUpdateSubmit}
    
}

