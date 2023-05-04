import React from 'react'
import Button from './components/Button'
import Input from './components/Input'
import logo from './../../../assets/images/ix-logo.png'

const LoginPage = () => {
  return (
    <div className='signup-wrap'>
    <div className='b'>
    <div className='form-wrap' id='login'>
            <h2>Login</h2>
            <form id='form'>
                <label htmlFor=''>Email:</label>
                <Input />
                <label htmlFor=''>Password:</label>
                <Input />
                <Button />
            </form>
            <span>forgot password? <a href='/'>reset</a></span>
            <span>Don't have an account?<a href='/'>SIGN UP</a></span>
        </div>
    </div>
    <div className='a'>
        <img src={logo} alt="" srcset="" />  
    </div>
</div>
  )
}

export default LoginPage
