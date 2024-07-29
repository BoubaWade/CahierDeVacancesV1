import ProgressBar from "./ProgressBar";
import { formatTime } from "../../../utils/functions";
import styled from "styled-components";

type InfosProps = {
  isRunning: boolean;
  totalTime: number;
  timeLeft: number;
};

export default function Infos({ isRunning, totalTime, timeLeft }: InfosProps) {
  return (
    <InfosStyled className="info">
      {!isRunning ? (
        <p className="message">Appuyer pour déclencher l'aide</p>
      ) : (
        <p className="message">L'aide sera disponible dans</p>
      )}
      <ProgressBar totalTime={totalTime} timeLeft={timeLeft} />
      <div className="time">{formatTime(timeLeft)} min</div>
    </InfosStyled>
  );
}
const InfosStyled = styled.div`
  .message {
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 5px;
    .message.dispo {
      margin-bottom: 20px;
    }
  }
  .time {
    text-align: center;
    font-size: 0.8rem;
    margin: 5px 0;
  }
`;
