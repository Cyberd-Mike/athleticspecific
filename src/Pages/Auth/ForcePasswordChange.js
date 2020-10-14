import React, { useState } from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import { navigate } from '@reach/router';
import { Auth } from 'aws-amplify';

export function ForceChange(props){
    const [ newPassword, setNewPassword ] = useState();
    const [ confirmPassword, setConfirmPassword ] = useState();

    const user = props.user;
    console.log('User is ', user);

    const changePassword = async () => {
        if (newPassword === confirmPassword){
            await Auth.completeNewPassword(
                user,
                newPassword
            )
                .then(() => navigate('/admin'))
                .catch((error) => console.log('Error', error))
        } else {
            console.log('Passwords do not match.')
        }
    }

    return (
        <Grid container>
            <TextField label="New Password" variant="outlined" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <TextField label="Confirm New Password" variant="outlined" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <Button variant="outlined" onClick={() => changePassword()}>Change Password</Button>
        </Grid>
    );
}

export default ForceChange;