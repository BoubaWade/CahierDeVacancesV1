import styled from "styled-components";
import ToDoList from "./ToDoList";

export default function Todo() {
  return (
    <TodoStyled>
      <div className="todo-counter-container">
        <div className="todo-counter">
          <h3>Récapitulatif</h3>
          <p>
            En attente : <span>1</span>
          </p>
          <p>
            Complète(s) : <span>5</span>
          </p>
        </div>
        <div className="quote-of-the-month"></div>
      </div>
      <ToDoList />
    </TodoStyled>
  );
}
const TodoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(#2d6a4f 0.75px, transparent 0.75px),
    radial-gradient(#2d6a4f 0.75px, #ffffff 0.75px);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
  .todo-counter-container {
    display: flex;
    width: 90%;
    height: 110px;
    column-gap: 20px;
    margin-top: 50px;
    .todo-counter {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #f1f2f3;
      width: 30%;
      padding: 10px;
      border-radius: 7px;
      border: 1px solid #d9d7d7;
      box-shadow: 0px 2px 15px -10px rgba(0, 0, 0, 0.6);
      h3 {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 15px;
        padding: 5px 0;
        border-radius: 6px;
      }
      p {
        font-size: 0.9rem;
        padding: 3px;
        span {
          font-size: 1.1rem;
          font-weight: 700;
          color: red;
        }
      }
    }
    .quote-of-the-month {
      background: #f1f2f3;
      width: 70%;
      border: 1px solid #d9d7d7;
      border-radius: 10px;
    }
  }
`;
