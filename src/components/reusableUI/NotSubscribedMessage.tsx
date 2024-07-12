import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

export default function NotSubscribedMessage() {
  const navigate = useNavigate();

  return (
    <NotSubscribedMessageStyled>
      <p>Abonnez-vous pour ajouter des " DEVOIRS À FAIRE "</p>
      <PrimaryButton
        label="Abonnez-vous"
        onClick={() => navigate("/payment")}
      />
    </NotSubscribedMessageStyled>
  );
}

const NotSubscribedMessageStyled = styled.div`
  color: #fff;
  text-align: center;

  p {
    margin-bottom: 20px;
  }
`;
