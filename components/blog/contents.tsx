import React from 'react'
import Image from 'next/image'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styles from '../../styles/blog/default.module.scss'
import { IHtmlContents, ICodeContents, IImageContents } from '../../@types/blog'

interface P {
    html: (IHtmlContents | ICodeContents | IImageContents)[]
}

const Contents: React.FC<P> = ({ html }) => {
    const body = html.map((bodyContents) => {
        if (bodyContents.fieldId === 'image') {
            return (
                <Image
                    src={bodyContents.image.url}
                    width={bodyContents.image.width}
                    height={bodyContents.image.height}
                />
            )
        } else if (bodyContents.fieldId === 'code') {
            return (
                <SyntaxHighlighter
                    language={bodyContents.language}
                    style={dark}>
                    {bodyContents.code}
                </SyntaxHighlighter>
            )
        } else if (bodyContents.fieldId === 'contents') {
            return (
                <div
                    dangerouslySetInnerHTML={{ __html: bodyContents.contents }}
                />
            )
        }
    })
    return <div className={styles.content}>{body}</div>
}

export default Contents
