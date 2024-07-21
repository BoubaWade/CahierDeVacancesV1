import styled from "styled-components";
import GlobalScore from "./GlobalScore";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { getTodosCompleted } from "../../../../utils/utilsFunctions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import CustomTooltip from "./CustomTooltip";

export default function ToDoInfos() {
  const { todoFilteredBySelect } = useSelector(
    (state: RootState) => state.dashboard
  );
  const todosCompleted = getTodosCompleted(todoFilteredBySelect);
  const BarData = todosCompleted.map((todo) => {
    return {
      date: todo.validationDate,
      lesson: todo.lesson,
      exercise: todo.number,
      note: todo.scoreAverage * 100,
    };
  });

  return (
    <ToDoInfosStyled>
      <ResponsiveContainer height="100%" className="bar-chart-container">
        <BarChart data={BarData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" fontSize={13} />
          <Tooltip content={<CustomTooltip />} />
          <Legend iconSize={0} payload={[{ value: "Les derniers devoirs" }]} />
          <Bar dataKey="note" fill="#008000" barSize={20} radius={5} />
        </BarChart>
      </ResponsiveContainer>
      <GlobalScore todosCompleted={todosCompleted} />
      {/* <TodoAdvice /> */}
    </ToDoInfosStyled>
  );
}
const ToDoInfosStyled = styled.div`
  display: flex;
  width: 80%;
  height: 200px;
  column-gap: 10px;
  margin-top: 50px;
  .bar-chart-container {
    background: #f1f2f3;
    /* width: calc(100% - 640px); */
    border-radius: 6px;
    border: 1px solid #d9d7d7;
    font-size: 14px;
  }
  @media (max-width: 1370px) {
    width: 90%;
  }
  @media (max-width: 1130px) {
    width: 95%;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
