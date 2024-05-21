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
  const [displayHelp, setDisplayHelp] = useState(false);

  return (
    <SolutionComponentStyled>
      <div className={displayHelp ? "help visible" : "help"}>
        {solution.map((line, index) => (
          <BlockMath key={index}>{line}</BlockMath>
        ))}
      </div>
      <>
        <PrimaryButton label="Valider" onClick={() => {}} />
        {!displayHelp ? (
          <PrimaryButton
            label="Aide-moi"
            onClick={() => setDisplayHelp(true)}
          />
        ) : (
          <PrimaryButton label="Cacher" onClick={() => setDisplayHelp(false)} />
        )}
      </>
    </SolutionComponentStyled>
  );
}
const SolutionComponentStyled = styled.div`
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
`;
