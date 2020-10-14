import React, {Fragment, useState} from 'react';
import {Grid, TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { DropzoneAreaBase } from 'material-ui-dropzone';
import { Editor } from '@bit/primefaces.primereact.editor';
import {API, graphqlOperation, Storage} from 'aws-amplify';
import * as mutations from '../graphql/mutations';

export function Create(props){
    const [update, setUpdate] = useState('');
    const [title, setTitle] = useState('');
    const [publish, setPublish] = useState(false);
    const [image, setImage] = useState();
    const [imgKey, setImgKey] = useState();

    const backToList = () => {
        props.goBack();
    }

    const handleCheck = () => {
        publish === true ? setPublish(false) : setPublish(true);
    }
    
    const uploadImage = async (file) => {
        console.log('File info', file);
        const name = file[0].file.name;
        const data = file[0].data;
        const type = file[0].file.type;
        
        const buf = Buffer.from(data.replace(/^data:image\/\w+;base64,/, ""),'base64');

        const img = await Storage.put(name, buf, {contentType: type});
        return img;
    }

    const submit = async () => {
        const s3Image = await uploadImage(image);
        const img = s3Image.key;
        const data = {
            title: title,
            content: update,
            published: publish,
            image: img
        }
        try {
            const newPost = await API.graphql(graphqlOperation(mutations.createUpdate, {input: data}));
            console.log('New Post', newPost);
            backToList();
            return newPost;
        } catch (err) {
            console.log('Error creating post', err);
        }
        

    }

    return(
        <Grid container>
            <Grid item xs={12}>
                <TextField onChange={(e) => setTitle(e.target.value)} value={title} label="Post Title" variant="standard">Post Title</TextField>
            </Grid>
            <Grid item xs={12}>
                <Editor style={{minHeight: '350px'}} value={update} onTextChange={ (e) => setUpdate(e.htmlValue) }/>
            </Grid>
            <Grid item xs={12}>
                <DropzoneAreaBase
                    acceptedFiles={['image/*']}
                    dropzoneText="Post Header Image"
                    onAdd={(data) => setImage(data)}
                    onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
                />
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel control={<Checkbox name="publish" checked={publish} onChange={() => handleCheck()} />} label="Publish" />
                <Button onClick={() => submit()}>Submit</Button>
                {/* <Button onClick={() => save()}>Save for Later</Button> */}
            </Grid>
        </Grid>
    );
}

export default Create;