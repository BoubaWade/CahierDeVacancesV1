import styled from "styled-components";
import MathJaxComponent from "../../MathJaxComponent";
import SecondaryButton from "../../SecondaryButton";
import RestSolution from "./RestSolution";

type SolutionContainerProps = {
  solution: string[];
  displayHelp: boolean;
  restSolutionDisplayed: boolean;
  setRestSolutionDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SolutionContainer({
  solution,
  displayHelp,
  restSolutionDisplayed,
  setRestSolutionDisplayed,
}: SolutionContainerProps) {
  const firstLine = solution[0];
  const restSolution = solution.slice(1, solution.length);

  return (
    <SolutionContainerStyled className={displayHelp ? "help visible" : "help"}>
      <span className="solution-info">
        {!restSolutionDisplayed ? "Début de solution" : "La solution"} :
      </span>
      {firstLine && <MathJaxComponent latex={firstLine} className="line" />}
      {restSolutionDisplayed && <RestSolution restSolution={restSolution} />}
      {!restSolutionDisplayed && (
        <SecondaryButton
          label="Reste de la solution"
          className="solution-button"
          onClick={() => setRestSolutionDisplayed(true)}
        />
      )}
    </SolutionContainerStyled>
  );
}

const SolutionContainerStyled = styled.div`
  .solution-info {
    display: block;
    margin-bottom: 5px;
  }
  .line {
    font-size: 0.9rem;
    margin-bottom: 5px;
    color: #416c39;
  }
`;
