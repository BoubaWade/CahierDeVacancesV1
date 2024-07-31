import styled from "styled-components";
import EditableTableHead from "./EditableTableHead";
import EditableTableBody from "./EditableTableBody";

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
  return (
    <EditableTableStyled className={className}>
      <EditableTableHead headers={headers} />
      <EditableTableBody initialData={initialData} />
    </EditableTableStyled>
  );
}
const EditableTableStyled = styled.table`
  min-width: 370px;
`;
