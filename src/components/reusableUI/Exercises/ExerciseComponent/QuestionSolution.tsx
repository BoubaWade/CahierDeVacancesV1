import SolutionComponent from "./SolutionComponent";
import styled from "styled-components";
import { useState } from "react";
import { QuestionSolutions } from "../../../../Types/dataTypes";
import MathKeyboard from "../../../MathKeyboard";
import ExercisePlayer from "../../ExercisePlayer";
import MathJaxComponent from "../../MathJaxComponent";
// import imgg from "../../../../../public/images/theoreme-de-pythagore-img1.png";

type Props = {
  questionSolution: QuestionSolutions;
  index: number;
};

export default function QuestionSolution({ questionSolution, index }: Props) {
  const { question, solution, time, imgName } = questionSolution;
  const totalTime = time;
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const imageUrl = imgName
    ? `${import.meta.env.VITE_IMAGES_PATH}${imgName}.png`
    : null;

  return (
    <QuestionSolutionStyled>
      <div className="exercise-statement">
        <ul>
          <span className="number-of-sub-exercise">{index + 1}</span>
          {imageUrl && <img src={imageUrl} />}
          {question[0] && (
            <li
              style={{
                margin: "0 0 30px",
                fontWeight: "500",
                fontSize: "0.9rem",
                background: "#7dd3fc",
                padding: "10px",
                borderRadius: "7px",
              }}
            >
              {question[0]}
            </li>
          )}
          {question.slice(1, question.length).map((line, index) => (
            <li key={index}>
              <MathJaxComponent latex={line.replace(/\\\\/g, "\\\\ ")} />
              <MathKeyboard />
            </li>
          ))}
        </ul>
        <SolutionComponent solution={solution} timeLeft={timeLeft} />
      </div>
      <div className="player-container">
        <ExercisePlayer
          totalTime={totalTime}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
        />
      </div>
    </QuestionSolutionStyled>
  );
}
const QuestionSolutionStyled = styled.div`
  background: #fff;
  display: flex;
  flex-grow: 1;
  padding: 5px;
  border-radius: 15px;
  max-width: 620px;
  &:nth-child(even) {
    flex-direction: row-reverse;
    .player-container {
      border-right: none;
    }
  }
  &:nth-child(odd) {
    .player-container {
      border-left: none;
    }
  }
  .exercise-statement {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    padding: 15px;
    border-radius: 10px;
    border: 1px dashed #888;
    ul {
      font-size: 1rem;
      font-weight: 400;
      line-height: 25px;
      .number-of-sub-exercise {
        display: inline-block;
        /* width: calc(100% + 30px); */
        /* transform: translateX(-15px); */
        /* text-align: center; */
        /* background: linear-gradient(to right, #fde047, #c2a205); */
        background: #c2a205;
        /* margin-bottom: 20px;
        margin-top: -15px; */
        margin: -15px auto 20px;
        padding: 0 10px;
        /* border-radius: 50px; */
      }
      img {
        width: 60%;
        display: block;
        margin: 0 auto 30px;
      }
      li {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        font-size: 0.85rem;
        padding-left: 20px;
        font-weight: 500;
        /* white-space: normal;
        overflow-wrap: break-word;
        word-wrap: break-word;
        max-width: 100%; */
        /* .MathJax {
          font-style: normal;
        } */
      }
    }
  }
  .player-container {
    background: linear-gradient(to right, #fde047, #c2a205);
    border-radius: 10px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;
  }
`;
