import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../../app/store";
import {
  getTodosCompleted,
  getTodosIncompleted,
} from "../../../../utils/utilsFunctions";

export default function Header() {
  const { toDoExercises } = useSelector((state: RootState) => state.dashboard);
  const { user } = useSelector((state: RootState) => state.auth);
  const userName = user?.user_metadata?.name
    ? user?.user_metadata?.name
    : user?.email?.split("@")[0];

  const todosCompleted = getTodosCompleted(toDoExercises);
  const todosIncompleted = getTodosIncompleted(toDoExercises);

  return (
    <HeaderStyled>
      <div className="welcome">
        <h3>{userName}</h3>
      </div>
      <div className="courses-status">
        <div className="courses-inProgress">
          <span>{todosIncompleted.length}</span>
          <p>Exercice(s) restant(s)</p>
        </div>
        <div className="courses-completed">
          <span>{todosCompleted.length}</span>
          <p>Exercice(s) términé(s)</p>
        </div>
      </div>
    </HeaderStyled>
  );
}
const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 867px;
  min-width: 795px;
  height: 100px;
  margin: 0 auto 20px;
  .welcome {
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
      margin-bottom: 5px;
      font-weight: 600;
    }
    p {
      font-size: 0.9rem;
    }
  }
  .courses-status {
    display: flex;
    .courses-completed,
    .courses-inProgress {
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
      span {
        width: 40%;
        font-size: 1.8rem;
        font-weight: 700;
      }
      p {
        width: 60%;
        font-size: 0.7rem;
        font-weight: 500;
      }
    }
    .courses-completed {
      span {
        color: #4c7f43;
      }
    }
    .courses-inProgress {
      span {
        color: #a80202;
      }
    }
  }
  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 0;
    height: auto;
    row-gap: 10px;
    margin-bottom: 10px;
    .welcome {
      width: 500px;
      height: 70px;
    }
    .courses-status {
      width: 500px;
      justify-content: space-between;
      column-gap: 20px;
      .courses-completed,
      .courses-inProgress {
        width: 50%;
        height: 70px;
        margin: 0;
      }
    }
  }
`;
