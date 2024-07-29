import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../../components/reusableUI/PrimaryButton";
import { normalizeString } from "../../../../utils/functions";
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { levelToCardMap } from "../../../../data/datasConfig";
import { Level } from "../../../../Types/layoutTypes";

type Action = {
  type: string;
  payload: string;
};
type LevelCardProps = {
  data: any;
  dispatch: React.Dispatch<Action>;
};

export default function LevelCard({ data, dispatch }: LevelCardProps) {
  const { title, isActive, bgImage, icon, navigateTo, handleClickArg } = data;
  const { level } = useSelector((state: RootState) => state.dashboard);
  const navigate = useNavigate();

  const handleActiveCard = (section: string) => {
    dispatch({ type: "SET_ACTIVE", payload: section });
  };

  const handleLevelChange = (level: Level) => {
    const card = levelToCardMap[level];
    if (card) {
      handleActiveCard(card);
    }
  };

  useEffect(() => {
    handleLevelChange(level as Level);
  }, []);

  return (
    <LevelCardStyled
      className={`card ${isActive ? "active" : ""}`}
      onClick={() => handleActiveCard(handleClickArg)}
    >
      <p className={`title ${normalizeString(title)}`}>{title}</p>
      <img src={bgImage} className="bg-image" />
      <div className="shadow"></div>
      <div className="label">
        <img src={icon} className="icon" />
        <p className="level">{title}</p>
        <PrimaryButton
          label="Vers la page"
          className="primary-button"
          onClick={() => navigate(navigateTo)}
        />
      </div>
    </LevelCardStyled>
  );
}
const LevelCardStyled = styled.div`
  .title {
    position: absolute;
    top: 100px;
    font-size: 1.2rem;
    font-weight: 500;
    transform: rotate(-90deg);
  }
  .sixieme {
    left: -13px;
  }
  .troisieme,
  .terminale {
    left: -22px;
  }
  .premiere,
  .seconde {
    left: -20px;
  }
  .cinquieme,
  .quatrieme {
    left: -28px;
  }
  .bg-image {
    width: 100%;
    height: 100%;
    filter: brightness(20%);
  }
  .label {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    height: 40px;
    transition: 0.5s ease;
    color: #fff;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 25px;
      margin-left: 5px;
    }
    .level {
      font-size: 1.3rem;
      margin-left: 15px;
      white-space: pre;
      transition: 0.5s ease;
    }
    .primary-button {
      font-size: 0.7rem;
      padding: 10px;
      margin-left: 20px;
      margin-top: 0px;
    }
  }
  .shadow {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(0, #0004, transparent);
  }
  @media (max-width: 1024px) {
    .title {
      font-size: 1rem;
    }
    .bg-image {
      display: none;
    }
    .label {
      transform: rotate(-90deg);
      .icon {
        width: 24px;
        height: 24px;
      }
      .level {
        display: none;
      }
      .primary-button {
        font-size: 0.6rem;
      }
    }
  }
`;
