import React, { useState } from 'react'
import "./css/login.css"
import SignUp from './SignUp';

function Login() {

   const [signIn,SetSignIn] = useState(false);

   const ShowSignUp= (e)=>{
      e.preventDefault();
      SetSignIn(true);
   }
  return (
   <>
    <div className="login">
         <div className='login_header'>
            <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="" className='login_logo'/>
             
             <button className="login_button">
                Sign In
             </button>
         </div>

         <div className="login_body">

          {
            signIn ? (<SignUp/>) : (
                <>
                <h1>Unlimited films,Tv programs and more.</h1>
                <h2>Watch anywhere,cancel at any time.</h2>
                <h3>ready to watch , just signup and create account.</h3>

              <form className='login_form' onSubmit={ShowSignUp}>
                <input type="text" placeholder='Email Address'/>
                <button >Get Started</button>
              </form>
         
                </>
            )
          }
          </div>
         <div className='login_gradient'>

         </div>
    </div>
   </>
  )
}

export default Login