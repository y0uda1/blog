import React from 'react'
import { GetStaticProps } from 'next'
import axios from 'axios'
import Layout from '../../components/layout'
import BlogCard from '../../components/blog/listCard'
import { IBlogList } from '../../@types/blog'

const BlogHome: React.FC<IBlogList> = (blogList) => {
    return (
        <Layout>
            <h1 className={'text-2xl mb-2 pb-2'}>
                開発途中の試行錯誤やノウハウなど
            </h1>
            <ol>
                {blogList.contents.map((content) => (
                    <li key={content.id}>
                        <BlogCard blog={content} />
                    </li>
                ))}
            </ol>
        </Layout>
    )
}

export default BlogHome

export const getStaticProps: GetStaticProps = async () => {
    const key = {
        headers: { 'X-API-KEY': process.env.API_KEY },
    }
    const blogList = await axios
        .get<IBlogList>(process.env.CMS_END_POINT, key)
        .then((res) => res.data)

    return { props: blogList }
}
