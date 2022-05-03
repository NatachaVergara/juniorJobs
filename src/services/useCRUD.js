import { useUserContext } from '../Store/UserContext';
import { useAxios } from "../hooks/use-axios";
import { useAxiosJobOffers } from '../hooks/use-jobOffer-axios';


export const useCRUD = () => {
    const { userID, userType } = useUserContext();
    const { fetchData } = useAxios();
    const { fetchDataJO } = useAxiosJobOffers();
    let params = {}
    
    function onCreateSubmit(values) {
        console.log("on register values:", values);

        if (userType === "Recruiter") {
            params.method = "post";
            params.url = "/recruiters";
            params.header = { 'Content-type': 'application/x-www-form-urlencoded' };
            params.data = values
        } else {
            params.method = "post";
            params.url = "/talents";
            params.header = { 'Content-type': 'application/x-www-form-urlencoded' };
            params.data = values
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


    function onLoginSubmit(values) {
        console.log("on login values:", values);
        params.method = 'post'
        params.url = '/users/login'
        params.header = { 'Content-type': 'application/x-www-form-urlencoded' };
        params.data = values
        fetchData(params);

    }


    function onDeleteSubmit() {
        if (userType === "Recruiter") {
            params.method = "delete";
            params.url = `/recruiters/${userID}`;
            params.header = { 'Content-type': 'application/x-www-form-urlencoded' };


        } else {
            params.method = "delete";
            params.url = `/talents/${userID}`;
            params.header = { 'Content-type': 'application/x-www-form-urlencoded' };

        }
        fetchData(params);
    }



    function onPostJobOffer(values) {
        params.method = 'post'
        params.url = '/jobOffers'
        params.header = { 'Content-type': 'application/x-www-form-urlencoded' };
        params.data = values
        
        fetchDataJO(params)

    }




    return { onLoginSubmit, onCreateSubmit, onDeleteSubmit, onUpdateSubmit, onPostJobOffer }

}

