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
        <div className="todo-infos">
          <h3>Énigme de la semaine</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            suscipit voluptatem cum itaque excepturi error eos. Laudantium
            molestias vel quas maxime est voluptatum, ut minima suscipit facere,
            optio, non beatae.
          </p>
        </div>
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
  height: 100%;
  .todo-counter-container {
    display: flex;
    width: 90%;
    height: 270px;
    column-gap: 20px;
    .todo-counter {
      background: #f1f2f3;
      width: 40%;
      padding: 10px;
      border-radius: 7px;
      border: 1px solid #d9d7d7;
      box-shadow: 0px 4px 20px -10px rgba(0, 0, 0, 0.6);
      h3 {
        background: #000;
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
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
    .todo-infos {
      background: #f1f2f3;
      width: 60%;
      padding: 10px;
      border-radius: 7px;
      border: 1px solid #d9d7d7;
      box-shadow: 0px 4px 20px -10px rgba(0, 0, 0, 0.6);
      h3 {
        margin: 15px 0 10px;
        text-align: center;
      }
      p {
        font-size: 0.9rem;
        padding: 3px;
      }
    }
  }
`;
