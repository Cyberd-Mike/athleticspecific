import React, { useState } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { TextField, Grid, Button } from '@material-ui/core';
import { navigate } from '@reach/router';

// import awsconfig from '../../aws-exports';
// Amplify.configure(awsconfig);

export function Login(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = async () => {
        const response = await Auth.signIn(username, password);

        if (response.challengeName === 'NEW_PASSWORD_REQUIRED'){
            props.setUsername(response)
            props.changePage('FORCE_PW_CHANGE');
        } else {
            navigate('/admin');
        }
    }
    
    return(
        <Grid container>
            <Grid item xs={12}>
                <h3>Admin Sign-In Page</h3>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />
                <TextField label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" color="primary" onClick={() => submit()} variant="contained">Sign-In</Button>
            </Grid>
        </Grid>       
    );
}

export default Login;