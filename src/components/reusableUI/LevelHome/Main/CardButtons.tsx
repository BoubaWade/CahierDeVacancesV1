import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../SecondaryButton";

type CardButtonsProps = {
  lessonId: string;
  id: string;
};
export default function CardButtons({ lessonId, id }: CardButtonsProps) {
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
