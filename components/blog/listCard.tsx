import React from 'react'
import Link from 'next/link'
import { Blog } from '../../@types/blog'

interface BlogProps {
    blog: Blog
}

const BlogCard: React.FC<BlogProps> = ({ blog }) => {
    const id = blog.id
    const title = blog.title
    // APIから帰ってきた日付文字列をここでDateに変換しているけど、もっと大元で直したい。わからない。
    const createdAt = new Date(blog.createdAt)
    const summary = blog.body.replace(/(<([^>]+)>)/giu, '')
    return (
        <Link href={`/blog/${id}`}>
            <a>
                <div
                    className={
                        'border-2 rounded border-indigo-50 mb-3 p-3 hover:bg-indigo-50'
                    }>
                    <div>
                        <span className={'text-xl'}>{title}</span>
                        <span className={'text-xs text-gray-400 float-right'}>
                            {createdAt.toLocaleDateString()}
                        </span>
                    </div>
                    <p className={'text-xs text-gray-600 truncate'}>
                        {summary}
                    </p>
                </div>
            </a>
        </Link>
    )
}

export default BlogCard
