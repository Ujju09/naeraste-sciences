/** @format */

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

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
      <main className={styles.main}>
        <h1 className={styles.title}>Diksha</h1>
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
