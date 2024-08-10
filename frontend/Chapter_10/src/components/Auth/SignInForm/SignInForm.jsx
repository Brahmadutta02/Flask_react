import React from 'react';
import './SignInForm.css'

const SignInForm = () => {

  return (
<>
    <div className="signInContainer">
    <form>
      <div className="signInForm">    
        <label htmlFor="email">Email</label>
        <input   type="email"  />
       <label htmlFor="password">Password</label>
        <input  type="password" />
            <button>LogIn</button>
      </div>
    </form>
    </div>
</>

  );
};
export default SignInForm;