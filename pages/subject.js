/** @format */

import styles from "../styles/Home.module.css";
import Head from "next/head";
import Script from "next/script";
import OrbitList from "../components/orbit_page";
import VideoList from "../components/video_list";
import QuestionSets from "../components/question_sets";
import NotesList from "../components/notes_list";
import { useState } from "react";
import Image from "next/image";

export default function Resource({ records }) {

  const [active, setActive] = useState(1);
  const handleClick = (e, n) => {
    e.preventDefault();
    setActive(n);
  }

  return (
    <div className={styles.container}>
      <Script
        type="module"
        src="https://js.withorbit.com/orbit-web-component.js"
      />
      <Head>
        <title>{records.fields["Chapter Name"]}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',

            
          }}>
            <Image src="/bookmark-orange.png" alt="bookmark-shape representing the exposure part." width={39.68} height={50} />
            

          </div>
        
        
        </div>
        <div className={styles.title}>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              marginTop: "1rem",
              textAlign: "center",
              color: "#D05E70",
            }}
          >
            {records.fields["Chapter Name"]}
          </p>
        </div>
        <div className={styles.topicList}>
          <div  className={
            active === 1 ? styles.topicActive : styles.topic
          } onClick={(e)=> handleClick(e,1)}>
            Videos
          </div>
          <div className={
            active === 2 ? styles.topicActive : styles.topic
          } onClick={(e)=> handleClick(e,2)} >
            Orbit
            </div>
          <div className={
            active === 3 ? styles.topicActive : styles.topic
          } onClick={(e)=> handleClick(e,3)}>
            Question Sets
            </div>
            <div className={
            active === 4 ? styles.topicActive : styles.topic
          } onClick={(e)=> handleClick(e,4)}>
              Notes
            </div>
        </div>
       {
        active === 1 ? <VideoList records={records} /> : <></>
       }
        {
        active === 2 ? <OrbitList records={records} />: <></>
       }
       {
        active === 3 ? <QuestionSets records = {records}/> : <></>
       }
       {
        active === 4 ? <NotesList records={records}/> : <></>
       }
        


        
        
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const res = await fetch(
    `https://api.airtable.com/v0/appL3eEYotbT6ZB0m/Science/${id}`,
    {
      headers: { Authorization: `Bearer ${PUBLIC_API_KEY}` },
    }
  );

  const records = await res.json();

  return {
    props: { records: records }, // will be passed to the page component as props
  };
}
