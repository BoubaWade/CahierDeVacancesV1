import styled from "styled-components";
import { LevelState } from "../../../../Types/layoutTypes";
import { getLevelCardsData } from "../../../../data/datasConfig";
import LevelCard from "./LevelCard";

type Action = {
  type: string;
  payload: string;
};
type LevelCardListProps = {
  state: LevelState;
  dispatch: React.Dispatch<Action>;
};

export default function LevelCardList({ state, dispatch }: LevelCardListProps) {
  const levelCardsData = getLevelCardsData(state);

  return (
    <LevelCardListStyled>
      <h2>Les classes</h2>
      <div className="list-cards-container">
        {levelCardsData.map((data, index) => (
          <LevelCard key={index} data={data} dispatch={dispatch} />
        ))}
      </div>
    </LevelCardListStyled>
  );
}

const LevelCardListStyled = styled.div`
  width: 685px;
  margin: 0 auto 40px;
  h2 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 10px;
    font-weight: 600;
  }
  .list-cards-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 300px;
    .card {
      position: relative;
      min-width: 50px;
      background: linear-gradient(to right, #fde047, #c2a205);
      overflow: hidden;
      margin: 3px;
      background-size: auto 150%;
      background-position: center;
      cursor: pointer;
      transition: all 0.5s ease;
      border-radius: 15px;
      box-shadow: 0px 4px 15px -10px rgba(0, 0, 0, 0.8);
      &.active {
        flex-grow: 10000;
        background-size: auto 100%;
        max-width: 350px;
        width: 50px;
        .label {
          bottom: 20px;
          left: 20px;
          .level {
            opacity: 1;
          }
          .icon {
            display: none;
          }
        }
      }
      &:not(.active) {
        .bg-image {
          display: none;
        }
        .label {
          bottom: 10px;
          left: 5px;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    width: 450px;
    h2 {
      margin-bottom: 20px;
    }
    .list-cards-container {
      height: 420px;
      height: 360px;
      transform: rotate(90deg);
      align-items: center;
      .card {
        height: 400px;
        min-width: 45px;
        border-radius: 15px;
        &.active {
          flex-grow: 0;
          .label {
            bottom: 10px;
            left: 5px;
          }
        }
      }
    }
  }
`;
