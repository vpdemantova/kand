import Head from 'next/head'
import Link from 'next/link'

import styles from './styles.module.sass'

import Gallery from '@/components/Gallery'
import SeparatorLine from '@/components/SeparatorLine'
import Line from '@/components/Line'

import { createClient } from '../../prismicio'
import sm from '../../sm.json'

export default function Categories({projectsList}) {
  // projectsList.forEach(project => {
  //   console.log(project)
  // })

  // take tags out of prismic and do a cateory filter

  // const categories = projectsList.map((project) => project.tags)
  // console.log(categories)


  return <>
    <Head>
      <title>KAND | Categories</title>
    </Head>

    <div className={styles.wrapper}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.line}><Line /></div>

      <div className={styles.filters}>
        <div className={styles.category}>Branding</div>
        <div className={styles.category}>Best Use Of Media</div>
        <div className={styles.category}>Design</div>
      </div>

      <SeparatorLine />
      <Gallery projectsList={projectsList} />
      <SeparatorLine />
      <span className={styles.footer__label}>or see</span>
      <Link href={'/projects'} className={styles.footer__title}>All Projects</Link>
    </div>
  </>
}

export async function getServerSideProps() {
  const client = createClient({ accessToken: sm.token })
  const projects = await client.getAllByType('project')

  const projectsListTreated = projects.map((project) => {
    if (!project.data) return null
    return {
      id: project.uid,
      title: project.data.title,
      content: project.data.content,
      cover: project.data.cover,
    }
  })

  const orderReq = await client.getByType('order')
  const order = orderReq.results[0].data.list_order.map((item) => item.project).map((item) => item.uid)

  let projectsList = []

  order.forEach((item) => {
    const found = projectsListTreated.find((acc) => acc?.id === item)
    if (found) projectsList.push(found)
  })

  return {
    props: { projectsList, order }
  }
}
