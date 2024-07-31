import styled from "styled-components";
import Stars from "./Stars";

type CardBottomProps = {
  tag?: string;
  stars?: string[];
};

export default function CardBottom({ tag, stars }: CardBottomProps) {
  return (
    <CardBottomStyled>
      <div>
        <h5>Importance</h5>
        <Stars stars={stars} />
      </div>
      <h5 className="tag">{tag}</h5>
    </CardBottomStyled>
  );
}
const CardBottomStyled = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 0.7rem 1.5rem;
  border-bottom: none;
`;
