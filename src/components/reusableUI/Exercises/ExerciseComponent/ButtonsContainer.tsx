import styled from "styled-components";
import SecondaryButton from "../../SecondaryButton";
type ButtonsContainerProps = {
  timeLeft: number;
  exerciseNumber: number;
  questionNumber: number;
  displayHelp: boolean;
  setDisplayHelp: React.Dispatch<React.SetStateAction<boolean>>;
  restSolutionDisplayed: boolean;
  handleValidateResponse: (e: React.MouseEvent) => void;
  validationCounter: number;
  success: boolean;
};

export default function ButtonsContainer({
  timeLeft,
  exerciseNumber,
  questionNumber,
  displayHelp,
  setDisplayHelp,
  restSolutionDisplayed,
  handleValidateResponse,
  validationCounter,
  success,
}: ButtonsContainerProps) {
  const responseButtonId = `${exerciseNumber} - ${questionNumber}`;
  const disabledCondition = validationCounter === 3 || success;

  return (
    <ButtonsContainerStyled>
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
          onClick={() => setDisplayHelp(false)}
        />
      )}
      <SecondaryButton
        id={responseButtonId}
        label="Valider"
        onClick={(e) => handleValidateResponse(e)}
        disabled={disabledCondition || restSolutionDisplayed}
        className={`validate-button ${
          disabledCondition || restSolutionDisplayed ? "finished" : ""
        }`}
      />
    </ButtonsContainerStyled>
  );
}
const ButtonsContainerStyled = styled.div`
  max-width: 480px;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  button {
    background-color: #ebeaea;
    border-color: #ebeaea;
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
`;
