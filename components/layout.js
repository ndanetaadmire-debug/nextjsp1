import styles from "./layout.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"
import utilsStyles from "../styles/utils.module.css"

export default function Layout({children, home}){
    return <div className={styles.container}>
        <Head>
            <meta name = "description" content = "profile and blog details" />
            <meta name ="profile" content = "profile"/>
            <title> Next.js Blog</title>
             
</Head>
<header>
    {home ? (<Image className = {utilsStyles.boarderRadius}
    priority
    src ="/profile pic.jpeg"
    alt = "face" width ={180} height ={180} />)  : 
    (<Link href="/">
       <Image className = {utilsStyles.boarderRadius}
        priority
    src ="/profile pic.jpeg"
    alt = "face"
        width = {100}
        height = {100} />  </Link>) }
</header>

<main>{children}</main>

    {!home && (<Link href="/">
    <div className = {utilsStyles.backHome}> 
        Back to home
        </div>
    </Link>)}



</div>
}