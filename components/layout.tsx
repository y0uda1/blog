import Head from 'next/head'
import Link from 'next/link'

export default function Layout({
    children,
    title = 'y0udai blog'
}) {
    title = 'ここにタイトル'
    return (
        <div className={'min-h-screen flex flex-col bg-indigo-200'}>
            <Head>
                <title>{title}</title>
            </Head>
            <header className={'h-11 flex flex-wrap content-center bg-indigo-50'}>
                <span className={'px-8'}>{title}</span>
                <nav className={'flex flex-row'}>
                    <Link href='/'>
                        <a className={'px-2'}>{'introduction'}</a>
                    </Link>
                    <Link href='/blog'>
                        <a className={'px-2'}>{'blog'}</a>
                    </Link>
                </nav>
            </header>

            <div className={'flex-grow container mx-auto'}>
                {children}
            </div>

            <footer className={'flex-col bg-indigo-50'}>
                <span>{'ここにフッター'}</span>
            </footer>
        </div>
    )
}