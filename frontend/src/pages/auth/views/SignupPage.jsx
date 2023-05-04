import React, { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import logo from './../../../assets/images/ix-logo.png'

const SignupPage = () => {
    const [category,setCategory] = useState(null)
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
                    <label htmlFor=''>Password:</label>
                    <Input />
                    <label htmlFor=''>Confirm Password:</label>
                    <Input />
                    <label htmlFor=''>Category</label>
                    <div>
                        <select id='select' onChange={(event) => setCategory(event.target.value)}>
                            <option>choose one</option>
                            <option value="A">IT STUDENT</option>
                            <option value="B">REGULAR STUDENT</option>
                        </select>
                    </div>
                    {
                        category&& category === "A"?<Input placeholder='Enter institution name'/>:null
                    }
                    <Button />
                </form>
                <span>Have an account already?<a href='/login'>LOGIN</a></span>
            </div>
        </div>
    </div>
  )
}

export default SignupPage
