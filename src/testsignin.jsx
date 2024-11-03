import {useState} from 'react';
import {signInWithEmail} from './dbtest.jsx';
import {dbSetup} from './dbtest.jsx';
import './App.scss';


const formDetails = {
    displayName: '',
    email: '',
    password: '',
    confirm_password: ''
}


const TestSignIn = () =>{

    

    const [formData, setFormData] = useState(formDetails);
    const {displayName, email, password, confirm_password}= formData;
    

    const ChangeHandler = (event)=>{
        const {name, value} = event.target;
        setFormData({...formData, [name]:value}); 
    }

    const resetForm = () =>{
        setFormData(formDetails);
    }


    const formSubmittion = async (event) =>{
        event.preventDefault();
        
        try{
            const {user} = await signInWithEmail(email, password);
           await dbSetup(user, {displayName});
            alert('account created successfully');
            resetForm();
        }catch(error){
            console.log(error.message);
        }
    }

    return(
        <div className='testsignin'>
            <h1>SignUp With Details</h1>
            <form onSubmit={formSubmittion}>
                <label>Name</label>
                <input required type='text' name='displayName' onChange={ChangeHandler} value={displayName} />
                <label>Email</label>
                <input required type='email' name='email' onChange={ChangeHandler} value={email} />
                <label>Password</label>
                <input required type='password' name='password' onChange={ChangeHandler} value={password} />
                <label>Confirm Password</label>
                <input required type='password' name='confirm_password' onChange={ChangeHandler} value={confirm_password} />
                <button type='submit' > Submit</button>
            </form>
        </div>
    );
}
export default TestSignIn;