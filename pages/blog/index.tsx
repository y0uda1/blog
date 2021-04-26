import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '../../components/layout'
import BlogCard from '../../components/blog/listCard'
import { BlogList } from '../../@types/blog'

const BlogHome: React.FC<BlogList> = (blogList) => {
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
    const blogList = await fetch(process.env.CMS_END_POINT, key)
        .then((res) => res.json())
        .catch(() => null)

    return { props: blogList }
}
