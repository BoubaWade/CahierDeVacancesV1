import styled from "styled-components";
import ExercisesList from "./ExercisesList";
import DotPattern from "../../components/reusableUI/DotPattern";

export default function Exercises() {
  return (
    <ExercicesTroisiemeStyled>
      <h1>Exerices sur le Calcul Littéral</h1>
      <ExercisesList />
      <DotPattern />
    </ExercicesTroisiemeStyled>
  );
}

const ExercicesTroisiemeStyled = styled.div`
  padding: 20px 0;
  h1 {
    font-size: 1.6rem;
    text-align: center;
    margin: 20px 0;
  }
`;
