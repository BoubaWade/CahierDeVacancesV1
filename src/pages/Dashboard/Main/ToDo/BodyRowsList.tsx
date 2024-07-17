import styled from "styled-components";
import { useState } from "react";
import UpdateToDo from "./UpdateToDo";
import ColumnLimitDate from "./ColumnLimitDate";
import ColumnStatus from "./ColumnStatus";
import { QuestionSolutions } from "../../../../Types/dataTypes";
import PreviewToDoExercise from "./PreviewToDoExercise";
import ColumnScore from "./ColumnScore";

type BodyRow = {
  id: string;
  lesson: string;
  number: number;
  level: string;
  limitDate: string;
  isCompleted: boolean;
  scoreAverage: number;
  statements: string;
  questionsSolutions: QuestionSolutions[];
};

type BodyRowsProps = {
  todo: BodyRow;
};

export default function BodyRowsList({ todo }: BodyRowsProps) {
  const {
    id,
    lesson,
    number,
    level,
    limitDate,
    isCompleted,
    scoreAverage,
    statements,
    questionsSolutions,
  } = todo;

  const [inputValue, setInputValue] = useState<string | undefined>("");
  const [isEditing, setIsEditing] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const scorePercentage = Math.ceil(scoreAverage * 100);

  return (
    <BodyRowsListStyled>
      <td onClick={() => setIsOpenModal(true)}>{lesson}</td>
      <td onClick={() => setIsOpenModal(true)}>{number}</td>
      <td>{level}</td>
      <ColumnLimitDate
        id={id}
        limitDate={limitDate}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      <ColumnStatus isCompleted={isCompleted} />
      <ColumnScore isCompleted={isCompleted} score={scorePercentage} />
      <UpdateToDo
        id={id}
        isCompleted={isCompleted}
        setInputValue={setInputValue}
        setIsEditing={setIsEditing}
      />
      <PreviewToDoExercise
        questionsSolutions={questionsSolutions}
        isCompleted={isCompleted}
        level={level}
        lesson={lesson}
        number={number}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        statements={statements}
      />
    </BodyRowsListStyled>
  );
}
const BodyRowsListStyled = styled.tr`
  position: relative;
  transition: all 0.3s ease;
  border-radius: 10px;
  background: #fff;
  &::before {
    position: absolute;
    content: "";
    width: 95%;
    height: 1px;
    background-color: #d5d6d7;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  td {
    text-align: center;
    padding: 10px 0;
    font-size: 0.85rem;
    &:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 4px;
      font-weight: 500;
      cursor: pointer;
    }
    &:nth-child(2) {
      cursor: pointer;
    }
  }
  .good-score,
  .bad-score {
    font-weight: 500;
    span {
      color: #949292;
    }
  }
  .good-score {
    color: #4c7f43;
  }
  .bad-score {
    color: #ca2c10;
  }
  @media (max-width: 1130px) {
    td {
      font-size: 0.8rem;
    }
  }
`;
