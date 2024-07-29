import styled from "styled-components";
import { getGlobalScoreRate } from "../../../../utils/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { Exercise } from "../../../../Types/dataTypes";

type GlobalScoreProps = {
  todosCompleted: Exercise[];
};

export default function GlobalScore({ todosCompleted }: GlobalScoreProps) {
  const { todoFilteredBySelect } = useSelector(
    (state: RootState) => state.dashboard
  );

  const globalScoreRate = getGlobalScoreRate(todoFilteredBySelect);
  const isRateExist = globalScoreRate || globalScoreRate === 0;

  return (
    <GlobalScoreStyled>
      <h3>Résultat global</h3>
      <p>Taux de réussite global :</p>
      <span className={`${globalScoreRate >= 50 ? "good" : "bad"}`}>
        {isRateExist ? `${globalScoreRate} %` : "--"}
      </span>
      <p>Devoir(s) complet(s) :</p>
      <span>{todosCompleted.length}</span>
    </GlobalScoreStyled>
  );
}
const GlobalScoreStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f1f2f3;
  width: 270px;
  padding: 15px;
  border-radius: 7px;
  border: 1px solid #d9d7d7;
  box-shadow: 0px 2px 15px -10px rgba(0, 0, 0, 0.6);
  h3 {
    font-size: 0.7rem;
    font-weight: 600;
    margin-bottom: 15px;
    padding: 7px 40px;
    border-radius: 6px;
    background: #000;
    color: #f1f2f3;
  }
  p {
    font-size: 0.8rem;
    padding: 3px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
  }
  span {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: #008000;
    &.good {
      color: #008000;
    }
    &.bad {
      color: #ca2c10;
    }
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
