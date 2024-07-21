import BodyRowsList from "./BodyRowsList";
import { Exercise } from "../../../../Types/dataTypes";
import styled from "styled-components";

type TableBodyProps = {
  todosToDisplay: Exercise[];
};

export default function TableBody({ todosToDisplay }: TableBodyProps) {
  return (
    <TableBodyStyled>
      {todosToDisplay.length !== 0 ? (
        todosToDisplay.map((todo) => <BodyRowsList key={todo.id} todo={todo} />)
      ) : (
        <tr className="empty-todos">
          <td>Je ne trouve pas de devoirs !</td>
        </tr>
      )}
    </TableBodyStyled>
  );
}
const TableBodyStyled = styled.tbody`
  .empty-todos {
    td {
      display: block;
      font-size: 0.9rem;
      text-align: center;
      margin: 70px auto;
      font-weight: 500;
    }
  }
`;
