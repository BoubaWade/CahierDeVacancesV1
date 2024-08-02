import { useState } from "react";
import Image from "../reusableUI/Image";
import bars from "../../assets/icons/bars.svg";
import x from "../../assets/icons/x.svg";
import styled from "styled-components";
import LevelsMobileList from "./LevelsMobileList";

export default function LevelsMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LevelsMobileStyled>
      {isOpen ? (
        <div className="levels-container">
          <Image src={x} className="icon x" onClick={() => setIsOpen(false)} />
          <LevelsMobileList />
        </div>
      ) : (
        <Image src={bars} className="icon" onClick={() => setIsOpen(true)} />
      )}
    </LevelsMobileStyled>
  );
}

const LevelsMobileStyled = styled.div`
  .levels-container {
    display: flex;
    flex-direction: column;
  }
  .icon {
    width: 25px;
    color: #fff;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
  .x {
    width: 25px;
    height: 25px;
  }
`;
