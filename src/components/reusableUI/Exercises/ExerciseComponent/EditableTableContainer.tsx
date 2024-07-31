import styled from "styled-components";
import { TableCell } from "../../../../Types/dataTypes";
import EditableTable from "../../EditableTable/EditableTable";

type Props = {
  imageUrl: string | undefined;
  editTableData: TableCell[][];
};

export default function EditableTableContainer({
  imageUrl,
  editTableData,
}: Props) {
  return (
    <EditableTableContainerStyled>
      {imageUrl && <img src={imageUrl} className="graphic-edit-table" />}
      <EditableTable initialData={editTableData} />
    </EditableTableContainerStyled>
  );
}
const EditableTableContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  .graphic-edit-table {
    width: 30px;
    height: 50px;
  }
`;
