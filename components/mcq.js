/** @format */

import styles from "../styles/Home.module.css";
import { useState } from "react";
import striptags from "striptags";
import Image from "next/image";
import { Parser } from "html-to-react";

export default function MCQ(props) {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = () => {
    setIsSubmitted(true);
  };

  const handleClick = (index) => {
    setSelectedIndex(index);
    setIsSelected(true);
  };
  const HtmlToReactParser = new Parser();

  const allowedTags = new Set(["sup", "sub"]);

  const alphabet = ["A", "B", "C", "D"];

  return (
    <div className={styles.question}>
      <p>{HtmlToReactParser.parse(striptags(props.question, allowedTags))}</p>
      <p
        style={{
          fontWeight: "light",
          color: "grey",
          cursor: "pointer",
        }}
        onClick={() =>
          alert(
            "Always draw figures when you are solving a numerical problem 🤞🏻\n "
          )
        }
      >
        ⓘ{" "}
      </p>

      {props.imageURL === "" ? null : (
        <Image
          src={`https://diksha.gov.in/assets/public/content/h5p/${props.contentID}/content/content//${props.imageURL}`}
          alt=" "
          height={300}
          width={400}
        />
      )}

      <div>
        {props.answer.map((answer, index) => {
          return (
            <div
              key={index}
              className={styles.answer}
              onClick={(_) => handleClick(index)}
            >
              {selectedIndex === index ? (
                <div className={styles.answerChosen}>
                  {alphabet[index] +
                    ". " +
                    HtmlToReactParser.parse(
                      striptags(answer["text"], allowedTags)
                    )}
                </div>
              ) : (
                <>
                  {alphabet[index] +
                    ". " +
                    HtmlToReactParser.parse(
                      striptags(answer["text"], allowedTags)
                    )}
                </>
              )}
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          marginRight: "10px",
          marginLeft: "10px",
        }}
      >
        {}
        {isSubmitted === true ? (
          <div className={styles.correctAnswer}>
            Answer: {HtmlToReactParser.parse(striptags(props.correctAnswer))}
          </div>
        ) : (
          <button
            className={
              isSelected === true
                ? styles.submitButton
                : styles.submitButtonDisabled
            }
            onClick={onSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
