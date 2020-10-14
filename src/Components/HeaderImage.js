import React, { Fragment } from 'react';
import { Grid, Paper } from '@material-ui/core';
import Amplify, { Storage } from 'aws-amplify';

export function Banner(props){
    const style = {
        backgroundImage: `url(${props.image})`,
        height: "80vh",
        width: "100vw",
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
        clipPath: "polygon(100% 0, 100% 75%, 0 100%, 0 0)",     
    }
    return(
        <Fragment>
            <Grid container id="HeaderImage" >
                <div className="HeaderBGImage" style={style}>
                    <Grid item xs={12}>
                        {props.children}
                    </Grid>
                </div>
            </Grid>
        </Fragment>    
    );
}

export default Banner;