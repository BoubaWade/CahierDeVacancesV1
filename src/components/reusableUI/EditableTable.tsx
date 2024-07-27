import { useState } from "react";
import styled from "styled-components";

type TableHeader = (string | number)[];

type TableCell = {
  value: string | number;
  locked: boolean;
};

type TableData = TableCell[][];

type EditableTableProps = {
  headers?: TableHeader | undefined;
  initialData: TableData | undefined;
  className?: string;
};

export default function EditableTable({
  headers,
  initialData,
  className,
}: EditableTableProps) {
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
    <EditableTableStyled className={className}>
      <thead>
        <tr>
          {headers?.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex}>
                <input
                  type="text"
                  value={cell.value}
                  onChange={(e) =>
                    handleChange(rowIndex, colIndex, e.target.value)
                  }
                  disabled={cell.locked}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </EditableTableStyled>
  );
}
const EditableTableStyled = styled.table`
  min-width: 370px;
  /* margin: 0 auto 30px; */
  tbody {
    display: flex;
    flex-direction: column;
    align-items: center;
    tr {
      td {
        input {
          /* width: 50px; */
          width: 100%;
          min-height: 35px;
          /* height: 100%; */
          text-align: center;
          font-weight: 500;
        }
      }
      /* th {
        width: 50px;
        height: 45px;
        text-align: center;
        border: 1px solid #000;
      } */
    }
  }
`;
