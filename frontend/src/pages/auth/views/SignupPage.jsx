import React from 'react'
import Button from './components/Button'
import Input from './components/Input'
import logo from './../../../assets/images/ix-logo.png'
const SignupPage = () => {
  return (
    <div className='signup-wrap'>
        <div className='a'>
            <img src={logo} alt="" srcset="" />
        </div>
        <div className='b'>
            <div className='form-wrap'>
                <h2>Create an account</h2>
                <form>
                    <div className='name-div'>
                        <div>
                            <label htmlFor=''>First Name:</label>
                            <Input />
                        </div>
                        <div>
                            <label htmlFor=''>Last Name:</label>
                            <Input />
                        </div>
                    </div>
                    <label htmlFor=''>Email:</label>
                    <Input />
                    <label htmlFor=''>Phone Number:</label>
                    <Input />
                    <label htmlFor=''>My Name:</label>
                    <Input />
                    <label htmlFor=''>Password:</label>
                    <Input />
                    <label htmlFor=''>Confirm Password:</label>
                    <Input />
                    <Button />
                </form>
                <span>Have an account already?<a href='/login'>LOGIN</a></span>
            </div>
        </div>
    </div>
  )
}

export default SignupPage
