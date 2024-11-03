import {createContext, useState, useEffect} from 'react';
import{authState} from '../dbtest.jsx';
import {dbSetup} from '../dbtest.jsx';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=>null
});

export const UserProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(()=>{
        const StateHandler =  authState((user)=>{
            user&& dbSetup(user);
            setCurrentUser(user);
        })
        StateHandler();
    }, [])

    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}