import styled from "styled-components";

type TableCell = {
  value: string | number;
  locked: boolean;
};
type EditableTableRowsProps = {
  rowIndex: number;
  row: TableCell[];
  handleChange: (rowIndex: number, colIndex: number, value: string) => void;
};

export default function EditableTableRows({
  rowIndex,
  row,
  handleChange,
}: EditableTableRowsProps) {
  return (
    <EditableTableRowsStyled>
      {row.map((cell, colIndex) => (
        <td key={colIndex}>
          <input
            type="text"
            value={cell.value}
            onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
            disabled={cell.locked}
          />
        </td>
      ))}
    </EditableTableRowsStyled>
  );
}
const EditableTableRowsStyled = styled.tr`
  td {
    input {
      width: 100%;
      min-height: 35px;
      text-align: center;
      font-weight: 500;
    }
  }
`;
