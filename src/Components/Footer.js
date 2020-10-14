import React from 'react';
import { Toolbar, Grid } from '@material-ui/core';

export function Footer(){
    return (
    <Toolbar>
        <Grid container>
            <Grid item xs={12}>
                <p>(C) Athletic Specific LLC</p>
            </Grid>
        </Grid>
    </Toolbar>        
    )
}

export default Footer;