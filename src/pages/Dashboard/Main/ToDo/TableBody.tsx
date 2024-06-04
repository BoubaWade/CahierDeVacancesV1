import styled from "styled-components";
import BodyRowsList from "./BodyRowsList";

export default function TableBody() {
  const dataTables = [
    {
      id: 1,
      lesson: "Calcul d'aire et de Volume",
      number: 3,
      level: "Première",
      limitDate: "14-08-2023",
      isCompleted: true,
    },
    {
      id: 2,
      lesson: "Calcul Littéral",
      number: 9,
      level: "Troisième",
      limitDate: "14-08-2023",
      isCompleted: false,
    },
    {
      id: 3,
      lesson: "Théorème de Pythagore",
      number: 7,

      level: "Troisième",
      limitDate: "14-08-2023",
      isCompleted: false,
    },
    {
      id: 4,
      lesson: "Trigonomètrie",
      number: 9,
      level: "Première",
      limitDate: "14-08-2023",
      isCompleted: true,
    },
    {
      id: 5,
      lesson: "Théorème de Thalès",
      number: 11,
      level: "Troisième",
      limitDate: "14-08-2023",
      isCompleted: true,
    },
    {
      id: 6,
      lesson: "Probabilité",
      number: 2,
      level: "Términale",
      limitDate: "14-08-2023",
      isCompleted: true,
    },
    {
      id: 7,
      lesson: "Calcul d'aire et de Volume",
      number: 1,
      level: "Première",
      limitDate: "14-08-2023",
      isCompleted: true,
    },
    {
      id: 8,
      lesson: "Calcul d'aire et de Volume",
      number: 1,
      level: "Première",
      limitDate: "14-08-2023",
      isCompleted: true,
    },
    {
      id: 9,
      lesson: "Calcul d'aire et de Volume",
      number: 1,
      level: "Première",
      limitDate: "14-08-2023",
      isCompleted: true,
    },
    {
      id: 10,
      lesson: "Calcul d'aire et de Volume",
      number: 1,
      level: "Première",
      limitDate: "14-08-2023",
      isCompleted: true,
    },
    {
      id: 11,
      lesson: "Calcul d'aire et de Volume",
      number: 1,
      level: "Première",
      limitDate: "14-08-2023",
      isCompleted: true,
    },
    {
      id: 12,
      lesson: "Calcul d'aire et de Volume",
      number: 1,
      level: "Première",
      limitDate: "14-08-2023",
      isCompleted: true,
    },
  ];
  return (
    <TableBodyStyled>
      {dataTables.map((data) => (
        <BodyRowsList key={data.id} data={data} />
      ))}
    </TableBodyStyled>
  );
}
const TableBodyStyled = styled.tbody``;
