import Link from 'next/link';
import Head from "next/head";
import Layout from "../../components/layout";


export default function FirstPost() {
  return (
    <Layout>
    <Head>
      <title>First Post</title>
    </Head>
      <h4>To my beautiful wife,

You are the absolute best thing in the whole world, and my heart is completely full because of how deeply you love and support me every single day. The Bible says in the book of Proverbs that a good wife is worth far more than precious rubies, but to me, you are worth more than all the treasures in the universe.

You are the most hardworking woman I have ever known. Your hands and your mind never tire of building a beautiful life for us, yet you always keep the sweetest, most even temper. You bring so much peace into our home. You are so present with me—always right there by my side, giving me your full heart, your warm hugs, and your loving touch whenever I need it most.

I cherish everything about you. I cherish your warm embrace that makes all my worries melt away. I cherish your beautiful smile—it is like the bright morning sun breaking through the clouds. You are so sweet, so funny, and so wonderfully playful. Your laughter is my favorite sound in the world, and it fills our life with so much joy.

Like the beautiful words in the Song of Solomon, you have completely captured my heart, my sister, my bride. You are the only one I will ever love in this life. My love for you is so deep that if we live a thousand times, I will choose you every single time. Even when our time on this earth is done, I would search for you and marry you all over again in heaven.

Thank you for loving me, for supporting me, and for being my everything. You are my one and only, and I will cherish you forever.</h4>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
