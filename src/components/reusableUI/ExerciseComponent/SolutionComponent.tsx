import { BlockMath } from "react-katex";
import styled from "styled-components";
import PrimaryButton from "../PrimaryButton";
import { useState } from "react";
import Latex from "react-latex";
import SecondaryButton from "../SecondaryButton";
import MathKeyboard from "../../MathKeyboard";

type SolutionComponentProps = {
  solution: string[];
};

export default function SolutionComponent({
  solution,
}: SolutionComponentProps) {
  const [displayHelp, setDisplayHelp] = useState(false);

  return (
    <SolutionComponentStyled>
      <div className={displayHelp ? "help visible" : "help"}>
        {solution.map((line, index) => (
          <li key={index}>
            {/* <BlockMath math={line} /> */}
            <BlockMath>{line}</BlockMath>
          </li>
        ))}
      </div>
      <div className="buttons-container">
        <SecondaryButton
          label="Valider"
          // className="validate"
          onClick={() => {}}
        />
        {!displayHelp ? (
          <SecondaryButton
            label="Aide-moi"
            // className="help"
            onClick={() => setDisplayHelp(true)}
            // disabled={timeLeft !== 0 ? true : false}
          />
        ) : (
          <SecondaryButton
            label="Cacher"
            // className="hidden"
            onClick={() => setDisplayHelp(false)}
          />
        )}
      </div>
    </SolutionComponentStyled>
  );
}
const SolutionComponentStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-bottom: 20px;
  .help {
    display: none;
    li {
      text-align: center;
      padding: 10px 0;
    }
  }
  .help.visible {
    display: block;
  }
  /* .help.visible {
    &:nth-child(n + 3) {
      display: none;
    }
  } */
  .buttons-container {
    /* position: relative; */
    margin-top: 20px;
    button {
      /* position: absolute; */
      font-size: 0.9rem;
      font-weight: 500;
      padding: 8px 30px;
      margin: 0 3px;
      /* border: 1.5px solid #000; */
    }
    /* .validate {
      background-color: #1db954;
      color: #000;
    } */
    /* .validate {
      left: -200px;
    } */
    /* .help,
    .hidden {
      left: 100px;
    } */
  }
`;
