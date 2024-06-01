import deleteIcon from "../../../../assets/icons/delete.svg";
import bookOpen from "../../../../assets/icons/bookOpen.svg";
import styled from "styled-components";

type BodyRow = {
  id: number;
  lesson: string;
  number: number;
  level: string;
  limitDate: string;
  isCompleted: boolean;
};

type BodyRowsProps = {
  data: BodyRow;
};

export default function BodyRowsList({ data }: BodyRowsProps) {
  const { lesson, number, level, limitDate, isCompleted } = data;

  return (
    <BodyRowsListStyled>
      <td>
        <img src={bookOpen} className="book-open" />
        <p>{lesson}</p>
      </td>
      <td>{number}</td>
      <td>{level}</td>
      <td>{limitDate}</td>
      <td>
        {isCompleted ? (
          <span className="status completed">Complète</span>
        ) : (
          <span className="status pending">En attente</span>
        )}
      </td>
      <td>
        <img src={deleteIcon} className="delete-task" />
      </td>
    </BodyRowsListStyled>
  );
}
const BodyRowsListStyled = styled.tr`
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  td {
    text-align: center;
    padding: 5px 0;
    font-size: 0.9rem;
    .book-open {
      width: 18px;
      border-radius: 50%;
    }
    p {
      margin-top: 4px;
    }
  }
  &:nth-child(even) {
    background: #fff;
  }
  &:nth-child(odd) {
    background: #f1f2f3;
  }
  td {
    .status {
      max-width: 110px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      font-size: 10px;
      padding: 6px 10px;
      color: #fff;
      border-radius: 20px;
      font-weight: 700;
    }
    .status.completed {
      background: green;
    }
    .status.pending {
      background: #fde047;
      color: #000;
    }
    &:first-child {
      display: flex;
      align-items: center;
      grid-gap: 12px;
      padding-left: 6px;
    }
  }
  .delete-task {
    width: 15px;
    cursor: pointer;
    transition: 200ms ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
