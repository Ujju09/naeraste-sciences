/** @format */

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Script from "next/script";
export default function Diksha({ content }) {
  const contentArray = content.split(";");

  return (
    <div className={styles.container}>
      <Head>
        <title>🚀 Diksha</title>
        <meta name="description" content="Handpicked from the Internet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DGC187B0GF" id='1'></Script>
<Script id='2'>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DGC187B0GF')`};
</Script>
      <main className={styles.main}>
        <div className={styles.title}>
          <h2>Diksha</h2>
        </div>
        <div className={styles.grid}>
          {contentArray.map((content, index) => (
            <Link
              key={index}
              href={{
                pathname: "/practice",
                query: {
                  content: content,
                },
              }}
            >
              <div className={styles.card} key={index}>
                Practice set {index + 1}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const content = context.query.content;
  return {
    props: { content: content },
  };
}
