import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styled from "styled-components";

export default function MenuHeader() {
  const { level } = useSelector((state: RootState) => state.dashboard);

  return (
    <MenuHeaderStyled>
      <h3>{level}</h3>
      <h4>Les chapitres</h4>
    </MenuHeaderStyled>
  );
}
const MenuHeaderStyled = styled.div`
  h4 {
    text-align: center;
    margin-bottom: 15px;
    text-decoration: underline;
  }
  h3 {
    background: #fde047;
    font-size: 1.2rem;
    margin-bottom: 10px;
    padding: 5px 15px;
    border-radius: 5px;
  }
`;
