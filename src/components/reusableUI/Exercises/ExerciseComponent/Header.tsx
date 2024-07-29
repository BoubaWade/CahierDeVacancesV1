import styled from "styled-components";
import EditableTableContainer from "./EditableTableContainer";
import { TableCell } from "../../../../Types/dataTypes";

type HeaderProps = {
  editTableData: TableCell[][] | undefined;
  imageUrl: string | undefined;
};

export default function Header({ editTableData, imageUrl }: HeaderProps) {
  return (
    <HeaderStyled>
      {editTableData ? (
        <EditableTableContainer
          imageUrl={imageUrl}
          editTableData={editTableData}
        />
      ) : (
        imageUrl && <img src={imageUrl} className="exercise-img" />
      )}
    </HeaderStyled>
  );
}
const HeaderStyled = styled.div`
  .exercise-img {
    min-width: 250px;
    width: 60%;
    display: block;
    margin: 0 auto 30px;
  }
`;
