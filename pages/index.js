import Head from 'next/head'
import MundoSvg from '../public/mundo.svg'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Rive from 'rive-react'

import { createClient } from '../prismicio'
import sm from '../sm.json'

import Page from '../components/Page'

import styles from './styles.module.sass'

const KandRive = '/kand.riv'

export default function Home({ data, navigation }) {
    const elementRef = useRef(null)
    const riveRef = useRef(null)

    return (
        <Page
            className={"Page"}
            ref={elementRef}
            navigation={navigation}
        >
            <Head>
                <title>KAUE & DALTRO</title>
            </Head>

            <div className={styles.wrapper}  >
                <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: data.first_paragraph }} />
                <div className={styles.title}>
                    <div className={styles.accent}></div>
                    <h1 className={styles.name}>{data.first_name}</h1>

                    <div ref={riveRef} className={styles.icon}>
                        <div className={styles.line} />
                        <Rive src={KandRive} artboard='Rive Mundo' />
                        <div className={styles.line} />
                    </div>

                    <h1 className={styles.name}>{data.second_name}</h1>
                </div>
                <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: data.second_paragraph }} />
                <p className={styles.paragraph__mobile} dangerouslySetInnerHTML={{ __html: data.second_paragraph }} />
                <p className={styles.paragraph}>
                    {data.question}
                </p>
                <div className={styles.buttons__wrapper}>
                    <Link href={"/projects"} className={styles.button}>
                        {data.first_button}
                    </Link>
                    <Link href={"/categories"} className={styles.button}>
                        {data.second_button}
                    </Link>
                </div>
            </div>
        </Page>
    )
}

export async function getServerSideProps() {
    const client = createClient({ accessToken: sm.token })

    const home = await client.getByType('home')
    const data = home?.results[0]?.data

    const navigation = await client.getByType('navigation')
    const navigationData = navigation?.results[0]?.data

    return {
        props: { data: data, navigation: navigationData },
    }
}
