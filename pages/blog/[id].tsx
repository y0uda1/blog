import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import axios, { AxiosRequestConfig } from 'axios'
import Layout from '../../components/layout'
import Contents from '../../components/blog/contents'
import { IBlog, IBlogList } from '../../@types/blog'

interface P {
    blog: IBlog
}

const Article: React.FC<P> = ({ blog }) => {
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

const config: AxiosRequestConfig = {
    headers: { 'X-API-KEY': process.env.API_KEY },
}

export const getStaticProps: GetStaticProps = async (context) => {
    const blog = await axios
        .get<IBlog>(`${process.env.CMS_END_POINT}/${context.params.id}`, config)
        .then((res) => res.data)

    return { props: { blog } }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const blogList = await axios
        .get<IBlogList>(process.env.CMS_END_POINT, config)
        .then((res) => res.data)

    const paths = blogList.contents.map((content) => ({
        params: { id: content.id },
    }))

    return {
        paths,
        fallback: false,
    }
}
