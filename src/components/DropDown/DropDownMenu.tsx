import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { datasOfChapters } from "../../data/dataLevelPages";
import {
  getChaptersOfLevel,
  normalizeString,
} from "../../utils/utilsFunctions";
import backward from "../../assets/icons/backward.svg";
import { useNavigate } from "react-router-dom";

export default function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (dropdownRef.current && dropdownRef.current.firstChild) {
      const firstChild = dropdownRef.current.firstChild as HTMLElement;
      setMenuHeight(firstChild.offsetHeight);
    }
  }, []);

  function calcHeight(el: any) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <DropdownMenuStyled style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu level">
          <h3>Les classes</h3>
          {datasOfChapters.map((data) => (
            <p key={data.id} onClick={() => setActiveMenu(data.id)}>
              {data.level}
            </p>
          ))}
        </div>
      </CSSTransition>

      {datasOfChapters.map(({ id, level }) => (
        <CSSTransition
          key={id}
          in={activeMenu === id}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <div className="menu-header">
              <img src={backward} onClick={() => setActiveMenu("main")} />
              <h3>{level}</h3>
              <h4>Les chapitres</h4>
            </div>
            {getChaptersOfLevel(datasOfChapters, id)?.map((chapter, index) => (
              <p
                key={index}
                onClick={() =>
                  navigate(
                    `/${normalizeString(level)}/exercices/${normalizeString(
                      chapter
                    )}`
                  )
                }
              >
                {index + 1}. {chapter}
              </p>
            ))}
          </div>
        </CSSTransition>
      ))}
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
  transition: height 300ms ease;
  .menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    padding: 10px;
    .menu-header {
      img {
        height: 35px;
        position: absolute;
        left: 0;
        padding: 7px 15px;
        cursor: pointer;
      }
      h4 {
        margin-bottom: 15px;
        text-decoration: underline;
      }
    }
    h3 {
      background: #fde047;
      font-size: 1.2rem;
      margin-bottom: 10px;
      padding: 5px 15px;
      border-radius: 5px;
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
    &.level {
      h3 {
        margin-top: 5px;
      }
      p {
        font-size: 1rem;
        font-weight: 700;
      }
    }
  }

  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all 300ms ease;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all 300ms ease;
  }

  .menu-secondary-enter {
    transform: translateX(110%);
  }
  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all 300ms ease;
  }
  .menu-secondary-exit {
  }
  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all 300ms ease;
  }
`;
