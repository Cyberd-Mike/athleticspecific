import * as queries from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

export default async function() {
        try {
            const data = await API.graphql(graphqlOperation(queries.listUpdates))
            const posts = (data.data.listUpdates.items)
            return posts;
        } catch (err){
            console.log('error', err)
        }
}