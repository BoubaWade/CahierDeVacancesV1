import styled from "styled-components";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import Modal from "../../Modal/Modal";
import ButtonsContainer from "./ButtonsContainer";
import useSolution from "../../../../hooks/useSolution";
import SolutionContainer from "./SolutionContainer";
import { RadioOption, TableCell } from "../../../../Types/dataTypes";
import InputsResponse from "./InputsResponse";

type SolutionComponentProps = {
  timeLeft: number;
  solution: string[];
  exerciseNumber: number;
  questionNumber: number;
  updateResponseScore: (scoreToAdd: number) => void;
  radio: boolean | undefined;
  options: RadioOption[] | undefined;
  editTableData: TableCell[][] | undefined;
};

export default function SolutionComponent({
  solution,
  timeLeft,
  exerciseNumber,
  questionNumber,
  updateResponseScore,
  radio,
  options,
  editTableData,
}: SolutionComponentProps) {
  const { handlers, states, setters } = useSolution(
    solution,
    updateResponseScore
  );
  const { getSolutionValue, handleValidateResponse, handleFocus } = handlers;
  const { displayHelp, success, failure, validationCounter } = states;
  const { setDisplayHelp } = setters;

  const [restSolutionDisplayed, setRestSolutionDisplayed] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

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

  return (
    <SolutionComponentStyled>
      {!editTableData && (
        <InputsResponse
          radio={radio}
          getSolutionValue={getSolutionValue}
          handleFocus={handleFocus}
          options={options}
        />
      )}
      <SolutionContainer
        solution={solution}
        displayHelp={displayHelp}
        restSolutionDisplayed={restSolutionDisplayed}
        setRestSolutionDisplayed={setRestSolutionDisplayed}
      />
      <ButtonsContainer
        timeLeft={timeLeft}
        exerciseNumber={exerciseNumber}
        questionNumber={questionNumber}
        displayHelp={displayHelp}
        setDisplayHelp={setDisplayHelp}
        restSolutionDisplayed={restSolutionDisplayed}
        handleValidateResponse={handleValidateResponse}
        validationCounter={validationCounter}
        success={success}
      />
      {success && <span className="success">Bonne réponse !</span>}
      {failure && <span className="failure">Mauvaise réponse !</span>}
      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <ReactPlayer url="" controls={true} style={{ margin: "0 auto" }} />
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
  .success {
    color: #416c39;
  }
  .failure {
    color: #fa755a;
  }
`;
