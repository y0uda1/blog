export interface IImageContents {
    fieldId: 'image'
    image: {
        url: string
        height: number
        width: number
    }
}

export interface ICodeContents {
    fieldId: 'code'
    language: string
    code: string
}

export interface IHtmlContents {
    fieldId: 'contents'
    contents: string
}

export interface IBlog {
    id: string
    title: string
    body: (IHtmlContents | ICodeContents | IImageContents)[]
    createdAt: string
}

export interface IBlogList {
    contents: IBlog[]
    limit: number
    offset: number
    totalCount: number
}
