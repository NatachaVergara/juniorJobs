import React from 'react'
import { Button } from 'reactstrap'
import { useUserContext } from '../../Store/UserContext'

const RegisterBtn = ({isSubmitting , isValid }) => {
  const {isUser} = useUserContext()

  return (
    <div className='d-flex justify-content-around align-items-center mt-3 mb-3'>
    <Button color="primary" type='submit' disabled={isSubmitting || !isValid}>
      Submit
    </Button>
    {!isUser ?  <Button color="danger" type='submit' disabled={isSubmitting || !isValid}>
      Remove this profile
    </Button>: null}
   
  </div>
  )
}

export default RegisterBtn