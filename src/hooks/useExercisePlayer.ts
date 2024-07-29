import { useEffect, useState } from "react";

type Props = {
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
};

export default function useExercisePlayer({ timeLeft, setTimeLeft }: Props) {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  return { isRunning, setIsRunning };
}
