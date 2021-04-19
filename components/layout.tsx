import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Layout({
    children,
    title = 'y0udai.dev'
}) {
    return (
        <div className={'min-h-screen flex flex-col bg-indigo-200'}>
            <Head>
                <title>{title}</title>
            </Head>
            <header className={'flex flex-wrap justify-center bg-indigo-50'}>
                <nav className={'h-10 flex items-stretch'}>
                    <Link href='/'>
                        <a className={'px-2 flex flex-wrap content-center text-lg font-bold hover:text-gray-400'}>
                            <span>introduction</span>
                        </a>
                    </Link>
                    <Link href='/blog'>
                        <a className={'px-2 flex flex-wrap content-center text-lg font-bold hover:text-gray-400'}>blog</a>
                    </Link>
                    <Link href={'https://github.com/y0uda1'}>
                        <a className={'px-2 flex flex-wrap content-center text-lg font-bold hover:text-gray-400'}>
                            <div>
                                <Image
                                    src='/GitHub-Mark-32px.png'
                                    alt='github icon'
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
                {children}
            </div>
        </div>
    )
}