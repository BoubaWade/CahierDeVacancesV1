import SolutionComponent from "./SolutionComponent";
import styled from "styled-components";
import { useState } from "react";
import { QuestionSolutions } from "../../../../Types/dataTypes";
import ExercisePlayer from "../../ExercisePlayer";
import MathJaxComponent from "../../MathJaxComponent";
import GeoGebraComponent from "../../GeoGebraComponent";
import Modal from "../../Modal/Modal";

type Props = {
  questionSolution: QuestionSolutions;
  index: number;
};

export default function QuestionSolution({ questionSolution, index }: Props) {
  const { question, solution, time, imgName, graph } = questionSolution;
  const totalTime = time;
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [openGraph, setOpenGraph] = useState(false);
  const imageUrl = imgName
    ? `${import.meta.env.VITE_IMAGES_PATH}${imgName}.png`
    : null;
  // if (latex.includes("Faire une figure" || "Tracer le graphique")) {
  // }
  return (
    <QuestionSolutionStyled>
      <div className="exercise-statement">
        <ul>
          <span className="number-of-sub-exercise"> {index + 1}</span>
          {imageUrl && <img src={imageUrl} className="graphic" />}
          {question[0] && (
            <li className="first-question-item">{question[0]}</li>
          )}
          {question.slice(1, question.length).map((line, index) => (
            <li key={index}>
              <MathJaxComponent latex={line.replace(/\\\\/g, "\\\\ ")} />
              {graph && line.includes("Faire une figure") ? (
                <button onClick={() => setOpenGraph(true)}>
                  Ouvrir le graphique
                </button>
              ) : null}
              <SolutionComponent solution={solution} timeLeft={timeLeft} />
            </li>
          ))}
        </ul>
      </div>
      <div className="player-container">
        <ExercisePlayer
          totalTime={totalTime}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
        />
      </div>
      {/* {graph && (
        <Modal
          open={openGraph}
          onClose={() => setOpenGraph(false)}
          className="modal-graph"
        >
          <GeoGebraComponent />
        </Modal>
      )} */}
    </QuestionSolutionStyled>
  );
}
const QuestionSolutionStyled = styled.div`
  flex-grow: 1;
  border-radius: 15px;
  max-width: 800px;
  .exercise-statement {
    background: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
    border: 1.5px dashed #888;
    border-bottom: none;
    ul {
      font-size: 1rem;
      font-weight: 400;
      line-height: 25px;
      .number-of-sub-exercise {
        display: inline-block;
        background: #c2a205;
        margin: -15px auto 20px;
        padding: 0 10px;
        border-radius: 3px;
      }
      .graphic {
        min-width: 250px;
        width: 60%;
        display: block;
        margin: 0 auto 30px;
      }
      .first-question-item {
        margin: 0 0 30px;
        font-weight: 500;
        font-size: 0.9rem;
        background: #cacfd7;
        padding: 10px;
        border-radius: 7px;
      }
      li {
        position: relative;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        font-size: 0.85rem;
        padding-left: 5px;
        font-weight: 500;
      }
    }
  }
  .player-container {
    background: linear-gradient(to right, #fde047, #c2a205);
    border-radius: 10px;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    border: 1.5px dashed #888;
  }
`;
