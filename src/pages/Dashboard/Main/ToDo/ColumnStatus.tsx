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
`;
