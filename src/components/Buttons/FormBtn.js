import React from 'react'
import { Button } from 'reactstrap'
import { useUserContext } from '../../Store/UserContext'
import Swal from "sweetalert";
import { useCRUD } from '../../services/useCRUD';

const FormBtn = () => {
  const {isUser} = useUserContext()
  const {onDeleteSubmit} = useCRUD()
 

  const onRemove = () => {
    Swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      buttons:{
        cancel: {
          text: "Cancel",
          value: false,
          visible: true,
          className: "",
          closeModal: true,
          
        },
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "bg-danger",
          closeModal: true
        }
        
      }  
    }).then((result) => {
      if (result) {
        onDeleteSubmit()               
      }
    })


    
  }
 

  return (
    <div className='d-flex justify-content-around align-items-center mt-3 mb-3'>
    <Button 
     className='btn btn-outline-success'
     type='submit'
     >
      Submit
    </Button>
    {isUser &&  
    <Button className='btn btn-outline-danger' type='reset' onClick={onRemove} >
      Remove this profile
    </Button> }
   
  </div>
  )
}

export default FormBtn