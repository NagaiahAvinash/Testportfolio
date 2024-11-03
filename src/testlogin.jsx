import {useState} from 'react';
import {loginWithEmail, GoogleSign } from './dbtest.jsx';
import './App.scss';



const LoginDefaults={
    email: '',
    password: ''
}



const LoginForm = ()=>{

    

    const [formData, setFormData]= useState(LoginDefaults);
    const {email, password} = formData;

    

    const changeHandler = (event)=>{
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
    }

    const resetForm = ()=>{
        setFormData(LoginDefaults);
    }

   
    const submitForm = async (event) =>{
        event.preventDefault();
        
        try{
            await loginWithEmail(email, password);
            alert('logged in successfully');
            resetForm();

        }catch(error){
            console.log(error.message)
        }
    }

    const Googledb =async () =>{
        await GoogleSign();
        console.log('account added');
        // await dbSetup(user);
        alert('account added');

    } 

    return(
        <div className='testlogin'>
            <h1>Login Form</h1>
            <form onSubmit={submitForm}>
                <label>Email</label>
                <input type='email' required name='email' onChange={changeHandler} value={email} autoComplete='off' />
                <label>Password</label>
                <input type='password' required name='password' onChange={changeHandler} value={password} autoComplete='off'/>
                <button type='submit'>Login</button>
            </form>
            <button onClick = {Googledb}>SignIn with google</button>
        </div>
    );
}

export default LoginForm;