import React, { useState, Fragment } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Create } from '../Components/CreateUpdate';
import { ManageUpdates } from '../Components/ManageUpdates';
export function Admin(){
    const [step, setStep] = useState('List');
    
    return (
        <Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <h1>Updates</h1>
                    <p>Manage Updates Here</p>
                </Grid>
                <Grid item xs={12}>
                    { step === 'List' ? <Button onClick={() => setStep('Create')}>Create Update</Button> : <Button onClick={() => setStep('List')} >List Updates</Button> }
                </Grid>
                <Grid item xs={12}>
                    { step === 'List' ? <ManageUpdates /> : <Create goBack={() => setStep('List') }/>}
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Admin;