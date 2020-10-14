import React, {useState} from 'react';
import {
    AppBar,
    Button,
    Grid
} from '@material-ui/core';
import { Link, navigate } from '@reach/router';


export function TopToolbar(){
    return(
            <AppBar position="static" style={{minHeight: '75px'}} >
                <Grid container>
                    <Grid item xs={9}>
                        <Link to="/" className="HomeLink"><h3 className="NavHeader">Athletic Specific</h3></Link>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="primary" onClick={() => navigate("/updates")}>Updates</Button>
                    </Grid>
                </Grid>
            </AppBar>
    );
}

export default TopToolbar;