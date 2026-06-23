import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from "../components/layout";
import utilsStyles from "../styles/utils.module.css";
import {getSortedPostsData} from "../lib/posts";
import Date from ".././components/date";

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return {
    props: {allPostsData}
  };
};



export default function Home({allPostsData}) {
  return (
    <Layout home>
    < Head> <title>My blog</title>
      </Head>
      <header> <h1> Hello</h1></header>

      <p className={utilsStyles.texting}>I love my wife so much</p>
      <p>I love you Lord Jesus</p>

      <ul className ={utilsStyles.list}>
        <li>
          <Link href="/posts/first-post">Read my first post</Link>
        </li>
      </ul>

<section className={utilsStyles.heading}>
<h2 className={utilsStyles.headingLg}>
Blog
</h2>
<ul className={utilsStyles.list}>{allPostsData.map(({id,title,date})=>(
<li className={utilsStyles.listItem} key={id}> <Link href={`../posts/${id}`}>
{title}</Link><br/><Date dateString={date} />
</li>)
)}



</ul>

</section>




    </Layout>
  )};