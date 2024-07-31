import { useState } from "react";
import styled from "styled-components";
import EditableTableRows from "./EditableTableRows";

type TableCell = {
  value: string | number;
  locked: boolean;
};
type TableData = TableCell[][];
type Props = {
  initialData: TableData | undefined;
};

export default function EditableTableBody({ initialData }: Props) {
  const [data, setData] = useState<TableData | undefined>(initialData);

  const handleChange = (rowIndex: number, colIndex: number, value: string) => {
    if (data) {
      const updatedData = [...data];
      if (!updatedData[rowIndex][colIndex].locked) {
        updatedData[rowIndex][colIndex].value = value;
        setData(updatedData);
      }
    }
  };

  return (
    <EditableTableBodyStyled>
      {data?.map((row, rowIndex) => (
        <EditableTableRows
          key={rowIndex}
          rowIndex={rowIndex}
          row={row}
          handleChange={handleChange}
        />
      ))}
    </EditableTableBodyStyled>
  );
}
const EditableTableBodyStyled = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
