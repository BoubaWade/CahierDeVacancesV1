import styled from "styled-components";
import exclamation from "../../assets/icons/exclamation.svg";
import PrimaryButton from "../../components/reusableUI/PrimaryButton";
import { useNavigate } from "react-router-dom";
import Image from "../../components/reusableUI/Image";

export default function Error() {
  const navigate = useNavigate();
  return (
    <ErrorStyled>
      <h1 className="title">Page introuvable !</h1>
      <Image src={exclamation} className="image" />
      <PrimaryButton label="Aller à l'accueil" onClick={() => navigate("/")} />
    </ErrorStyled>
  );
}
const ErrorStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(#2d6a4f 0.75px, transparent 0.75px),
    radial-gradient(#2d6a4f 0.75px, #ffffff 0.75px);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
  .title {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .image {
    width: 40px;
    margin-bottom: 40px;
  }
`;
