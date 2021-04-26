import React from 'react'
import Layout from '../../components/layout'
import { GetStaticProps, GetStaticPaths } from 'next'
import Contents from '../../components/blog/contents'

interface ArticleProps {
    blog: Blog
}

interface Blog {
    id: string
    title: string
    body: string
    createdAt: string
}

interface BlogList {
    contents: Blog[]
    limit: number
    offset: number
    totalCount: number
}

const Article: React.FC<ArticleProps> = ({ blog }) => {
    return (
        <Layout>
            <div className={'flex justify-center'}>
                <div className={'w-full my-5 rounded shadow-lg bg-white'}>
                    <div className={'mx-10 my-5'}>
                        <div className={'text-xl'}>{blog.title}</div>
                        <Contents html={blog.body} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Article

export const getStaticProps: GetStaticProps = async (context) => {
    const key = {
        headers: { 'X-API-KEY': process.env.API_KEY },
    }
    const blog: Blog = await fetch(
        `${process.env.CMS_END_POINT}/${context.params.id}`,
        key
    )
        .then((res) => res.json())
        .catch(() => null)
    return { props: { blog } }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const key = {
        headers: { 'X-API-KEY': process.env.API_KEY },
    }
    const blogList: BlogList = await fetch(process.env.CMS_END_POINT, key)
        .then((res) => res.json())
        .catch(() => null)

    const paths = blogList.contents.map((content) => ({
        params: { id: content.id },
    }))

    return {
        paths,
        fallback: false,
    }
}
