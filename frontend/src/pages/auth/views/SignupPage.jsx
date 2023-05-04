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
                            <Input type='text' name='text' placeholder='email'/>
                        </div>
                        <div>
                            <label htmlFor=''>Last Name:</label>
                            <Input type='text' name='text' placeholder='email'/>
                        </div>
                    </div>
                    <label htmlFor=''>Email:</label>
                    <Input type='email' name='email' placeholder='email'/>
                    <label htmlFor=''>Phone Number:</label>
                    <Input type='number' name='number' placeholder='email'/>
                    <label htmlFor=''>Password:</label>
                    <Input type='password' name='password' placeholder='email'/>
                    <label htmlFor=''>Confirm Password:</label>
                    <Input type='password' name='confirmpassword' placeholder='email'/>
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
                    <Button btntype ='Sign Up'/>
                </form>
                <span>Have an account already?<a href='/login'>LOGIN</a></span>
            </div>
        </div>
    </div>
  )
}

export default SignupPage
