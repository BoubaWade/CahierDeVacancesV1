import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../../app/store";

export default function TodoListRecently() {
  const { toDoExercises } = useSelector((state: RootState) => state.dashboard);
  const todoRecentlyDatas = toDoExercises.slice(0, 5);

  return (
    <TodoListRecentlyStyled>
      <h3>Récents devoirs</h3>
      {todoRecentlyDatas.length === 0 && (
        <p className="empty-todoRecent">Pas de devoirs récents</p>
      )}
      <ul>
        {todoRecentlyDatas.map((data, index) => (
          <li key={index}>
            <span>{data.lesson}</span>
            <span>Exercice: {data.number}</span>
          </li>
        ))}
      </ul>
    </TodoListRecentlyStyled>
  );
}
const TodoListRecentlyStyled = styled.div`
  width: 460px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
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
    top: 40px;
  }
  .empty-todoRecent {
    font-style: italic;
  }
  ul {
    width: 100%;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 15px;
      span {
        font-size: 0.9rem;
        font-weight: 500;
      }
    }
  }
`;
