import styled from "styled-components";
import bell from "../../../assets/icons/bell.svg";
import { RootState } from "../../../app/store";
import { useSelector } from "react-redux";
import { getTodosIncompleted } from "../../../utils/functions";

export default function Notifications() {
  const { toDoExercisesByLevel } = useSelector(
    (state: RootState) => state.dashboard
  );

  const todosIncompleted = getTodosIncompleted(toDoExercisesByLevel);
  const numberTodos = todosIncompleted.length;

  return (
    <NotificationsStyled>
      {numberTodos !== 0 ? <span className="count">{numberTodos}</span> : null}
      <img src={bell} />
    </NotificationsStyled>
  );
}
const NotificationsStyled = styled.div`
  font-size: 20px;
  position: relative;
  .count {
    position: absolute;
    top: -6px;
    right: -6px;
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50%;
    color: #f8f8fa;
    font-weight: 700;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
