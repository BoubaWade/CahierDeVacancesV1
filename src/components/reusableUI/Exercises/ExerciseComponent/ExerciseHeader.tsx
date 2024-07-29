import styled from "styled-components";
import backward from "../../../../assets/icons/backward.svg";
import nextward from "../../../../assets/icons/nextward.svg";
import TertiaryButton from "../../TertiaryButton";

type ExerciseHeaderProps = {
  number: number;
  displayNextExercise: () => void;
  displayPreviousExercise: () => void;
};

export default function ExerciseHeader({
  number,
  displayNextExercise,
  displayPreviousExercise,
}: ExerciseHeaderProps) {
  return (
    <ExerciseHeaderStyled>
      <TertiaryButton
        src={backward}
        label="préc."
        className="back"
        onClick={displayPreviousExercise}
      />
      <h3>{number}</h3>
      <TertiaryButton
        src={nextward}
        label="suiv."
        className="next"
        onClick={displayNextExercise}
      />
    </ExerciseHeaderStyled>
  );
}
const ExerciseHeaderStyled = styled.div`
  background-color: #201f1fe7;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 5px;
  border-radius: 5px;
  h3 {
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
  }
  .back {
    width: 65px;
  }
  .next {
    width: 60px;
    flex-direction: row-reverse;
  }
`;
