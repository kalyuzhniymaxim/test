import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../components/SignUp'
function RegisterPage() {
  return (
    <div>
        <h1>Register</h1>
        <SignUp />
        <p>
            already have account? <Link to='/login'>Sign in</Link>
        </p>
    </div>
  )
}

export default RegisterPage