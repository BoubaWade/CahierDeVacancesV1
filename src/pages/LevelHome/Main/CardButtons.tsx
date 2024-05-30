import styled from "styled-components";
import SecondaryButton from "../../../components/reusableUI/SecondaryButton";
import { useNavigate, useParams } from "react-router-dom";

type CardButtonsProps = {
  lessonId: string;
};
export default function CardButtons({ lessonId }: CardButtonsProps) {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <CardButtonsProps>
      <SecondaryButton
        label="Cours"
        onClick={() => navigate(`/${id}/cours/${lessonId}`)}
      />
      <SecondaryButton
        label="Exercices"
        onClick={() => {
          navigate(`/${id}/exercices/${lessonId}`);
        }}
      />
    </CardButtonsProps>
  );
}
const CardButtonsProps = styled.div`
  background: #f8f8fa;
  display: flex;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  button {
    width: 50%;
    span {
      position: relative;
      z-index: 1;
    }
  }
`;
