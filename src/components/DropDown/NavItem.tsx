import styled from "styled-components";

export default function NavItem({ children }: any) {
  return <NavItemStyled>{children}</NavItemStyled>;
}

const NavItemStyled = styled.li`
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
