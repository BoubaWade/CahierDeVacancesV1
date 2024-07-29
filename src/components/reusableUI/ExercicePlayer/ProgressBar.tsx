import styled from "styled-components";

type ProgressBarProps = {
  totalTime: number;
  timeLeft: number;
};
export default function ProgressBar({ totalTime, timeLeft }: ProgressBarProps) {
  const calculateProgress = () => {
    return ((totalTime - timeLeft) / totalTime) * 100;
  };
  return (
    <ProgressBarStyled>
      <div
        className="fill"
        style={{
          width: `${calculateProgress()}%`,
          background: timeLeft ? "#1db954" : "red",
        }}
      ></div>
    </ProgressBarStyled>
  );
}
const ProgressBarStyled = styled.div`
  background-color: #505050;
  border-radius: 20px;
  .fill {
    width: 0;
    height: 6px;
    border-radius: 20px;
  }
`;
