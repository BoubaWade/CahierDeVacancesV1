import homeUser from "../../assets/icons/homeUser.svg";
import layerGroup from "../../assets/icons/layerGroup.svg";
import circleCheck from "../../assets/icons/circleCheck.svg";
import settings from "../../assets/icons/settings.svg";
import logout from "../../assets/icons/logout.svg";
import { useReducer } from "react";
import styled from "styled-components";

type SideBarState = {
  isHomeActive: boolean;
  isClassesActive: boolean;
  isToDoActive: boolean;
  isSettingsActive: boolean;
};
type Action = {
  type: string;
  payload: string;
};

const initialState = {
  isHomeActive: true,
  isClassesActive: false,
  isToDoActive: false,
  isSettingsActive: false,
};

function reducer(state: SideBarState, action: Action) {
  switch (action.type) {
    case "SET_ACTIVE":
      return {
        isHomeActive: false,
        isClassesActive: false,
        isToDoActive: false,
        isSettingsActive: false,
        [action.payload]: true,
      };
    default:
      return state;
  }
}

export default function SideBar() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isHomeActive, isClassesActive, isToDoActive, isSettingsActive } =
    state;

  const handleClick = (section: string) => {
    dispatch({ type: "SET_ACTIVE", payload: section });
  };

  return (
    <SideBarStyled>
      <h2>Cahier de Vacances</h2>
      <ul className="side-menu">
        <li
          className={isHomeActive ? "active" : ""}
          onClick={() => handleClick("isHomeActive")}
        >
          <img src={homeUser} />
          Accueil
        </li>

        <li
          className={isClassesActive ? "active" : ""}
          onClick={() => handleClick("isClassesActive")}
        >
          <img src={layerGroup} />
          Classes
        </li>
        <li
          className={isToDoActive ? "active" : ""}
          onClick={() => handleClick("isToDoActive")}
        >
          <img src={circleCheck} />
          Devoir à faire
        </li>
        <li
          className={isSettingsActive ? "active" : ""}
          onClick={() => handleClick("isSettingsActive")}
        >
          <img src={settings} />
          Réglages
        </li>
      </ul>
      <ul className="side-menu">
        <li className="logout">
          <img src={logout} />
          Déconnexion
        </li>
      </ul>
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
  .side-menu {
    width: 100%;
    margin-top: 48px;
    li {
      position: relative;
      height: 42px;
      background: transparent;
      display: flex;
      align-items: center;
      font-size: 1rem;
      font-weight: 500;
      border-radius: 48px;
      border-radius: 30px;
      padding: 14px;
      margin: 10px 0 0 6px;
      cursor: pointer;
      img {
        margin-right: 10px;
        height: 18px;
      }
      &.active {
        position: relative;
        background: #000;
        color: #f8f8fa;
        border-radius: 15px;
        &::before {
          content: "";
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 15px;
          top: -40px;
          right: 0;
          box-shadow: 20px 20px 0 #fff;
          z-index: -1;
        }
        &::after {
          content: "";
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 15px;
          bottom: -40px;
          right: 0;
          box-shadow: 20px -20px 0 #fff;
          z-index: -1;
        }
      }
    }
  }
`;
