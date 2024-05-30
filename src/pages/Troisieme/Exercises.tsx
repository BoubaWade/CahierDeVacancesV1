import styled from "styled-components";
import Monkey from "../../assets/monkey.png";
import ExercisesList from "./ExercisesList";
import DotPattern from "../../components/reusableUI/DotPattern";

export default function Exercises() {
  return (
    <ExercicesTroisiemeStyled>
      <img src={Monkey} className="bg-image" />
      <h1>Exerices sur le Calcul Littéral</h1>
      <ExercisesList />
      <DotPattern />
    </ExercicesTroisiemeStyled>
  );
}

const ExercicesTroisiemeStyled = styled.div`
  padding: 30px 0;
  .bg-image {
    display: block;
    position: fixed;
    min-width: 400px;
    top: -100px;
    bottom: 0;
    right: 0;
  }
  h1 {
    text-align: center;
    margin: 30px 0;
  }
`;
