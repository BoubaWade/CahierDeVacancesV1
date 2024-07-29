import styled from "styled-components";
import useSideBar from "../../../hooks/useSideBar";
import MenuItem from "./MenuItem";

export default function MenuItems() {
  const { menuItems } = useSideBar();

  return (
    <MenuItemsStyled className="side-menu">
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </MenuItemsStyled>
  );
}
const MenuItemsStyled = styled.ul`
  width: 100%;
  margin-top: 48px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 0;
  }
`;
