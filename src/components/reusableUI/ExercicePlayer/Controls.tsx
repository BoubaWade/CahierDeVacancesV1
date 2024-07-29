import play from "../../../assets/icons/play.svg";
import pause from "../../../assets/icons/pause.svg";
import styled from "styled-components";

type ControlsProps = {
  isRunning: boolean;
  timeLeft: number;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
};

export default function Controls({
  isRunning,
  timeLeft,
  setIsRunning,
  setTimeLeft,
}: ControlsProps) {
  const startCountdown = () => {
    setIsRunning(true);
    setTimeLeft(timeLeft);
  };

  const pauseCountdown = () => {
    setIsRunning(false);
  };

  return (
    <ControlsStyled className="controls">
      {!isRunning ? (
        <img src={play} id="play" onClick={() => startCountdown()} />
      ) : (
        <img src={pause} id="pause" onClick={() => pauseCountdown()} />
      )}
    </ControlsStyled>
  );
}
const ControlsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-bottom: 15px;
  margin-left: 20px;
  #play,
  #pause {
    width: 35px;
    height: 35px;
    padding: 10px;
    border-radius: 50%;
    transition: all 0.3s ease;
    border: 1.5px solid #000;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
  #play {
    background-color: #4c7f43;
    &:hover {
      background: #189945;
    }
  }
  #pause {
    background-color: #f8f6f6;
    &:hover {
      background: #ff0000;
    }
  }
`;
