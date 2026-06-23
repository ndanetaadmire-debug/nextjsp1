
import Layout from "../../components/layout";
import { getAllPostsId, getPostsData} from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date"
import utilStyles from "../../styles/utils.module.css"

export default function Post({postsData}){
    return <Layout>
        <Head>
            <title>
                {postsData.title}
            </title>
        </Head>
        <article>
            <div className={utilStyles.headingLg}>
        {postsData.title} </div>

        
        <br/> <br/>
        <Date dateString= {postsData.date} /> <br/>
        <div dangerouslySetInnerHTML={{__html: postsData.contentHtml}} />
        </article>

 </Layout>
}

export async function getStaticPaths(){
    const paths = getAllPostsId();
    return {
        paths,
        fallback: false,
    };

}

export async function getStaticProps({params}){
    const postsData = await getPostsData(params.id)
    
    return{
        props : {postsData}
    }

}