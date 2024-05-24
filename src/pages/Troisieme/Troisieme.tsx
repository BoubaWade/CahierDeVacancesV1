import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DotPattern from "../../components/reusableUI/DotPattern";

export default function Troisieme() {
  const navigate = useNavigate();
  return (
    <TroisiemeStyled>
      <DotPattern />
      <button onClick={() => navigate("/troisieme/cours")}>Cours</button>
      <button onClick={() => navigate("/troisieme/exercices")}>
        Exercices
      </button>
    </TroisiemeStyled>
  );
}
const TroisiemeStyled = styled.div`
  padding: 20px 0;
`;
