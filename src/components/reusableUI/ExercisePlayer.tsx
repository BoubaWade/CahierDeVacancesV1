import play from "../../assets/icons/play.svg";
import back from "../../assets/icons/backward.svg";
import next from "../../assets/icons/nextward.svg";
import pause from "../../assets/icons/pause.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";

type ExercisePlayerProps = {
  time: number;
  // displayNextExercise: () => void;
  // displayPreviousExercise: () => void;
};

export default function ExercisePlayer({
  time,
}: // displayNextExercise,
// displayPreviousExercise,
ExercisePlayerProps) {
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
          {/* <img src={back} onClick={displayPreviousExercise} /> */}
          <>
            {!isRunning ? (
              <img src={play} id="play" onClick={() => startCountdown()} />
            ) : (
              <img src={pause} id="pause" onClick={() => pauseCountdown()} />
            )}
          </>
          {/* <img src={next} onClick={displayNextExercise} /> */}
        </div>
      )}
      {timeLeft !== 0 && (
        <div className="info">
          {!isRunning ? (
            <p className="message">Play pour déclencher l'aide</p>
          ) : (
            <p className="message">L'aide sera disponible dans :</p>
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
    gap: 8px;
    background-color: #a6a4a437;
    /* background: linear-gradient(to right, #c2c1c1, #a6a4a4); */
    border: 1.5px solid #a6a4a48a;
    /* border: 1.5px solid #000; */
    box-shadow: 0 3px 10px #c2c1c1;

    width: 170px;
    height: 45px;
    border-radius: 25px;
    text-align: center;
    margin-bottom: 10px;

    background-image: radial-gradient(#2d6a4f 0.75px, transparent 0.75px),
      radial-gradient(#2d6a4f 0.75px, #ffffff 0.75px);
    background-size: 30px 30px;
    background-position: 0 0, 20px 20px;
    /* img {
      width: 40px;
      height: 40px;
      padding: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        background-color: #fff;
      }
    } */
    #play,
    #pause {
      color: #fff;
      width: 35px;
      height: 35px;
      padding: 10px;
      border-radius: 50%;
      transition: all 0.3s ease;
      /* border: 1.5px solid #a6a4a48a; */
      border: 1.5px solid #000;
      cursor: pointer;
      transition: all 0.2s ease;
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
      background-color: #c2c1c1;
      border: none;
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
