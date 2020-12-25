import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import {getIntroData, getSortedPostsData} from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  const introData = await getIntroData()
  return {
    props: {
      introData,
    }
  }
}

export default function Home({introData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className="tagline">
          <div 
            style={{
              textAlign: 'justify',
            }}>
            {/* <p>
              {`here lies meditations of a web developer
                trying to live a life
                of learning, teaching, and building tech solutions
                with JavaScript, React, and all things UI/UX until he
                either finds himself on a senior front-end or even a full-stack role, 
                or finally finishes his undergrad thesis,
                or is about to deploy the next killer app for pinoys.
                he is writing fiction too, and promises to not die without making a single movie.`}
            </p>
            <span>
              {`as long as no thesis is done, no app deployed, no movie made, or no story is published,
                he will be here, dreaming.`}
            </span> */}
            <span
              className="content"
              dangerouslySetInnerHTML={{__html: introData.contentHtml}} 
            />
            <span className="blinking-cursor">|</span>
          </div>
          <p>
            <img className="javascript-logo" src="/images/javascript.svg" />
            <img className="react-logo" src="/images/react.svg" />
          </p>
        </p>
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>          
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}
