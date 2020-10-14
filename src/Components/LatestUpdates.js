import React, { Fragment, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../Data/Models/customQueries';

export function Updates(){
    // const [ update, setUpdate ] = useState('');

    // useEffect(() => {
    //     const LatestUpdate = async () => {    
    //         const update = await API.graphql(graphqlOperation(queries.getLatestUpdate, {limit: 1}, {filter: {published: {eq: true}}}
    //             ))
    //             return update;
    //     }
    
    //     LatestUpdate()
    //     .then((data) => {
    //         setUpdate(data)
    //         console.log('Latest Update received', data)
    //     })
    //     .catch((err) => console.log('Error getting latest update', err))
    // }, [])

    
    return (
        <Grid container xs={12} direction="column" justify="center" alignContent="center">
            <Grid item xs={12}>
                <h1 style={{textAlign: 'center'}}>Get Stoked!</h1>
            </Grid>
            <Grid item xs={12} container direction="row">
                <Grid item xs={12}>
                    <h3 style={{textAlign: 'center'}}>Big things are coming...</h3>
                </Grid>
                
                <Grid item xs={6} style={{margin: '0 auto'}}>
                    <p>We here at Athletic Specific believe that great climbers are built. In a sport which requires physical and mental strength, we climbers could use some help to avoid plateaus.
                    Leveraging the skills of Founder and Head Coach, Dave Wall, we are pairing technology with years of elite coaching experience to 
                        build tools for climbers looking to push themselves to the next level.</p>
                    <p>Keep an eye on this site for updates and news as we create tools to build better athletes.</p>
                    <p>In the meantime, train hard... and get stoked.</p>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Updates;