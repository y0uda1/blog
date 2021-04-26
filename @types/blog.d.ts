export interface Blog {
    id: string
    title: string
    body: string
    createdAt: string
}

export interface BlogList {
    contents: Blog[]
    limit: number
    offset: number
    totalCount: number
}
