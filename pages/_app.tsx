import 'styles/index.sass'
import Lenis from 'utils/scroll'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'
import GSAP from 'gsap'

import type { AppProps } from 'next/app'
type AppPropsWithNavigation = AppProps & { data: any }

import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'

import { createClient } from '../prismicio'
import sm from '../sm.json'

import Navigation from '@/components/Navigation'

const fetchNavigationData = async () => {
    const client = createClient({ accessToken: sm.token });
    const navigation = await client.getByType('navigation');
    return navigation?.results[0]?.data;
};

export default function App({ Component, pageProps, data }: AppPropsWithNavigation) {
    const { events } = useRouter()

    Lenis

    useEffect(() => {
        events.on('routeChangeComplete', () => {
            GSAP.to('main', { autoAlpha: 1, duration: 0.6 })
            window.scroll(0, 0)
        })
    }, [])

    return (
        <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
            <PrismicPreview repositoryName={repositoryName}>
                <Head>
                    <title>KAUE & DALTRO</title>
                    <meta name="description" content="Design Duo" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/mundo.svg" />
                </Head>
                <div className="top" />
                <div className="border" />
                <div className="bottom" />
                <div className="grain" />
                <Navigation data={data} />
                <main className='content'>
                    <Component {...pageProps} />
                </main>
            </PrismicPreview>
        </PrismicProvider>
    )
}

App.getInitialProps = async (appContext) => {
    const { Component, ctx } = appContext;
    let pageProps = {};

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    const data = await fetchNavigationData();
    return { pageProps, data };
};
