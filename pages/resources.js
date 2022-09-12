/** @format */

// import type { NextPage } from 'next'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Resource = ({ records }) => {
  const router = useRouter();
  const { grade } = router.query;

  const gradefilteredRecords = records.filter(
    (record) => record.fields["Grade"] === parseInt(grade)
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>🚀 Resources</title>
        <meta name="description" content="Handpicked from the Internet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <h2
            style={{
              paddingLeft: "1.2rem",
              paddingRight: "1.2rem",
              lineHeight: "2rem",
              letterSpacing: "-0.01rem",
              color: "#9D9A9A",
              textAlign: "center",
            }}
          >
            Don&apos;t take anyone&apos;s word for it.
          </h2>
          <Image
            src={`/brainstorming.png`}
            alt="book"
            width={165}
            height={135}
          />
          {gradefilteredRecords.map((record, index) => (
            <Link
              key={index}
              href={{
                pathname: "/subject",
                query: {
                  id: record.id,
                },
              }}
            >
              <div className={styles.card}>{record.fields["Chapter Name"]}</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

//Get server props is dope!!

export async function getStaticProps() {
  const API_KEY = process.env.API_KEY;
  const TABLE_KEY = process.env.TABLE_KEY;
  const res = await fetch(
    `https://api.airtable.com/v0/${TABLE_KEY}/Science?maxRecords=100&view=Grid%20view`,
    {
      headers: { Authorization: `Bearer ${API_KEY}` },
    }
  );

  const records = await res.json();

  return {
    props: { records: records.records }, // will be passed to the page component as props
  };
}

export default Resource;
