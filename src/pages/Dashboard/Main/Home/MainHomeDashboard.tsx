import styled from "styled-components";
import Header from "./Header";
import Section from "./Section";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

export default function MainHomeDashboard() {
  const { level } = useSelector((state: RootState) => state.dashboard);

  return (
    <MainHomeDashboardStyled>
      <h1>TABLEAU DE BORD </h1>
      <h2>Classe de {level}</h2>
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
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 40px;
  }
  @media (max-width: 1386px) {
    max-width: 100%;
  }
`;
