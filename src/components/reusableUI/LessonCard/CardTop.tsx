import styled from "styled-components";

type CardTopProps = {
  title?: string;
  level?: string;
  duration?: string;
};

export default function CardTop({ title, level, duration }: CardTopProps) {
  return (
    <CardTopStyled>
      <h2> {title}</h2>
      <p>Classe : {level}</p>
      <p>Durée : {duration}</p>
    </CardTopStyled>
  );
}
const CardTopStyled = styled.div`
  background: linear-gradient(to right, #fde047, #c2a205);
  font-size: 0.9rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  text-align: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px dashed #888;
  h2 {
    margin-bottom: 20px;
  }
  p {
    line-height: 25px;
  }
`;
