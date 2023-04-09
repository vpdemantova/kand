import Head from 'next/head'
import MundoSvg from 'public/mundo.svg'
import Image from 'next/image'
import Link from 'next/link'

import Line from '@/components/Line'

import styles from './styles.module.sass'

export default function Home(data: any) {
  return <>
    <Head>
      <title>KAUE & DALTRO</title>
    </Head>
    <div className={styles.wrapper}>
      <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: data.first_paragraph }} />
      <div className={styles.title}>
        {/* <div className={styles.accent}></div> */}
        <h1 className={styles.name}>{ data.first_name }</h1>
        {/* <Line /> */}
        <Image className={styles.icon} src={MundoSvg} alt="World"/>
        {/* <Line /> */}
        <h1 className={styles.name}>{ data.second_name }</h1>
      </div>
      <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: data.second_paragraph }} />
      <p className={styles.paragraph__mobile}>
        with almost a decade of experience, <br/> 
        we've done a little bit of everything. <br/> 
        So tell us:
      </p>
      <p className={styles.paragraph}>
        what do you wanna see today?
      </p>
      <div className={styles.buttons__wrapper}>
        <Link href={"/projects"} className={styles.button}>
        { data.first_button }
        </Link>
        <Link href={"/categories"} className={styles.button}>
        { data.second_button }
        </Link>
      </div>
    </div>
  </>
}

import { createClient } from '../prismicio'
import sm from '../sm.json'

export async function getServerSideProps() {
  const client = createClient({ accessToken: sm.token })

  const home = await client.getByType('home')
  const data = home?.results[0]?.data

  return {
    props: { ...data },
  }
}