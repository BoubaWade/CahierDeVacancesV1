import styled from "styled-components";
import logout from "../../../assets/icons/logout.svg";
import MenuItemsList from "./MenuItemsList";

export default function SideBar() {
  return (
    <SideBarStyled>
      <h2>Cahier de Vacances</h2>
      <MenuItemsList />
      <div className="logout">
        <img src={logout} />
        Déconnexion
      </div>
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
    margin: 15px 0 25px;
  }
  .logout {
    font-size: 0.9rem;
    font-weight: 700;
    padding: 14px;
    margin: 120px 0 0 6px;
    cursor: pointer;
    img {
      margin-right: 10px;
    }
  }
`;
