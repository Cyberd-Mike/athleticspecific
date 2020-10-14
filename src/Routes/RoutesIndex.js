import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import { Admin } from '../Pages/Admin';
import { Home } from '../Pages/Home';
// import { Updates } from '../Pages/Updates/Updates'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

export function Routes(){
    const [ authState, setAuthState ] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    });

    const PrivateRoute = ({ as: Component, ...rest }) => {
        return authState === AuthState.SignedIn && user ? (
            <Component {...rest} />
        ) : (
            <AmplifyAuthenticator />
        );
    }

    return(
        <Router>
            <Home path="/" />
            <PrivateRoute as={ Admin } path="/admin" />
            {/* <Updates path="updates">
                <Update path=":updateId" />
            </Updates> */}
        </Router>
    );
}

export default Routes;