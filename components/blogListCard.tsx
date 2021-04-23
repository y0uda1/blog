import React from 'react'
import Link from 'next/link'

interface BlogProps {
    blog: {
        id: string
        title: string
        createdAt: string
    }
}

const BlogCard: React.FC<BlogProps> = ({ blog }) => {
    const id = blog.id
    const title = blog.title
    // APIから帰ってきた日付文字列をここでDateに変換しているけど、もっと大元で直したい。わからない。
    const createdAt = new Date(blog.createdAt)
    return (
        <Link href={`/blog/${id}`}>
            <a>
                <div className={'border-2 mb-3 p-3'}>
                    <div>{title}</div>
                    <div>{createdAt.toLocaleDateString()}</div>
                </div>
            </a>
        </Link>
    )
}

export default BlogCard
