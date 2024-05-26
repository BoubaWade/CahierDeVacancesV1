import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import BorderBeam from "../BorderBeam";
import SecondaryButton from "../SecondaryButton";

export default function Card({ children }: any) {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <CardStyled>
      {children}
      <BorderBeam className="border-beam" size={100} />
      <div className="buttons">
        <SecondaryButton
          label="Cours"
          className=""
          onClick={() => navigate(`/${id}/cours`)}
        />
        <SecondaryButton
          label="Exercices"
          className=""
          onClick={() => navigate(`/${id}/exercices`)}
        />
      </div>
    </CardStyled>
  );
}
const CardStyled = styled.article`
  min-width: 300px;
  position: relative;
  border-radius: 15px;
  .border-beam {
    transform: translate(2px, -2px);
    z-index: -1;
  }
  .buttons {
    background: #f8f8fa;
    display: flex;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    button {
      width: 50%;
    }
  }
`;
