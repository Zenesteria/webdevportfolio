import {request, gql} from 'graphql-request';
const graphAPI = process.env.GRAPH_API_ENDPOINT || '';
import { gqlModels } from '../interface';


export const getPageContent = async () => {
    const query = gql`
        query MyQuery {
            pageContents {
                id
                name
                title
                subtitle
                content {
                    html
                }
                images {
                    url
                }
                link
                buttonText
            }
      }
    `
    const result:gqlModels = await request(graphAPI, query);
    
    return result.pageContents
}