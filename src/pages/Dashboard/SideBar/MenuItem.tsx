import styled from "styled-components";
import { SideBarItem } from "../../../Types/layoutTypes";
import { setMainDashboardActive } from "../../../features/Dashboard/dashboardSettingsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";

type MenuItemProps = {
  item: SideBarItem;
};

export default function MenuItem({ item }: MenuItemProps) {
  const { isActive, stateKey, icon, label } = item;
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (section: string) => {
    dispatch(setMainDashboardActive(section));
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
    border-radius: 13px;
    &::before {
      content: "";
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 13px;
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
      border-radius: 13px;
      bottom: -40px;
      right: 0;
      box-shadow: 20px -20px 0 #fff;
      z-index: -1;
    }
  }
  @media (max-width: 1024px) {
    font-size: 0.85rem;
    height: 38px;
    img {
      height: 15px;
    }
    &.active {
      border-radius: 10px;
      & img {
        display: none;
      }
      &::before {
        display: none;
      }
      &::after {
        display: none;
      }
    }
  }
  @media (max-width: 768px) {
    height: 30px;
    margin: 0 5px;
    padding: 5px 10px;
    &.active {
      border-radius: 7px;

      &::before {
        border-radius: 10px;
      }
      &::after {
        border-radius: 10px;
      }
    }
  }
`;
