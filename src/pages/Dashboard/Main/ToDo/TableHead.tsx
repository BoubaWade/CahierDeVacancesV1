import styled from "styled-components";

export default function TableHead() {
  return (
    <TableHeadStyled>
      <tr>
        <th>Chapitre</th>
        <th>N° de l'exercice</th>
        <th>Classe</th>
        <th>Avant le :</th>
        <th>Status</th>
        <th>Supprimer</th>
      </tr>
    </TableHeadStyled>
  );
}
const TableHeadStyled = styled.thead`
  background: #000;
  border-bottom: 2px solid #000;
  color: #fff;
  th {
    padding-bottom: 12px;
    font-size: 13px;
    text-align: left;
    border-bottom: 1px solid #d4d0d0;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 10px 0;
  }
`;