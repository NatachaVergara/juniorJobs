import React from 'react'
import { Button } from 'reactstrap'

const RegisterBtn = ({isSubmitting , isValid }) => {
  return (
    <div className='d-flex justify-content-around align-items-center mt-3'>
    <Button color="primary" type='submit' disabled={isSubmitting || !isValid}>
      Submit
    </Button>
    <Button color="danger" type='submit' disabled={isSubmitting || !isValid}>
      Remove this profile
    </Button>
  </div>
  )
}

export default RegisterBtn