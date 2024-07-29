import styled from "styled-components";
import Controls from "./Controls";
import Infos from "./Infos";
import useExercisePlayer from "../../../hooks/useExercisePlayer";

type ExercisePlayerProps = {
  totalTime: number;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
};

export default function ExercisePlayer({
  totalTime,
  timeLeft,
  setTimeLeft,
}: ExercisePlayerProps) {
  const { isRunning, setIsRunning } = useExercisePlayer({
    timeLeft,
    setTimeLeft,
  });

  return (
    <ExercisePlayerStyled>
      {timeLeft !== 0 && (
        <>
          <Controls
            isRunning={isRunning}
            timeLeft={timeLeft}
            setIsRunning={setIsRunning}
            setTimeLeft={setTimeLeft}
          />
          <Infos
            isRunning={isRunning}
            totalTime={totalTime}
            timeLeft={timeLeft}
          />
        </>
      )}
      {timeLeft === 0 && (
        <p className="help-message">L'aide est maintenant disponible !</p>
      )}
    </ExercisePlayerStyled>
  );
}
const ExercisePlayerStyled = styled.div`
  position: relative;
  padding-top: 10px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  .help-message {
    font-size: 0.8rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 5px;
  }
`;
