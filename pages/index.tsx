import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'


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

      <main className={styles.main}>
        <div className={styles.title}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',

            
          }}>
            <Image src="/nrsvg.svg" alt="näraste" width={50} height={50} />
            


              nae raste│नए रास्ते
            

          </div>
        
        
        </div>

        <p className={styles.description}>
          science <br/><span>
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
        <Link href= {
            {
              pathname: '/resources',
              query: {
                grade: grade
              }
            }
            
          } >
            <a className={styles.card}>
            <Image src="/learn.svg" alt="Learning resources" width={100} height={100}  priority/>

            <h3 >Learning resources</h3>
            </a>
          </Link>
         
          
        </div>
       
      </main>
      <footer className={styles.footer}>
      <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>

        
        Subscribe to our newsletter to get updates on new resources, blogs and videos.
        Don&apos;t worry, we won&apos;t spam.
          
        <Image src={'/line-3.svg'} alt="Newsletter" width={100} height={100} />
        </div>
      </footer>

      <Script async data-uid="37bab4a468" src="https://artisanal-producer-6695.ck.page/37bab4a468/index.js"></Script>
    </div>
  )
}

export default Home
