import styled from "styled-components";
import backward from "../../../../assets/icons/backward.svg";
import nextward from "../../../../assets/icons/nextward.svg";

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
      <div className="back" onClick={displayPreviousExercise}>
        <img src={backward} />
        <span>préc.</span>
      </div>
      <h3>Devoir {number}</h3>
      <div className="next" onClick={displayNextExercise}>
        <span>suiv.</span>
        <img src={nextward} />
      </div>
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
  .back,
  .next {
    background-color: #f8f8fa;
    background: linear-gradient(to right, #fde047, #c2a205);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 45px;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s ease;
    img {
      width: 15px;
      margin: 0 10px;
    }
    span {
      font-size: 0.8rem;
    }
    &:hover {
      transform: scale(1.05);
    }
  }
  .back {
    width: 65px;
  }
  .next {
    width: 60px;
  }
`;
