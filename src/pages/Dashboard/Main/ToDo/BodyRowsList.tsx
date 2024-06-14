import bookOpen from "../../../../assets/icons/bookOpen.svg";
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
      <td onClick={() => setIsOpenModal(true)}>
        <img src={bookOpen} className="book-open" />
        <p className="lesson">{lesson}</p>
      </td>
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
  transition: all 0.3s ease;
  border-radius: 10px;
  border-top: 1px solid #d5d6d7;
  background: #fff;
  td {
    text-align: center;
    padding: 12px 0;
    font-size: 0.9rem;
    .book-open {
      background: #d5d6d7;
      width: 18px;
      margin-left: 10px;
      border-radius: 50%;
    }
    .lesson {
      margin-top: 4px;
    }
    &:first-child {
      display: flex;
      align-items: center;
      grid-gap: 12px;
      padding-left: 6px;
      cursor: pointer;
    }
    &:nth-child(2) {
      cursor: pointer;
    }
  }
`;
