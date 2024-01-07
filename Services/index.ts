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

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            posts {
                id
                title
                excerpt
                slug
                publishedAt
                featured
                content {
                    html
                }
                author {
                    id
                    name
                    photo {
                    url
                    }
                }
                categories {
                    id
                    name
                }
                thumbnail{
                    url
                }
            }
        }
    `
    const result:gqlModels = await request(graphAPI, query);
    return result.posts
}
export const getPost = async (slug:string) => {
    const query = gql`
        query MyQuery($slug:String!) {
            post(where:{slug:$slug}) {
                id
                title
                thumbnail{
                    url
                }
                excerpt
                slug
                publishedAt
                featured
                content {
                    html
                }
                author {
                    id
                    name
                    photo {
                    url
                    }
                }
                categories {
                    id
                    name
                }
            }
        }
    `
    const result:gqlModels = await request(graphAPI, query, {slug});
    return result.post
}


export const getProjects = async () => {
    const query = gql`
        query MyQuery {
            projects {
                id
                name
                previewlink
                githublink
                projectImages {
                    url
                }
                projectstatus
                startdate
                featured
                description
                projectCategory{
                    id
                    name
                }
                active
            }
        }
    `
    const result:gqlModels = await request(graphAPI, query);
    return result.projects
}
export const getProjectCategories = async () => {
    const query = gql`
        query MyQuery {
            projectCategories {
                id
                name
            }
        }
    `
    const result:gqlModels = await request(graphAPI, query);
    return result.projectCategories
}