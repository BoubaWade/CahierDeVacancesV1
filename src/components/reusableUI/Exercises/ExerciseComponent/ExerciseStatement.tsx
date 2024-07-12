import styled from "styled-components";
import MathJaxComponent from "../../MathJaxComponent";
import SolutionComponent from "./SolutionComponent";
import { QuestionSolutions } from "../../../../Types/dataTypes";

type ExerciseStatementProps = {
  exerciseNumber: number;
  questionSolution: QuestionSolutions;
  timeLeft: number;
  handleUpdateScore: (scoreToAdd: number) => void;
};

export default function ExerciseStatement({
  exerciseNumber,
  questionSolution,
  timeLeft,
  handleUpdateScore,
}: ExerciseStatementProps) {
  const { question, solution, imgName, graph } = questionSolution;
  // const [openGraph, setOpenGraph] = useState(false);
  const imageUrl = imgName
    ? `${import.meta.env.VITE_IMAGES_PATH}${imgName}.png`
    : null;

  return (
    <ExerciseStatementStyled>
      <ul>
        <span className="number-of-sub-exercise">
          Exercice {exerciseNumber}
        </span>
        {imageUrl && <img src={imageUrl} className="graphic" />}
        {question[0] && <li className="first-question-item">{question[0]}</li>}
        {question.slice(1, question.length).map((line, index) => (
          <li key={index}>
            <MathJaxComponent latex={line.replace(/\\\\/g, "\\\\ ")} />
            {/* {graph && line.includes("Faire une figure") ? (
                <button onClick={() => setOpenGraph(true)}>
                  Ouvrir le graphique
                </button>
              ) : null} */}
            <SolutionComponent
              solution={solution}
              timeLeft={timeLeft}
              exerciseNumber={exerciseNumber}
              questionNumber={index + 1}
              updateResponseScore={handleUpdateScore}
            />
          </li>
        ))}
      </ul>
      {/* {graph && (
        <Modal
          open={openGraph}
          onClose={() => setOpenGraph(false)}
          className="modal-graph"
        >
          <GeoGebraComponent />
        </Modal>
      )} */}
    </ExerciseStatementStyled>
  );
}
const ExerciseStatementStyled = styled.div`
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
    width: 100%;
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
      margin-bottom: 20px;
    }
  }
`;
