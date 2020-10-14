import React, { useState } from 'react';
import {ForceChange} from './ForcePasswordChange';
import { Login } from './Login';

export function Authenticator(){
    const [user, setUser] = useState();
    const [page, setPage] = useState('LOGIN');

    const setUsername = (username) => {
        setUser(username)
    }
    const changePage = (newPage) => {
        setPage(newPage);
    }

    switch(page) {
        default : 
            case 'LOGIN': 
                return( <Login changePage={changePage} setUsername={setUsername} /> );
            case 'FORCE_PW_CHANGE':
                return( <ForceChange changePage={changePage} user={user} /> );       
    }    
}

export default Authenticator;