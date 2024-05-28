import chevronUp from "../../../assets/icons/chevronUp.svg";
import chevronDown from "../../../assets/icons/chevronDown.svg";
import styled from "styled-components";
// import { useState } from "react";
import backward from "../../../assets/icons/backward.svg";
import nextward from "../../../assets/icons/nextward.svg";

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
  //   const [isChevronUp, setIsChevronUp] = useState(false);

  //   const handleToggleChevron = () => {
  //     handleToggleExercise(!isChevronUp);
  //     setIsChevronUp(!isChevronUp);
  //   };

  return (
    <ExerciseHeaderStyled>
      <div className="back" onClick={displayPreviousExercise}>
        <img src={backward} />
        <span>préc.</span>
      </div>
      <h3>Exercice {number}</h3>
      {/* {isChevronUp ? (
        <img src={chevronUp} onClick={() => handleToggleChevron()} />
      ) : (
        <img src={chevronDown} onClick={() => handleToggleChevron()} />
      )} */}
      <div className="next" onClick={displayNextExercise}>
        <span>suiv.</span>
        <img src={nextward} />
      </div>
    </ExerciseHeaderStyled>
  );
}
const ExerciseHeaderStyled = styled.div`
  /* background-color: #f8f8fa; */
  background-color: #201f1f;
  width: 100%;
  /* height: 30px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin-bottom: 50px;
  border-radius: 10px;
  box-shadow: 0 5px 15px #8c8c8c;

  h3 {
    color: #fff;
  }
  .back,
  .next {
    background-color: #f8f8fa;
    background: linear-gradient(to right, #fde047, #c2a205);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 50px;
    cursor: pointer;
    border-radius: 30px;
    /* border: 1.5px solid #a6a4a48a; */
    /* box-shadow: 0 2px 10px #c2c1c1; */
    transition: all 0.2s ease;

    img {
      width: 20px;
      margin: 0 10px;
    }
    span {
      font-size: 0.9rem;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
  .back {
    width: 65px;
  }
  .next {
    width: 60px;
  }
`;
