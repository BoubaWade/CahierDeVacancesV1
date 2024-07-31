import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../../app/store";
import TodosRecently from "./TodosRecently";

export default function TodosRecentlyContainer() {
  const { toDoExercisesByLevel } = useSelector(
    (state: RootState) => state.dashboard
  );
  const todosRecently = toDoExercisesByLevel.slice(0, 6);
  const hasLength = todosRecently.length !== 0;

  return (
    <TodosRecentlyContainerStyled>
      <h3>Récents devoirs</h3>
      {hasLength ? (
        <TodosRecently todos={todosRecently} />
      ) : (
        <p className="empty">Pas de devoirs récents</p>
      )}
    </TodosRecentlyContainerStyled>
  );
}
const TodosRecentlyContainerStyled = styled.div`
  width: 500px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f1f2f3;
  border-radius: 8px;
  margin-right: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
  transition: all 300ms ease;
  &:hover {
    box-shadow: none;
  }
  h3 {
    font-weight: 700;
    font-size: 1rem;
    position: absolute;
    top: 20px;
  }
  .empty {
    font-style: italic;
  }
  @media (max-width: 1150px) {
    margin: 0;
  }
`;
