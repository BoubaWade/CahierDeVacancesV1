import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { datas } from "../../data/dataLevelPages";
import BorderBeam from "../reusableUI/BorderBeam";

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <NavigationStyled>
      <h2>CAHIER DE VACANCES</h2>
      <ul>
        {datas.map(({ id, level }) => (
          <div key={id}>
            <li onClick={() => navigate(`/${id}`)}>{level}</li>
            <BorderBeam className="border-beam" />
          </div>
        ))}
      </ul>
    </NavigationStyled>
  );
}
const NavigationStyled = styled.nav`
  background-color: #000205;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #ffff;
  h2 {
    position: relative;
    z-index: 30;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
  }
  ul {
    width: 50%;
    display: flex;
    justify-content: space-around;
    position: relative;
    padding: 5px;
    li {
      position: relative;
      z-index: 30;
      font-size: 1rem;
      letter-spacing: 0.5px;
      cursor: pointer;
      transition: 200ms;
      &:hover {
        transform: scale(1.1);
      }
    }
    .border-beam {
      z-index: 0;
    }
  }
`;
