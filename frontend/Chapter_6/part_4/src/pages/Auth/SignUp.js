import React from 'react';

const SignUp = () =>{
    return (
        <div className='signUpContainer'>
            <form>
                <h2>Create an account</h2>
                <div className='signUpForm'>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text' name='name'/>

                    <label htmlFor='email'>Email Address</label>
                    <input id='email' type='password' name='password'/>

                    <button>Register</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;