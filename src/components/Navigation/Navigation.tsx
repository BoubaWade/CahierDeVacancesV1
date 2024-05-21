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

  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #ffff;
  h2 {
    color: #8c6da9;
    font-size: 1.8rem;
    font-weight: 500;
    cursor: pointer;
  }
  ul {
    width: 50%;
    display: flex;
    justify-content: space-around;
    li {
      font-size: 1.15rem;
      padding: 4px 25px;
      border-radius: 15px;
      cursor: pointer;
      transition: 200ms ease;
      &:hover {
        background: #4d088e;
        color: #ffff;
        transform: scale(1.1);
      }
    }
  }
`;
