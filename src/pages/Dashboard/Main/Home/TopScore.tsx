import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../../app/store";
import { getTodosCompleted } from "../../../../utils/functions";

export default function TopScore() {
  const { toDoExercisesByLevel } = useSelector(
    (state: RootState) => state.dashboard
  );

  const todosCompleted = getTodosCompleted(toDoExercisesByLevel);
  const scoreArray = todosCompleted.map((todo) => todo.scoreAverage);
  const bestScore = scoreArray.reduce((max, current) => {
    return current > max ? current : max;
  }, scoreArray[0]);
  const score = bestScore || bestScore === 0;

  return (
    <TopScoreStyled>
      <h3>
        Meilleur score :
        <span>{score ? `${Math.ceil(bestScore * 100)}%` : "--"}</span>
      </h3>
    </TopScoreStyled>
  );
}
const TopScoreStyled = styled.div`
  background: #f1f2f3;
  width: 60%;
  max-width: 500px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
  transition: all 300ms ease;
  &:hover {
    box-shadow: none;
  }
  h3 {
    font-size: 1rem;
    margin-bottom: 5px;
    font-weight: 600;
    span {
      font-size: 1.2rem;
      color: #008000;
      display: block;
      margin-top: 5px;
    }
  }
  @media (max-width: 1150px) {
    width: 500px;
    height: 80px;
    h3 {
      margin-bottom: 0;
    }
  }
`;
