import styled from "styled-components";
import { useState } from "react";
import SecondaryButton from "../../SecondaryButton";
import ReactPlayer from "react-player/youtube";
import Modal from "../../Modal/Modal";
import MathJaxComponent from "../../MathJaxComponent";
import MathKeyboard from "../../MathKeyboard/MathKeyboard";

type SolutionComponentProps = {
  timeLeft: number;
  solution: string[];
  exerciseNumber: number;
  questionNumber: number;
  updateResponseScore: (scoreToAdd: number) => void;
};
const removeDollarSigns = (expression: string) => {
  if (expression && expression.includes("$")) {
    return expression.replace(/\$/g, "");
  } else {
    return expression;
  }
};
const removeSpaces = (expression: string) => {
  if (expression && expression.includes(" ")) {
    return expression.replace(/\s+/g, "");
  } else {
    return expression;
  }
};

const extractSolution = (solution: string[]) => {
  const lastLine = solution.slice(solution.length - 1, solution.length)[0];
  const result = removeSpaces(removeDollarSigns(lastLine));
  if (result && result.includes("=")) {
    const solutionSplited = result.split("=");
    if (solutionSplited) {
      const solutionExtracted = solutionSplited[solutionSplited.length - 1];
      return solutionExtracted;
    }
  } else {
    return result;
  }
};
export default function SolutionComponent({
  solution,
  timeLeft,
  exerciseNumber,
  questionNumber,
  updateResponseScore,
}: SolutionComponentProps) {
  const [displayHelp, setDisplayHelp] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [inputSolution, setInputSolution] = useState("");
  const [validationCounter, setValidationCounter] = useState(1);
  const [succes, setSucces] = useState(false);
  const [failure, setFailure] = useState(false);
  const [restSolutionDisplayed, setRestSolutionDisplayed] = useState(false);
  const responseButtonId = `${exerciseNumber} - ${questionNumber}`;
  const disabledCondition = validationCounter === 4 || succes;
  // const numberOfTotalQuestions = numberOfExercises * numberOfQuestions;
  // console.log(numberOfTotalQuestions);
  // console.log(
  //   extractSolution([
  //     "$\\mathrm{A}= 3 × 4x + 3 × 7 + 4 × 2x + 4 × (-9)$",
  //     "$\\mathrm{A}= 12x + 21 + 8x - 36$",
  //     "$\\mathrm{A}= 20x - 15$",
  //     "$\\mathrm{A}= 0x - 1$",
  //     " 2x - 19",
  //     "$\\mathrm{N}=\\left(3 x-\\frac{2}{3}\\right)^{2}$",
  //   ])
  // );
  // console.log(numberOfQuestions);
  const getSolutionValue = (value: string) => {
    setInputSolution(value);
  };
  // console.log(inputSolution);
  // console.log(extractSolution(solution));

  const handleValidateResponse = (e: React.MouseEvent) => {
    // console.log(responseScore);
    // console.log(e.currentTarget.id);
    if (inputSolution.length === 0) return;
    if (succes || failure) return;
    setValidationCounter((count) => count + 1);

    if (inputSolution === extractSolution(solution)) {
      setSucces(true);
      setFailure(false);
      let scoreToAdd = 0;

      if (validationCounter > 0 && validationCounter < 4) {
        scoreToAdd = 1 / validationCounter;
      }
      console.log(scoreToAdd);
      // if (timeLeft === 0) scoreToAdd = 0.5;
      if (displayHelp) scoreToAdd = 0.5;
      console.log(scoreToAdd);

      updateResponseScore(scoreToAdd);
    } else {
      setFailure(true);
      setSucces(false);
    }
  };
  const handleFocus = () => {
    // setSucces(false);
    if (validationCounter > 3) return;
    setFailure(false);
  };
  return (
    <SolutionComponentStyled>
      <MathKeyboard
        getSolutionValue={getSolutionValue}
        handleFocus={handleFocus}
      />
      <div className={displayHelp ? "help visible" : "help"}>
        <span style={{ display: "block", marginBottom: "5px" }}>
          {!restSolutionDisplayed ? "Début de solution" : "La solution"} :
        </span>
        {solution[0] && (
          <div
            style={{
              fontSize: "0.9rem",
              marginBottom: "5px",
              color: "#416c39",
            }}
          >
            <MathJaxComponent latex={solution[0]} />
          </div>
        )}
        {restSolutionDisplayed &&
          solution.slice(1, solution.length).map((line, index) => (
            <div
              key={index}
              style={{
                fontSize: "0.9rem",
                marginBottom: "5px",
                color: "#416c39",
              }}
            >
              <MathJaxComponent latex={line} />
            </div>
          ))}
        {!restSolutionDisplayed && (
          <SecondaryButton
            type="button"
            label="Reste de la solution"
            className="solution-button"
            onClick={() => setRestSolutionDisplayed(true)}
          />
        )}
      </div>
      <div className="buttons-container">
        {!displayHelp ? (
          <SecondaryButton
            label="Afficher l'aide"
            className={`help-button ${timeLeft !== 0 ? "inActive" : "active"}`}
            onClick={() => setDisplayHelp(true)}
            disabled={timeLeft !== 0 ? true : false}
          />
        ) : (
          <SecondaryButton
            label="Cacher l'aide"
            className="help-button"
            onClick={() => {
              setDisplayHelp(false);
              // setIsOpenModal(true);
              // setRestSolutionDisplayed(false);
            }}
          />
        )}
        <SecondaryButton
          id={responseButtonId}
          label="Valider"
          className={`validate-button ${
            disabledCondition || restSolutionDisplayed ? "finished" : ""
          }`}
          onClick={(e) => {
            handleValidateResponse(e);
            // setIsOpenModal(true);
          }}
          disabled={disabledCondition || restSolutionDisplayed}
        />
      </div>
      {succes && <span style={{ color: "#416c39" }}>Bonne réponse !</span>}
      {failure && <span style={{ color: "red" }}>Mauvaise réponse !</span>}
      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          controls={true}
          style={{ margin: "0 auto" }}
        />
      </Modal>
    </SolutionComponentStyled>
  );
}
const SolutionComponentStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  .help {
    display: none;
    p {
      text-align: center;
      padding: 5px;
    }
  }
  .help.visible {
    display: block;
    .solution-button {
      padding: 5px 10px;
      border-radius: 5px;
    }
  }
  .buttons-container {
    max-width: 480px;
    display: flex;
    justify-content: flex-end;
    button {
      background-color: #ebeaea;
      border-color: #949292;
      color: #000;
      border-radius: 5px;
      font-size: 0.9rem;
      font-weight: 400;
      padding: 5px 20px;
      margin: 0 3px;
    }
    .help-button {
      padding-left: 12px;
      padding-right: 12px;
    }
    .active {
      background: #201f1fe7;
      border-color: #000;
      border: 1px solid #416c39;
      color: #fcfcfc;
      &:hover {
        background: #000;
      }
    }
    .inActive {
      color: #cac9c9;
      pointer-events: none;
    }
    .validate-button {
      background: #4c7f43;
      border-color: #4c7f43;
      color: #fcfcfc;
      &:hover {
        background: #416c39;
      }
      &.finished {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
`;
