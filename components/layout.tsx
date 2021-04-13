import Head from 'next/head'

export default function Layout({
    children,
    title = 'y0udai blog'
}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                {title}
                <nav>
                    {'sample header'}
                </nav>
            </header>

            {children}

            <footer>
                {'sample footer'}
            </footer>
        </div>
    )
}