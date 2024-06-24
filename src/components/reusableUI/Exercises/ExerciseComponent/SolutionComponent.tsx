import styled from "styled-components";
import { useState } from "react";
import SecondaryButton from "../../SecondaryButton";
import ReactPlayer from "react-player/youtube";
import Modal from "../../Modal/Modal";
import MathJaxComponent from "../../MathJaxComponent";

type SolutionComponentProps = {
  timeLeft: number;
  solution: string[];
};

export default function SolutionComponent({
  solution,
  timeLeft,
}: SolutionComponentProps) {
  const [displayHelp, setDisplayHelp] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <SolutionComponentStyled>
      <div className={displayHelp ? "help visible" : "help"}>
        {solution.map((line, index) => (
          <p key={index} style={{ fontSize: "1rem" }}>
            <MathJaxComponent latex={line} />
          </p>
        ))}
      </div>
      <div className="buttons-container">
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
            onClick={() => {
              setDisplayHelp(false);
              setIsOpenModal(true);
            }}
          />
        )}
        <SecondaryButton
          label="Valider"
          className="validate-button"
          onClick={() => {
            setIsOpenModal(true);
          }}
        />
      </div>
      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          controls={true}
          style={{ margin: "0 auto" }}
        />
      </Modal>
    </SolutionComponentStyled>
  );
}
const SolutionComponentStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
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
    button {
      background-color: #ebeaea;
      border-color: #949292;
      color: #000;
      border-radius: 5px;
      font-size: 0.9rem;
      font-weight: 400;
      padding: 5px 20px;
      margin: 0 3px;
    }
    .active {
      background: #201f1fe7;
      border-color: #000;
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
