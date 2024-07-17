import styled from "styled-components";

export default function TableHead() {
  return (
    <TableHeadStyled>
      <tr>
        <th>Chapitre</th>
        <th>N° du devoir</th>
        <th>Classe</th>
        <th>Avant le :</th>
        <th>Status</th>
        <th>Réussi à :</th>
        <th>Supp. / Modif.</th>
      </tr>
    </TableHeadStyled>
  );
}
const TableHeadStyled = styled.thead`
  background: #f1f2f3;
  th {
    padding-bottom: 12px;
    text-align: left;
    border-bottom: 1px solid #d4d0d0;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 10px 0;
  }
  @media (max-width: 1130px) {
    th {
      font-size: 0.8rem;
    }
  }
`;
