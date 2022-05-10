import React from 'react'
import { Button } from 'reactstrap'
import { useUserContext } from '../../Store/UserContext'
import Swal from "sweetalert";
import axios from 'axios';
import { BASE_URL } from '../../utils/URL';
import { useNavigate } from 'react-router-dom';

const FormBtn = () => {
  const { isUser, setUserType, userType, userID, setIsUser, setUserId, setUserData } = useUserContext()
  let navigate = useNavigate()

  const onDelete = async () => {
    try {
      if (userType === 'Recruiter') {
        let response = await axios({
          method: 'delete',
          url: `${BASE_URL}/recruiters/${userID}`

        })
        console.log(response)
        navigate('/login')
        setIsUser(false)
        setUserType(null)
        setUserId(null)
        setUserData(null)
      } else {
        let response = await axios({
          method: 'delete',
          url: `${BASE_URL}/talents/${userID}`

        })
        console.log(response)
        navigate('/login')
        setIsUser(false)
        setUserType(null)
        setUserId(null)
        setUserData(null)
      }

    } catch (error) {
      console.log(error.response)

    }

  }


  const onRemove = () => {
    Swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      buttons: {
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
        onDelete()
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
        </Button>}

    </div>
  )
}

export default FormBtn