import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Chapters from "./Chapters";
import MenuHeader from "./MenuHeader";

export default function DropdownMenu() {
  const [menuHeight, setMenuHeight] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dropdownRef.current && dropdownRef.current.firstChild) {
      const firstChild = dropdownRef.current.firstChild as HTMLElement;
      setMenuHeight(firstChild.offsetHeight);
    }
  }, []);

  return (
    <DropdownMenuStyled style={{ height: menuHeight }} ref={dropdownRef}>
      <div className="menu">
        <MenuHeader />
        <Chapters />
      </div>
    </DropdownMenuStyled>
  );
}

const DropdownMenuStyled = styled.div`
  position: absolute;
  width: 300px;
  max-height: 400px;
  background-color: #f8e99d;
  border: 2px solid #c2a205;
  box-sizing: content-box;
  border-radius: 7px;
  overflow: scroll;
  transition: height 500ms ease-out;
  .menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    padding: 10px;
  }
`;
