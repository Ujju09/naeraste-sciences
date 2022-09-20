/** @format */

import styles from "../styles/Home.module.css";
import Script from "next/script";
import MCQ from "../components/mcq";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Diksha(data) {
  const router = useRouter();
  const { content } = router.query;
  const questions = data.data["questions"];
  const questionsArray = Object.entries(questions);
  questionsArray.pop(questionsArray.length); // remove last element as it contains different object.

  return (
    <div className={styles.mainDiksha}>
      <Script
        id="MathJax-script"
        async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
      ></Script>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DGC187B0GF" id='1'></Script>
<Script id='2'>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DGC187B0GF')`};
</Script>
      <h2>nae raste│practice</h2>

      <div className={styles.questionCard}>
        {questionsArray.map((question, index) => {
          const questionObj = question[1]["params"]["answers"];
          const mediaObj = question[1]["params"]["media"]["params"];
          const containsURL = mediaObj.hasOwnProperty("file");
          const correctAnswer = Object.entries(
            questionObj.find((answer) => answer["correct"] === true)
          );

          return (
            <MCQ
              key={index}
              question={
                index + 1 + "." + " " + question[1]["params"]["question"]
              }
              answer={question[1]["params"]["answers"]}
              correctAnswer={correctAnswer[2][1]}
              imageURL={containsURL ? mediaObj["file"]["path"] : ""}
              contentID={content}
            />
          );
        })}
      </div>
      <div className={styles.footer}>
        <p>Powered by </p>
        <span>
          <a href="https://diksha.gov.in">
            <Image src="/diksha.svg" alt="logo" height={50} width={50} />
          </a>
        </span>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { content } = context.query;

  const res = await fetch(
    `https://diksha.gov.in/assets/public/content/h5p/${content}/content/content/content.json`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
