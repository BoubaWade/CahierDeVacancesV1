import styled from "styled-components";
import { Exercise } from "../../../../Types/dataTypes";

type TodosRecently = {
  todos: Exercise[];
};

export default function TodosRecently({ todos }: TodosRecently) {
  return (
    <TodosRecentlyStyled>
      {todos.map(({ lesson, number }, index) => (
        <li key={index}>
          <span>{lesson}</span>
          <span>Exercice: {number}</span>
        </li>
      ))}
    </TodosRecentlyStyled>
  );
}
const TodosRecentlyStyled = styled.ul`
  width: 100%;
  margin-top: 40px;
  li {
    background: #c8c8c887;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
    margin: 0 5px 3px;
    border-radius: 5px;
    span {
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
`;
