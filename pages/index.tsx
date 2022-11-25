import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import { useState } from 'react'
import Link from 'next/link'

const Home: NextPage = () => {
  const grades = [9,10,11,12];
  const [grade, setGrade] = useState(9);
  return (
    <div className={styles.container}>
      <Head>
        <title>nae raste</title>
        <meta name="description" content="Superpowered notebooks" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <meta name="google-site-verification" content="SlF8pulxb_3mPZEUyISxKfwbgxW33EPV7eGacqL8sa4" />
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
            justifyContent: 'space-between',
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            backgroundColor: '#f9f9f9',

            
          }}>
            <Image src="/nrsvg.svg" alt="näraste" width={50} height={50} />
            


            <h2 className={styles.h2}>
          science
            </h2>
            

          </div>
        
        
        </div>

        <p className={styles.description}>
        <span>
          <label>select your class </label>  
            <select style={{
              width: '100px',
              height: '40px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              padding: '5px',
              fontSize: '1.5rem',
              color: 'black',
              backgroundColor: "#f5f5f5",
             

            }} onChange={
              (e) => {
                setGrade(parseInt(e.target.value));
              }

            }
            defaultValue={grade}>
          
              {grades.map(grade => <option key={grade} value={grade}>{grade}</option>)}
            </select>  
          
            </span></p>
        <div className={styles.grid}>
          <div  className={styles.card}>
          <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "0.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "0.5rem",
          }}
        >
        </div>
        <h3>{"Your Questions"}</h3>
        <p>{"We love your questions. Ask your doubts. We are more than happy to help!"}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Link
            href={{
              pathname: "/getHelp",
            }}
          >
            <button className={styles.button}>I have a Question!</button>
          </Link>
        </div>
      </div>

          </div>
        
            
        <a className={styles.card}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "0.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "0.5rem",
          }}
        >
          <Image
            src='/resources.png'
            alt="Learning resources"
            width={100}
            height={187}
            priority
          />
        </div>
        <h2>{"Learning Resources"}</h2>
        <p>{"Start learning by watching curated videos, practice problems, review factual knowledge and more.."}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Link
            href={{
              pathname: "/resources",
              query: {
                grade: grade,
              },
            }}
          >
            <button className={styles.button}>Explore</button>
          </Link>
        </div>
      </div>
    </a>  

        </div>
        {
          grade ==10 ? (
            <div className={styles.card}>
              <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "0.5rem",
        }}
      >
 <h3>Sample Papers</h3>
            <p>
              Get prepared by solving Previous Year Question Papers.
            </p>
            <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <a href='https://www.playbook.com/s/ujjwal/eQJzXZ8sq6XF94FSt7NjYFE8/KH1W4QbcSyTN8zoj1ZRWdk5B'
          >
            <button className={styles.button}>Open →</button>
          </a>
        </div>
      </div>
           
  
          </div>
          ):(
            <>
            </>
          )
        }
       
       
      </main>
    </div>
  )
}

export default Home
