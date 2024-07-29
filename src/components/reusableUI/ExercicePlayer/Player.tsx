import Controls from "./Controls";
import Infos from "./Infos";

type PlayerProps = {
  isRunning: boolean;
  timeLeft: number;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  totalTime: number;
};

export default function Player({
  isRunning,
  timeLeft,
  setIsRunning,
  setTimeLeft,
  totalTime,
}: PlayerProps) {
  return (
    <>
      <Controls
        isRunning={isRunning}
        timeLeft={timeLeft}
        setIsRunning={setIsRunning}
        setTimeLeft={setTimeLeft}
      />
      <Infos isRunning={isRunning} totalTime={totalTime} timeLeft={timeLeft} />
    </>
  );
}
