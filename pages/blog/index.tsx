import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '../../components/layout'
import BlogCard from '../../components/blogListCard'

interface Blog {
    id: string
    title: string
    createdAt: string
}

interface BlogList {
    contents: Blog[]
    limit: number
    offset: number
    totalCount: number
}

const BlogHome: React.FC<BlogList> = (blogList) => {
    return (
        <Layout>
            <div className={'flex justify-center'}>
                <div className={'w-full my-5 rounded shadow-lg bg-white'}>
                    <div className={'mx-10 my-5'}>
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
                    </div>
                </div>
            </div>
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
