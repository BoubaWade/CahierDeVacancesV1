import styled from "styled-components";
import ExercisesList from "./ExercisesList";
import DotPattern from "../DotPattern";
import { Exercise } from "../../../Types/dataTypes";
import PrimaryButton from "../PrimaryButton";
import { useNavigate } from "react-router-dom";

type ExercisesProps = {
  exercises: Exercise[];
};
export default function Exercises({ exercises }: ExercisesProps) {
  const navigate = useNavigate();
  const exercicesSorted = exercises.sort((a, b) => a.number - b.number);

  return (
    <ExercicesTroisiemeStyled>
      <PrimaryButton
        label="retour au tableau de bord"
        className="return-dashboard-button"
        onClick={() => navigate("/dashboard")}
      />
      <h1> Exercices : {exercicesSorted[0]?.lesson}</h1>
      <ExercisesList exercises={exercicesSorted} />
      <DotPattern />
    </ExercicesTroisiemeStyled>
  );
}

const ExercicesTroisiemeStyled = styled.div`
  padding: 20px 0;
  overflow-x: hidden;
  h1 {
    font-size: 1.5rem;
    text-align: center;
    margin: 20px 0;
  }
  .return-dashboard-button {
    font-size: 0.7rem;
    margin-left: 50%;
    margin-top: 0;
    transform: translateX(-50%);
    padding: 8px 10px;
  }
`;
