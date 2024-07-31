import styled from "styled-components";

type StarsProps = {
  stars: string[] | undefined;
};
export default function Stars({ stars }: StarsProps) {
  return (
    <StarsStyled>
      {stars?.map((star, index) => (
        <li key={index}>{star}</li>
      ))}
    </StarsStyled>
  );
}

const StarsStyled = styled.ul`
  display: flex;
  li {
    padding-right: 4px;
  }
`;
