import styled from "styled-components";
import { useState } from "react";
import UpdateToDo from "./UpdateToDo";
import ColumnLimitDate from "./ColumnLimitDate";
import ColumnStatus from "./ColumnStatus";
import { QuestionSolutions } from "../../../../Types/dataTypes";
import PreviewToDoExercise from "./PreviewToDoExercise";

type BodyRow = {
  id: string;
  lesson: string;
  number: number;
  level: string;
  limitDate: string;
  isCompleted: boolean;
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
    statements,
    questionsSolutions,
  } = todo;

  const [inputValue, setInputValue] = useState<string | undefined>("");
  const [isEditing, setIsEditing] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

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
      <UpdateToDo
        id={id}
        isCompleted={isCompleted}
        setInputValue={setInputValue}
        setIsEditing={setIsEditing}
      />
      <PreviewToDoExercise
        questionsSolutions={questionsSolutions}
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
    padding: 12px 0;
    font-size: 0.9rem;
    &:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    &:nth-child(2) {
      cursor: pointer;
    }
  }
`;
