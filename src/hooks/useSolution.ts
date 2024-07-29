import { useState } from "react";
import { extractSolution } from "../utils/utilsFunctions";

export default function useSolution(
  solution: string[],
  updateResponseScore: (scoreToAdd: number) => void
) {
  const [displayHelp, setDisplayHelp] = useState(false);
  const [inputSolution, setInputSolution] = useState("");
  const [validationCounter, setValidationCounter] = useState(1);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const handleValidateResponse = (e: React.MouseEvent) => {
    // console.log(e.currentTarget.id);
    // array.push({ exercise: exerciseNumber, question: questionNumber });
    // console.log(array);

    if (inputSolution.length === 0) return;
    if (success || failure) return;
    setValidationCounter((count) => count + 1);

    if (inputSolution === extractSolution(solution)) {
      setSuccess(true);
      setFailure(false);

      let scoreToAdd = 0;
      if (validationCounter > 0 && validationCounter < 3) {
        scoreToAdd = 1 / validationCounter;
      }
      if (displayHelp) {
        scoreToAdd = 0.5;
      }
      updateResponseScore(scoreToAdd);
    } else {
      setFailure(true);
      setSuccess(false);
    }
  };
  const handleFocus = () => {
    if (validationCounter > 2) return;
    setFailure(false);
  };
  const getSolutionValue = (value: string) => {
    setInputSolution(value);
  };

  return {
    // getSolutionValue,
    // handleValidateResponse,
    // handleFocus,
    // displayHelp,
    // setDisplayHelp,
    // success,
    // failure,
    // validationCounter,
    handlers: {
      getSolutionValue,
      handleValidateResponse,
      handleFocus,
    },
    states: {
      displayHelp,
      success,
      failure,
      validationCounter,
    },
    setters: {
      setDisplayHelp,
    },
  };
}
