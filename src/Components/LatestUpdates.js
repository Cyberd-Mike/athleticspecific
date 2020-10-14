import React, { Fragment, useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../Data/Models/customQueries';

export function Updates(){
    const [ update, setUpdate ] = useState('');

    useEffect(() => {
        const LatestUpdate = async () => {    
            const update = await API.graphql(graphqlOperation(queries.getLatestUpdate, {limit: 1}, {filter: {published: {eq: true}}}
                ))
                return update;
        }
    
        LatestUpdate()
        .then((data) => {
            setUpdate(data)
            console.log('Latest Update received', data)
        })
        .catch((err) => console.log('Error getting latest update', err))
    }, [])

    
    return (
        <Fragment>
            <h1>Latest Updates</h1>
                {/* <p>{update}</p> */}
            <p>Link to blog page</p>
        </Fragment>

    );
}

export default Updates;