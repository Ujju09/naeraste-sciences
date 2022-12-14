import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";


export default function QuestionSets({ records}) {
    return (
        <section>
            {records.fields.hasOwnProperty("practiceOnKhanAcademy") === true ? (
          <div className={styles.practiceCard}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Image
                  src="/KhanSVG.svg"
                  width={50}
                  height={50}
                  alt="Khan Academy Logo"
                />
                <h3> Practice on Khan Academy</h3>
              </div>
              <p
                style={{
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  fontWeight: "300",
                }}
              >
                Khan Academy contains a lot of practice questions for you to do
                in {records.fields["Chapter Name"]}. They also have explanation
                videos.
              </p>
              <Link href={records.fields["practiceOnKhanAcademy"]}>
                <button className={styles.button}>Practice Now</button>
              </Link>
            </div>
          </div>
        ) : (
          <></>
        )}
        {records.fields.hasOwnProperty("prepareOnDiksha") === true ? (
          <div className={styles.practiceCard}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Image
                  src="/diksha.svg"
                  width={50}
                  height={50}
                  alt="Diksha Logo"
                />
                <h3
                  style={{
                    paddingLeft: "0.5rem",
                  }}
                >
                  {" "}
                  Practice on Diksha
                </h3>
              </div>
              <p
                style={{
                  paddingLeft: "0.5rem",
                  fontWeight: "300",
                }}
              >
                Diksha is a go to source for all things NCERT, it contains a lot
                of practice questions for you to do in{" "}
                {records.fields["Chapter Name"]}. They also have explanation
                videos, MCQs, Short Answer, Long Answer questions to help you
                with exam prep.
              </p>
              <Link
                href={{
                  pathname: "/diksha",
                  query: {
                    content: records.fields["prepareOnDiksha"],
                  },
                }}
              >
                <button className={styles.button}>Practice Now</button>
              </Link>
            </div>
          </div>
        ) : (
          <></>
        )}
        {
          <div className={styles.practiceCard}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3
                style={{
                  textDecoration: "none",
                  color: "green",
                  cursor: "pointer",
                  paddingLeft: "0.5rem",
                }}
              >
                NCERT Exemplar PDF {""}
              </h3>
              <p
                style={{
                  paddingLeft: "0.5rem",
                  fontWeight: "300",
                }}
              >
                NCERT Exemplar contains very good question sets. They help you
                prepare better for exams, boost confidence and more.
              </p>
              <Link href={records.fields["ncertExemplar"]}>
                <button className={styles.button}>
                  Download Now. It&apos;s free!
                </button>
              </Link>
            </div>
          </div>
        }
        </section>
    )
}

export async function getStaticProps(context) {
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
      props: { records: records },
       // will be passed to the page component as props
       revalidate: 604800,
      
    };
  }