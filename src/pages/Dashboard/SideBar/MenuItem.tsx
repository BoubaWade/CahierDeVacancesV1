import styled from "styled-components";
import { SideBarItem } from "../../../Types/layoutTypes";
import { setMainDashboardActive } from "../../../features/Dashboard/dashboardSettingsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";

type Action = {
  type: string;
  payload: string;
};

type MenuItemProps = {
  item: SideBarItem;
  dispatch: React.Dispatch<Action>;
};

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  const { isActive, stateKey, icon, label } = item;
  const dispatchMainDashboard = useDispatch<AppDispatch>();

  const handleClick = (section: string) => {
    dispatch({ type: "SET_ACTIVE", payload: section });
    dispatchMainDashboard(setMainDashboardActive(section));
  };

  return (
    <MenuItemStyled
      className={isActive ? "active" : ""}
      onClick={() => handleClick(stateKey)}
    >
      <img src={icon} />
      {label}
    </MenuItemStyled>
  );
}

const MenuItemStyled = styled.li`
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
`;
