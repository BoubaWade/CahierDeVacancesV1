import play from "../../assets/icons/play.svg";
import pause from "../../assets/icons/pause.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";

type ExercisePlayerProps = {
  time: number;
};

export default function ExercisePlayer({ time }: ExercisePlayerProps) {
  const totalTime = time;
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isRunning, setIsRunning] = useState(false);
  const [booleanState, setBooleanState] = useState(true);

  useEffect(() => {
    let timer: number;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      setBooleanState(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startCountdown = () => {
    setIsRunning(true);
    setTimeLeft(timeLeft);
    setBooleanState(true);
  };

  const pauseCountdown = () => {
    setIsRunning(false);
    setBooleanState(false);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  const calculateProgress = () => {
    return ((totalTime - timeLeft) / totalTime) * 100;
  };

  return (
    <ExercisePlayerStyled>
      {timeLeft !== 0 && (
        <div className="controls">
          {!isRunning ? (
            <img src={play} id="play" onClick={() => startCountdown()} />
          ) : (
            <img src={pause} id="pause" onClick={() => pauseCountdown()} />
          )}
        </div>
      )}
      {timeLeft !== 0 && (
        <div className="info">
          {!isRunning ? (
            <p className="message">Play pour déclencher l'aide</p>
          ) : (
            <p className="message">L'aide sera disponible dans</p>
          )}
          <div className="progress-bar">
            <div
              className="fill"
              style={{
                width: `${calculateProgress()}%`,
                background: timeLeft ? "#1db954" : "red",
              }}
            ></div>
          </div>
          <div className="time">{formatTime(timeLeft)} min</div>
        </div>
      )}

      {timeLeft === 0 && (
        <p className="help-message">L'aide est maintenant disponible !</p>
      )}
    </ExercisePlayerStyled>
  );
}
const ExercisePlayerStyled = styled.div`
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    margin-bottom: 10px;
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
      background-color: #1db954;
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
  }
  .info {
    .message {
      font-size: 0.8rem;
      text-align: center;
      margin: 5px 0;
    }
    .progress-bar {
      background-color: #505050;
      border-radius: 20px;
      .fill {
        width: 0;
        height: 6px;
        border-radius: 20px;
      }
    }
    .time {
      text-align: center;
      font-size: 15px;
      margin: 5px 0;
    }
  }
  .help-message {
    font-size: 0.8rem;
    font-weight: 500;
    text-align: center;
    margin-top: 5px;
  }
`;
