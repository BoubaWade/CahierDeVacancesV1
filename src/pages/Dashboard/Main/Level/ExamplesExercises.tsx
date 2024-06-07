import styled from "styled-components";
import { LevelState } from "../../../../Types/layoutTypes";
import ExampleTroisieme from "./ExampleTroisieme";
import ExampleTerminale from "./ExampleTerminale";
import ExamplePremiere from "./ExamplePremiere";

type ExamplesExercisesProps = {
  state: LevelState;
};

export default function ExamplesExercises({ state }: ExamplesExercisesProps) {
  const { isTroisiemeActive, isPremiereActive, isTerminaleActive } = state;

  return (
    <ExamplesExercisesStyled>
      <h4> Exemple d'exercices</h4>
      {isTroisiemeActive && <ExampleTroisieme />}
      {isPremiereActive && <ExamplePremiere />}
      {isTerminaleActive && <ExampleTerminale />}
    </ExamplesExercisesStyled>
  );
}

const ExamplesExercisesStyled = styled.div`
  background: #fbfafa;
  grid-area: 1 / 2 / 3 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1);
  h4 {
    margin-bottom: 40px;
  }
  .exercise {
    margin-bottom: 40px;
    p {
      margin-bottom: 5px;
      line-height: 20px;
      &:first-child {
        font-weight: 500;
        margin-bottom: 15px;
      }
      &:not(:first-child) {
        font-size: 14px;
      }
    }
  }
  img {
    width: 60%;
    height: 200px;
    display: block;
    margin: 20px auto 0;
  }
`;
