import * as Yup from "yup";
import { emailRegex, urlRegex } from "./regex";
import { errorAlerts} from './errorsAlert'
export const validationSchema = (name, lastName, password , passwordConfirmation ,email , url , company ) =>{

    
        name: Yup.string()
          .min(2, errorAlerts[0].nameAlert)
          .required(errorAlerts[4].requiredAlert);
        lastName: Yup.string()
          .min(2, errorAlerts[0].nameAlert)
          .required(errorAlerts[4].requiredAlert);
        password: Yup.string()
          .min(4, errorAlerts[1].passwordAlert)
          .required(errorAlerts[4].requiredAlert);
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
           .required(errorAlerts[4].requiredAlert);
    
        email: Yup.string()
          .email(errorAlerts[2].emailAlert)
          .matches(emailRegex)
          .max(255)
          .required(errorAlerts[4].requiredAlert);
        url: Yup.string()
          .matches(urlRegex, errorAlerts[3].urlAlert)
          .required(errorAlerts[4].requiredAlert);
        company: Yup.string()
          .max(350, errorAlerts[5].textDescription)
          .required(errorAlerts[4].requiredAlert)
        // acceptedTerms: Yup.boolean()
        //   .required(errorAlerts[4].requiredAlert)
        //   .oneOf([true], errorAlerts[6].acceptedTerms)
      
    



}
