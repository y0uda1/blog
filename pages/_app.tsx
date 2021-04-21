import 'tailwindcss/tailwind.css'
import App, { AppProps } from 'next/app'
import React from 'react'

class MyApp extends App {
    render(): JSX.Element {
        const { Component, pageProps }: AppProps = this.props

        return (
            <React.Fragment>
                <Component {...pageProps} />
            </React.Fragment>
        )
    }
}

export default MyApp
