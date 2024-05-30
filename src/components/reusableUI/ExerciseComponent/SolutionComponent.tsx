import styled from "styled-components";
import { useState } from "react";
import SecondaryButton from "../SecondaryButton";
import Latex from "react-latex";

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
          <p key={index} style={{ fontSize: "1rem" }}>
            <Latex>{line}</Latex>
          </p>
        ))}
      </div>
      <div className="buttons-container">
        <SecondaryButton label="Valider" onClick={() => {}} />
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
  margin-bottom: 20px;
  margin-top: 20px;
  .help {
    display: none;
    p {
      text-align: center;
      padding: 5px;
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
    margin-top: 20px;
    button {
      font-size: 0.9rem;
      font-weight: 500;
      padding: 8px 30px;
      margin: 0 3px;
    }
  }
`;
