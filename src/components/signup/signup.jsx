import React from 'react'
import logo from '../../Assets/olx login logo.svg'
import './signup.css';
import '../../components/loginpage/login.css'
import { Link } from 'react-router-dom';


function Signup() {
  return (
    <>
    <div className='sign_up_parent'>
    <div className="logo_123">
          <div className="logo">
          <Link to="/"><img src={logo} alt="olx-logo" /></Link>
          </div>
          <div className="class_3211">
          Sign up into your OLX account
          </div>
        </div>
    <div className='call_b'>
        <div className='sign_up_child_one'>
           <div className='pre-child-one'>
            <div className='aa_222'>
                <div className='fnameLable'>
                <label htmlFor='firstName'>First Name</label>
                </div>
        <div className='fNametext'>
            <div className='f2'>
            <input type='text' id='firstName' placeholder='Please Enter your first name.' />
            </div>
            </div>
           </div>
        </div>
            <div className='pre-child-two'>
            <div className='aa_222'>
                <div className='lNameLable'>
                <label htmlFor='lastName'>Last Name</label>                
                </div>
            <div className='lNametext'>
                <input type='text' id='lNameLable' placeholder='Place enter your last name' />
            </div>
            </div>
            </div>
        </div>
        <div className='sign_up_child_two'>
            <div className='pre-child-one'>

            <div className="aa_222">
                <div className='emailLable'>
                <label htmlFor='email'> E-mail Address</label>
                </div>
            <div className='emailtext'>
                <input type='email' id='email' placeholder='Please enter your E-mail' />
            </div>
            </div>
            </div>
            <div className='pre-child-two'>
            <div className='aa_222'>
                <div className='phoneLable'>
                <label htmlFor='phone'>Phone</label>                
                </div>
            <div className='phonetext'>
                <input type='number' id='phone' placeholder='Please enter your phone number' />
            </div>
            </div>
            </div>

        </div>
        <div className='sign_up_child_three'>
            <div className='pre-child-two'>

            <div className='aa_222'>
                <div className="lablepassword">
                <label htmlFor='password'>Password</label>
                    </div>   
            <div className='passwordtext'>
                <input type='password' id='password' placeholder='Please enter your password.' />
            </div>
            </div>
            </div>
            <div className='button'>
                Sign UP
            </div>
            <div className='log_acc'>
                Already have an account? <Link to="/login">Log in</Link>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Signup