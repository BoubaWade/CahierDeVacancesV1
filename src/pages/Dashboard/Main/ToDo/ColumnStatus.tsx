import styled from "styled-components";

type ColumnStatusProps = {
  isCompleted: boolean;
};

export default function ColumnStatus({ isCompleted }: ColumnStatusProps) {
  return (
    <ColumnStatusStyled>
      {isCompleted ? (
        <span className="status completed">Complète</span>
      ) : (
        <span className="status pending">En attente</span>
      )}
    </ColumnStatusStyled>
  );
}
const ColumnStatusStyled = styled.td`
  .status {
    max-width: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    font-size: 10px;
    padding: 6px 8px;
    color: #fff;
    border-radius: 8px;
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
  @media (max-width: 1130px) {
    .status {
      font-size: 0;
      border-radius: 20px;
      width: 20px;
      height: 20px;
    }
  }
`;
