import React from 'react'
import Layout from '../../components/layout'
import { GetStaticProps, GetStaticPaths } from 'next'
import Contents from '../../components/blog/contents'
import { Blog, BlogList } from '../../@types/blog'

interface ArticleProps {
    blog: Blog
}

const Article: React.FC<ArticleProps> = ({ blog }) => {
    const createdAt = new Date(blog.createdAt)
    return (
        <Layout>
            <div className={'mb-3 p-2 border-2 rounded border-indigo-200'}>
                <span className={'text-xl'}>{blog.title}</span>
                <span className={'text-xs text-gray-400 float-right'}>
                    {createdAt.toLocaleDateString()}
                </span>
            </div>
            <Contents html={blog.body} />
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
