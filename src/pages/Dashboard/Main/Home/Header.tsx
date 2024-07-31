import styled from "styled-components";
import TopScore from "./TopScore";
import RecapTodos from "./RecapTodos";

export default function Header() {
  return (
    <HeaderStyled>
      <TopScore />
      <RecapTodos />
    </HeaderStyled>
  );
}
const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 867px;
  min-width: 795px;
  height: 100px;
  margin: 0 auto 20px;
  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 0;
    height: auto;
    row-gap: 10px;
    margin-bottom: 10px;
  }
`;
