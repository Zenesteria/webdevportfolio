export interface gqlModels{
    pageContents:{
        id:string
        name:string
        title:string
        subtitle:string
        content:{
          html:string
        }
        images:{
          url:string
        }
        link:string
        buttonText:string
    }[]
}