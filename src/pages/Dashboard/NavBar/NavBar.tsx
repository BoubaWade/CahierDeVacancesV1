import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import Notifications from "./Notifications";

export default function NavBar() {
  const { user } = useSelector((state: RootState) => state.auth);
  const userName = user?.user_metadata?.name
    ? user?.user_metadata?.name
    : user?.email?.split("@")[0];

  return (
    <NavBarStyled>
      <span className="user-name">{userName}</span>
      <Notifications />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  width: calc(100% - 230px);
  background: linear-gradient(to right, #fde047, #c2a205);
  height: 60px;
  padding: 0 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 24px;
  position: fixed;
  top: 0;
  left: 230px;
  padding-left: 30px;
  z-index: 1000;
  box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
  &::before {
    content: "";
    position: absolute;
    width: 45px;
    height: 45px;
    bottom: -45px;
    left: 0;
    border-radius: 50%;
    box-shadow: -20px -20px 0 #fde047;
  }
  .user-name {
    font-weight: 500;
  }
  @media (max-width: 1024px) {
    width: calc(100% - 180px);
    left: 180px;
    height: 55px;
  }
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;
