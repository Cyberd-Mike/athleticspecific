import React, {useState, Fragment} from 'react';
import {
    TextField,
    Button,
    Grid
} from '@material-ui/core';
import {update} from 'immutability-helper';

export function ContactForm(){
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
    });


    const handleChange = (event) => {
        const {target: {name, value}} = event;
        let newState = update(values, {
            [name]: {$set: value}
        });
        setValues(newState)
    }

    const handleSubmit = (event) => {
        console.log('Submitted');
    }

    return(
        <Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <h1>Contact Form</h1>
                    <p>Please, feel free to send us an email if you have any questions!</p>
                </Grid>
                <Grid item xs={12}>
                    <TextField variant="outlined" label="Name" value={values.name} name="name" onChange={(e) => handleChange(e) } />
                </Grid>
                <Grid item xs={12}>
                    <TextField variant="outlined" label="Email Address" value={values.email} name="email" onChange={(e) => handleChange(e) } />
                </Grid>
                <Grid item xs={12}>
                    <TextField multiline rowsmax={10} variant="outlined" label="Message" value={values.message} name="message" onChange={(e) => handleChange(e) } />
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={(e) => handleSubmit(e) }>Submit</Button>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default ContactForm;