import React, { useState, forwardRef, createRef } from 'react';
import MaterialTable from 'material-table';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { getUpdateList } from '../Data/Models/customQueries.js';

import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import PublishSharpIcon from '@material-ui/icons/PublishSharp';
import RemoveCircleOutlineSharpIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';
import RefreshSharpIcon from '@material-ui/icons/RefreshSharp';
import CheckSharpIcon from '@material-ui/icons/CheckSharp';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteForeverSharpIcon {...props} ref={ref} />),
    Publish: forwardRef((props, ref) => <PublishSharpIcon {...props} ref={ref} />),
    Remove: forwardRef((props, ref) => <RemoveCircleOutlineSharpIcon {...props} ref={ref} />),
    Refresh: forwardRef((props, ref) => <RefreshSharpIcon {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} /> ),
    FilterList: forwardRef((props,ref) => <FilterList {...props} ref={ref} /> ),
    LastPage: forwardRef((props,ref) => <LastPage {...props} ref={ref} /> ),
    FirstPage: forwardRef((props,ref) => <FirstPage {...props} ref={ref} /> ),
    ResetSearch: forwardRef((props,ref) => <ClearSharpIcon {...props} ref={ref} /> ),
    NextPage: forwardRef((props,ref) => <ChevronRight {...props} ref={ref} /> ),
    PreviousPage: forwardRef((props,ref) => <ChevronLeft {...props} ref={ref} /> ),
    View: forwardRef((props, ref) => <VisibilitySharpIcon {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <CheckSharpIcon {...props} ref={ref} /> ),
    ThirdStateCheck: forwardRef((props, ref) => <HighlightOffSharpIcon {...props} ref={ref} />)
}

export default function(){  
    const tableRef = createRef(); 
    const [remoteData, setRemoteData] = useState();

    async function getPostData(){
        try {
            const data = await API.graphql(graphqlOperation(queries.listUpdates))
            const posts = (data.data.listUpdates.items)
            return posts;
        } catch (err){
            console.log('error', err)
        }
    }    
    
    getPostData()
    .then((data) => setRemoteData(data))
    .catch((err) => console.log(err))

    return(
    <MaterialTable
        title="Manage Posts"
        tableRef={tableRef}
        icons={tableIcons}
        options={{
            sorting: true,
            search: true,
        }}
        //other props
        columns = {[
            {title: 'Title', align: 'center', field: 'title', type: 'string'},
            {title: 'Author', align: 'center', field: 'author', type: 'string'},
            {title: 'Created At', align: 'center', field: 'createdAt', type: 'datetime'},
            {title: 'Published', align: 'center', field: 'published', type: 'boolean'},
            {title: 'Header Image', align: 'center', field: 'image', type: 'string'}
        ]}
        data = {remoteData}

        actions = {[
            rowData => ({
                icon: tableIcons.View, 
                tooltip: "View Post",
                onClick: (event, rowData) => alert("You want to view post on " + rowData.title)
            }),
            rowData => ({
                icon: tableIcons.Publish,
                tooltip: "Publish Post",
                onClick: (event, rowData) => alert("You published" + rowData.title),
                hidden: rowData.published === true
            }),
            rowData => ({
                icon: tableIcons.Remove,
                tooltip: "Unpublish Post",
                onClick: (event, rowData) => alert("You unpublished" + rowData.title),
                hidden: rowData.published === false
            }),
            {
                icon: tableIcons.Delete,
                tooltip: "Delete Post",
                onClick: (event, rowData) => alert("You deleted " + rowData.title)
            },
        ]}
    />
   );
}