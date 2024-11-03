import TestSignIn from './testsignin.jsx';
import LoginForm from './testlogin.jsx';
import './App.scss';


const Chumma = ()=>{

   
    
    return(
        <div className='authentication'>
            <TestSignIn className='sign' />
            <LoginForm className='log' />
        </div>
    );
}

export default Chumma;