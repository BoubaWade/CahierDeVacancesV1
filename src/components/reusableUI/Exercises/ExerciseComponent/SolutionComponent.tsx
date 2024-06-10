import styled from "styled-components";
import { useState } from "react";
import Latex from "react-latex";
import SecondaryButton from "../../SecondaryButton";

type SolutionComponentProps = {
  timeLeft: number;
  solution: string[];
};

export default function SolutionComponent({
  solution,
  timeLeft,
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
        <SecondaryButton
          label="Valider"
          className="validate-button"
          onClick={() => {}}
        />
        {!displayHelp ? (
          <SecondaryButton
            label="Aide-moi"
            className={`${timeLeft !== 0 ? "inActive" : "active"}`}
            onClick={() => setDisplayHelp(true)}
            disabled={timeLeft !== 0 ? true : false}
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
  .buttons-container {
    margin-top: 20px;
    button {
      background-color: #ebeaea;
      border-color: #949292;
      color: #000;
      border-radius: 5px;
      font-size: 0.9rem;
      font-weight: 500;
      padding: 8px 30px;
      margin: 0 3px;
    }
    .active {
      background: #201f1fe7;
      border-color: #889d84;
      border: 1px solid #416c39;
      color: #fcfcfc;
      &:hover {
        background: #000;
      }
    }
    .inActive {
      color: #cac9c9;
      pointer-events: none;
    }
    .validate-button {
      background: #4c7f43;
      border-color: #4c7f43;
      color: #fcfcfc;
      &:hover {
        background: #416c39;
      }
    }
  }
`;
