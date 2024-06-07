import DropdownMenu from "./DropDownMenu";
import Navbar from "./Navbar";
import NavItem from "./NavItem";

export default function DropDown() {
  return (
    <Navbar>
      <NavItem>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}
