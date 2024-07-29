import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { normalizeString } from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function DropdownMenu() {
  const [menuHeight, setMenuHeight] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { level, chaptersOfLevel } = useSelector(
    (state: RootState) => state.dashboard
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (dropdownRef.current && dropdownRef.current.firstChild) {
      const firstChild = dropdownRef.current.firstChild as HTMLElement;
      setMenuHeight(firstChild.offsetHeight);
    }
  }, []);

  const handleNavigate = (chapter: string) => {
    navigate(
      `/${normalizeString(level)}/exercices/${normalizeString(chapter)}`
    );
  };

  return (
    <DropdownMenuStyled style={{ height: menuHeight }} ref={dropdownRef}>
      <div className="menu">
        <div className="menu-header">
          <h3>{level}</h3>
          <h4>Les chapitres</h4>
        </div>
        {chaptersOfLevel.map((chapter, index) => (
          <p key={index} onClick={() => handleNavigate(chapter)}>
            {index + 1}. {chapter}
          </p>
        ))}
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
    .menu-header {
      h4 {
        text-align: center;
        margin-bottom: 15px;
        text-decoration: underline;
      }
      h3 {
        background: #fde047;
        font-size: 1.2rem;
        margin-bottom: 10px;
        padding: 5px 15px;
        border-radius: 5px;
      }
    }
    p {
      width: 100%;
      font-size: 0.9rem;
      font-weight: 500;
      text-align: center;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background: #c2a205;
      }
    }
  }
`;
