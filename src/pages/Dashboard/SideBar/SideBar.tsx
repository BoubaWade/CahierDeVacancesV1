import styled from "styled-components";
import MenuItems from "./MenuItems";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

export default function SideBar() {
  const navigate = useNavigate();

  return (
    <SideBarStyled>
      <h2 onClick={() => navigate("/")}>Math-Max</h2>
      <MenuItems />
      <Logout />
    </SideBarStyled>
  );
}

const SideBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(to right, #c2a205, #fde047);
  width: 230px;
  height: 100%;
  z-index: 2000;
  overflow-x: hidden;
  scrollbar-width: none;
  transition: all 0.3s ease;
  &::-webkit-scrollbar {
    display: none;
  }
  h2 {
    font-size: 1.2rem;
    text-align: center;
    margin: 20px 0 25px;
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    width: 180px;
    h2 {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 768px) {
    background: linear-gradient(to right, #fde047, #c2a205);
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 55px;
    h2 {
      width: 150px;
      margin: 0;
    }
  }
`;
