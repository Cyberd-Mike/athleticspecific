import React, { useEffect, useState, Fragment } from 'react';
import { Grid, Container, Paper } from '@material-ui/core';
import { TopToolbar } from '../Components/Toolbar';
import { Footer } from '../Components/Footer';
import { Updates } from '../Components/LatestUpdates';
import { ContactForm } from '../Components/ContactForm';
import { Banner } from '../Components/HeaderImage';
import { Storage } from 'aws-amplify';
import '../Style/Home.scss';

export function Home(){
    const [ bannerImg, setBannerImg ] = useState();
    const [ secondaryImg, setSecondaryImg ] = useState();
    useEffect(() => {
        Storage.get('IMG_6117.JPG')
        .then((result) => setBannerImg(result))
        .catch((err) => console.log('Error getting background image', err));

        Storage.get('LongsCutout_small.png')
        .then((result) => setSecondaryImg(result))
        .catch((err) => console.log('Error', err))
    },[]);
    
    return(
        <Fragment>
            <TopToolbar />
            <Banner image={bannerImg} >
                <h1>Athletic Specific</h1>
            </Banner>
            {/* <img className="MountianImage" src={secondaryImg} /> */}
            <Updates />
            <ContactForm />
            <Footer />
        </Fragment>
    );
}
export default Home;