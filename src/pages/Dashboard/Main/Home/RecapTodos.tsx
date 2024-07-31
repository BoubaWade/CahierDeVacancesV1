import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import {
  getTodosCompleted,
  getTodosIncompleted,
} from "../../../../utils/functions";
import styled from "styled-components";
import { getRecapTodosFields } from "../../../../data/datasConfig";

export default function RecapTodos() {
  const { toDoExercisesByLevel } = useSelector(
    (state: RootState) => state.dashboard
  );

  const todosCompleted = getTodosCompleted(toDoExercisesByLevel);
  const todosIncompleted = getTodosIncompleted(toDoExercisesByLevel);
  const fields = getRecapTodosFields(todosCompleted, todosIncompleted);

  return (
    <RecapTodosStyled>
      {fields.map(({ className, text, length }, index) => (
        <div key={index} className={className}>
          <span className="length">{length}</span>
          <p className="text">{text}</p>
        </div>
      ))}
    </RecapTodosStyled>
  );
}
const RecapTodosStyled = styled.div`
  display: flex;
  .todos {
    background: #f1f2f3;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    margin-left: 15px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
    transition: all 300ms ease;
    &:hover {
      box-shadow: none;
    }
    .length {
      width: 40%;
      font-size: 1.8rem;
      font-weight: 700;
    }
    .text {
      width: 60%;
      font-size: 0.7rem;
      font-weight: 500;
    }
  }
  .completed {
    .length {
      color: #4c7f43;
    }
  }
  .incompleted {
    .length {
      color: #a80202;
    }
  }
  @media (max-width: 1150px) {
    width: 500px;
    justify-content: space-between;
    column-gap: 20px;
    .todos {
      width: 50%;
      height: 70px;
      margin: 0;
    }
  }
`;
