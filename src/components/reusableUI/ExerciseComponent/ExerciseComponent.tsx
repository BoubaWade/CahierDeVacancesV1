import styled from "styled-components";
import Latex from "react-latex";
import { Exercise } from "../../../Types/dataTypes";
import QuestionsList from "./QuestionsList";
import BorderBeam from "../BorderBeam";
import ExerciseHeader from "./ExerciseHeader";

type ExerciseComponentProps = {
  exercise: Exercise;
  isActive: boolean;
  displayNextExercise: () => void;
  displayPreviousExercise: () => void;
};

export default function ExerciseComponent({
  exercise,
  isActive,
  displayNextExercise,
  displayPreviousExercise,
}: ExerciseComponentProps) {
  const { number, statements, questionsSolutions } = exercise;
  // const [toggleExercise, setToggleExercise] = useState(false);

  // const handleToggleExercise = (toggled: boolean) => {
  //   setToggleExercise(toggled);
  // };
  if (!isActive) {
    return null;
  }

  return (
    <ExerciseComponentStyled>
      <ExerciseHeader
        number={number}
        displayNextExercise={displayNextExercise}
        displayPreviousExercise={displayPreviousExercise}
      />
      {/* <h3>Exercice {number}</h3> */}

      {/* {toggleExercise && ( */}
      <div className="main">
        {/* <div className="statements"> */}
        {/* <BlockMath>{statements}</BlockMath> */}
        <h3>
          <Latex>{statements}</Latex>
        </h3>
        {/* </div> */}
        <QuestionsList questionsSolutions={questionsSolutions} />
        {/* <ExercisePlayer
          time={time}
          displayNextExercise={displayNextExercise}
          displayPreviousExercise={displayPreviousExercise}
        /> */}
      </div>
      {/* )} */}
      <BorderBeam className="border-beam" />
    </ExerciseComponentStyled>
  );
}
const ExerciseComponentStyled = styled.div`
  position: relative;
  width: 90vw;
  max-width: 1300px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  border-radius: 15px;
  margin-bottom: 50px;
  background-color: #f8f8fa;

  .main {
    width: 100%;
    border-radius: 0 0 10px 10px;
    padding-top: 50px;
    h3 {
      min-width: 350px;
      display: flex;
      justify-content: center;
      font-size: 1.1rem;
      font-weight: 400;
      padding: 10px;
      margin: 0 5px;
      border-bottom: none;
    }
  }
  .border-beam {
    z-index: -1;
    transform: translate(3px, -3px);
  }
`;
