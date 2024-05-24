import { BlockMath } from "react-katex";
import styled from "styled-components";
import PrimaryButton from "../PrimaryButton";
import { useState } from "react";

type SolutionComponentProps = {
  solution: string[];
};

export default function SolutionComponent({
  solution,
}: SolutionComponentProps) {
  const [displayHelp, setDisplayHelp] = useState(true);

  return (
    <SolutionComponentStyled>
      <div className={displayHelp ? "help visible" : "help"}>
        {solution.map((line, index) => (
          <BlockMath key={index}>{line}</BlockMath>
        ))}
      </div>
      <div className="buttons-container">
        <PrimaryButton
          label="Valider"
          //   className="validate"
          onClick={() => {}}
        />
        {!displayHelp ? (
          <PrimaryButton
            label="Aide-moi"
            // className="help"
            onClick={() => setDisplayHelp(true)}
          />
        ) : (
          <PrimaryButton
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
  align-items: center;
  margin-bottom: 50px;
  .help {
    display: none;
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
    button {
      /* position: absolute; */
      margin: 0 3px;
    }
    /* .validate {
      left: -200px;
    } */
    /* .help,
    .hidden {
      left: 100px;
    } */
  }
`;
