import React from 'react'
import styles from '../../styles/blog/default.module.scss'

interface ContentsProps {
    html: string
}

const Contents: React.FC<ContentsProps> = ({ html }) => {
    return (
        <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}

export default Contents
