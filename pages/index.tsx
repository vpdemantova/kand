import MundoSvg from '@/public/mundo.svg';
import Image from 'next/image';

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>KAUE & DALTRO</title>
        <meta name="description" content="Design Duo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mundo.svg" />
      </Head>
      <main>
        <div className="home__wrapper">
          <p className="home__paragraph">
            we are a creative duo working <br/> together since that year people thought <br/>
            nobody would ever work together again.
          </p>
          <div className="home__title">
            <h1 className="home__name">KAUE</h1>
            <Image src={MundoSvg} alt="World" />
            <h1 className="home__name">DALTRO</h1>
          </div>
          <p className="home__paragraph">
            with almost a decade of experience, 
            we've done <br/> a little bit of everything. So tell us:
          </p>
          <p className="home__paragraph">
            what do you wanna see today?
          </p>
          <div className="home__buttons__wrapper">
            <a href="" className="home__button">
              All projects
            </a>
            <a href="" className="home__button">
              Categories
            </a>
          </div>
        </div>
      </main>
    </>
  )
}