import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default class Layout extends React.Component {
    public render(): JSX.Element {
        return (
            <div className={'min-h-screen flex flex-col bg-indigo-200'}>
                <Head>
                    <title>{'y0uda1.dev'}</title>
                </Head>
                <header
                    className={'flex flex-wrap justify-center bg-indigo-50'}>
                    <nav className={'h-10 flex items-stretch'}>
                        <Link href="/">
                            <a
                                className={
                                    'px-2 flex flex-wrap content-center text-lg font-bold hover:text-gray-400'
                                }>
                                <span>introduction</span>
                            </a>
                        </Link>
                        <Link href="/blog">
                            <a
                                className={
                                    'px-2 flex flex-wrap content-center text-lg font-bold hover:text-gray-400'
                                }>
                                blog
                            </a>
                        </Link>
                        <Link href={'https://github.com/y0uda1'}>
                            <a
                                className={
                                    'px-2 flex flex-wrap content-center text-lg font-bold hover:text-gray-400'
                                }>
                                <div className={'flex items-center'}>
                                    <Image
                                        src="/GitHub-Mark-32px.png"
                                        alt="github icon"
                                        width={16}
                                        height={16}
                                        layout={'fixed'}
                                    />
                                    <span className={'pl-1'}>GitHub</span>
                                </div>
                            </a>
                        </Link>
                    </nav>
                </header>

                <div className={'flex-grow container mx-auto'}>
                    <div className={'flex justify-center'}>
                        <div
                            className={
                                'w-full my-5 rounded shadow-lg bg-white'
                            }>
                            <div className={'mx-10 my-5'}>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
