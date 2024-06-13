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

  return (
    <ExercicesTroisiemeStyled>
      <h1> Exercices : {exercises[0]?.lesson}</h1>
      <PrimaryButton
        label="retour au tableau de bord"
        className="return-dashboard-button"
        onClick={() => navigate("/dashboard")}
      />
      <ExercisesList exercises={exercises} />
      <DotPattern />
    </ExercicesTroisiemeStyled>
  );
}

const ExercicesTroisiemeStyled = styled.div`
  padding: 20px 0;
  overflow-x: hidden;
  h1 {
    font-size: 1.6rem;
    text-align: center;
    margin: 20px 0;
  }
  .return-dashboard-button {
    position: absolute;
    top: 5px;
    left: 15px;
    font-size: 0.7rem;
    margin-top: 0;
    margin-bottom: 20px;
    padding: 8px 10px;
  }
`;
