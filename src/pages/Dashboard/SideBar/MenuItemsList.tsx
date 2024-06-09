import styled from "styled-components";
import useSideBar from "../../../hooks/useSideBar";
import MenuItem from "./MenuItem";

export default function MenuItemsList() {
  const { menuItems } = useSideBar();

  return (
    <MenuItemsListStyled className="side-menu">
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </MenuItemsListStyled>
  );
}
const MenuItemsListStyled = styled.ul`
  width: 100%;
  margin-top: 48px;
`;
