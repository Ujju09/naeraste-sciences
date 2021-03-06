/** @format */

import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function Resource({ records }) {
  const helpText = `I want to share ${records.fields["Chapter Name"]} questions with you.`;
  const encoded = encodeURI(helpText);

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
      <main className={styles.main}>
        <h1 className={styles.title}>naeRaste │ ✍️</h1>
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

        {records.fields.hasOwnProperty("practiceOnKhanAcademy") === true ? (
          <Link href={records.fields["practiceOnKhanAcademy"]}>
            <div className={styles.practiceCard}>
              <Image
                src="/KhanSVG.svg"
                width={50}
                height={50}
                alt="Khan Academy Logo"
              />
              <p> Practice on Khan Academy</p>
            </div>
          </Link>
        ) : (
          <></>
        )}

        {records.fields.hasOwnProperty("prepareOnDiksha") === true ? (
          <Link
            href={{
              pathname: "/diksha",
              query: {
                content: records.fields["prepareOnDiksha"],
              },
            }}
          >
            <div className={styles.practiceCard}>
              <Image
                src="/diksha.svg"
                width={50}
                height={50}
                alt="Diksha Logo"
              />
              <p> Practice from Diksha</p>
            </div>
          </Link>
        ) : (
          <></>
        )}
        {
          <div className={styles.practiceCard}>
            <a
              href={records.fields["ncertExemplar"]}
              style={{
                textDecoration: "none",
                color: "green",
                cursor: "pointer",
                padding: "0.5rem",
              }}
            >
              DOWNLOAD NCERT Exemplar PDF {""}
            </a>
          </div>
        }

        {records.fields.hasOwnProperty("Question (from Notes)") === false ? (
          <>
            No questions are available for Orbit!
            <Image src="/silence.png" alt="No image" width={50} height={50} />
            <h3>Want to contribute?</h3>
            <p>
              Send your questions to{" "}
              <span>
                <button className={styles.button}>
                  <a
                    href={`https://wa.me/919755992478?text=${encoded}`}
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Ujjwal ↗
                  </a>
                </button>
              </span>
            </p>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                marginBottom: "1rem",
              }}
            >
              <Image
                src="/orbit.svg"
                alt="Orbit image"
                width={100}
                height={100}
              />
              <p>Deeply internalize ideas and facts through periodic review.</p>
            </div>
            <orbit-reviewarea
              color="orange"
              style={{
                width: "100%",
              }}
            >
              {records.fields["Question (from Notes)"].map(
                (question, index) => (
                  <orbit-prompt
                    question={question}
                    answer={records.fields["Answer (from Notes)"][index]}
                    key={index}
                  ></orbit-prompt>
                )
              )}
            </orbit-reviewarea>
          </>
        )}
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
