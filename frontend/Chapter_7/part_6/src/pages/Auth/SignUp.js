import React,{useRef} from 'react';

const SignUp = () =>{
    const name = useRef()
    const email = useRef()
    const password = useRef()

    const onSUbmitHandler = (e) =>{
        e.preventDefalut();
        console.log("Name value: " + name.current.value)
        console.log("Email value: " + email.current.value)
        console.log("Password value: " + password.current.value);
    }

    return(
        <div className='signUpContainer'>
            <form onSubmit={onSUbmitHandler}>
            <h2>Create an account</h2>
            <div className='signUpForm'>
            <label htmlFor= "name">Name</label>
            <input id='name' type='text' name='name' ref={name} />

            <label htmlFor="email">Email</label>
            <input id='name' type='email' name='email' ref={email}/>

            <label htmlFor="password">Password</label>
            <input id='name' type='password' name='password' ref={password}/>

            <button>Register</button>
            </div>
            </form>
        </div>
    )
}

export default SignUp;