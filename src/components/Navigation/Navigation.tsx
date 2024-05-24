import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <NavigationStyled>
      <h2>CAHIER DE VACANCES</h2>
      <ul>
        <li onClick={() => navigate("/cm2")}>Cm2</li>
        <li onClick={() => navigate("/quatrieme")}>4ème</li>
        <li onClick={() => navigate("/troisieme")}>3ème</li>
        <li onClick={() => navigate("/premiere")}>Première</li>
        <li onClick={() => navigate("/terminale")}>Terminale</li>
      </ul>
    </NavigationStyled>
  );
}
const NavigationStyled = styled.nav`
  /* background-color: #fff; */
  background-color: #000205;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #ffff;
  /* position: relative;
  z-index: 30; */
  h2 {
    position: relative;
    z-index: 30;
    /* color: #8c6da9; */
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
  }
  ul {
    width: 50%;
    display: flex;
    justify-content: space-around;
    li {
      position: relative;
      z-index: 30;
      font-size: 1rem;
      /* padding: 4px 25px; */
      cursor: pointer;
      transition: 200ms;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
