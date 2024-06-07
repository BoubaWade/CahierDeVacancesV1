import styled from "styled-components";

export default function Navbar({ children }: any) {
  return (
    <NavbarStyled>
      <ul className="navbar-nav">{children}</ul>
    </NavbarStyled>
  );
}
const NavbarStyled = styled.nav`
  .navbar-nav {
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;
