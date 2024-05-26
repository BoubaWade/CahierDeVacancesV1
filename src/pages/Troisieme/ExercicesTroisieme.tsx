import styled from "styled-components";
import ExercisesList from "./ExercisesList";
import DotPattern from "../../components/reusableUI/DotPattern";

export default function ExercicesTroisieme() {
  return (
    <ExercicesTroisiemeStyled>
      <ExercisesList />
      <DotPattern />
    </ExercicesTroisiemeStyled>
  );
}

const ExercicesTroisiemeStyled = styled.div`
  padding: 30px 0;
`;
