import React from 'react';
import { Grid } from '@material-ui/core';
import UpdatesTable from '../Components/UpdatesAdminTable';

export function ManageUpdates(){

    return (
        <Grid container>
            <Grid item xs={12}>
                <h1>Manage Updates</h1>
            </Grid>
            <Grid item xs={12}>
                <UpdatesTable />
            </Grid>
        </Grid>
    );
}
export default ManageUpdates;