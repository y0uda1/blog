import React from 'react'
import Link from 'next/link'
import { IBlog } from '../../@types/blog'

interface P {
    blog: IBlog
}

const BlogCard: React.FC<P> = ({ blog }) => {
    const id = blog.id
    const title = blog.title
    // APIから帰ってきた日付文字列をここでDateに変換しているけど、もっと大元で直したい。わからない。
    const createdAt = new Date(blog.createdAt)
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
                </div>
            </a>
        </Link>
    )
}

export default BlogCard
