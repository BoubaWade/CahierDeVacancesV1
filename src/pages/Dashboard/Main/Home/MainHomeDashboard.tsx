import styled from "styled-components";
import Header from "./Header";
import Section from "./Section";

export default function MainHomeDashboard() {
  return (
    <MainHomeDashboardStyled>
      <h1>TABLEAU DE BORD</h1>
      <Header />
      <Section />
    </MainHomeDashboardStyled>
  );
}
const MainHomeDashboardStyled = styled.div`
  max-width: 70%;
  margin: auto;
  padding: 40px 0;
  h1 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 40px;
  }
`;
