import styled from "styled-components";
import percent from "../../../../assets/percent.svg";
import racine from "../../../../assets/racine.svg";
import infinity from "../../../../assets/infinity-solid.svg";
import functionFI from "../../../../assets/functionFI.svg";
import bgCm2 from "../../../../assets/table.jpg";
import bg3eme from "../../../../assets/workspace.jpg";
import schooldesk from "../../../../assets/school-desk.jpg";
import emc2 from "../../../../assets/emc2.jpg";
import { useReducer } from "react";
import PrimaryButton from "../../../../components/reusableUI/PrimaryButton";
import { useNavigate } from "react-router-dom";

type State = {
  isCm2Active: boolean;
  isTroisiemeActive: boolean;
  isPremiereActive: boolean;
  isTerminaleActive: boolean;
};
type Action = {
  type: string;
  payload: string;
};
const initialState = {
  isCm2Active: false,
  isTroisiemeActive: false,
  isPremiereActive: false,
  isTerminaleActive: true,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_ACTIVE":
      return {
        isCm2Active: false,
        isTroisiemeActive: false,
        isPremiereActive: false,
        isTerminaleActive: false,
        [action.payload]: true,
      };
    default:
      return state;
  }
}

export default function LevelCardList() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isCm2Active,
    isTroisiemeActive,
    isPremiereActive,
    isTerminaleActive,
  } = state;

  const handleClick = (section: string) => {
    dispatch({ type: "SET_ACTIVE", payload: section });
  };

  return (
    <LevelCardListStyled>
      <h3>Les classes</h3>
      <div className="list-cards-container">
        <div
          className={`card ${isCm2Active ? "active" : ""}`}
          onClick={() => handleClick("isCm2Active")}
        >
          {/* <div>
          <p></p>
          <p></p>
        </div> */}
          <p className="title cm2">CM2</p>
          <img src={bgCm2} className="bg-image" />
          <div className="shadow"></div>
          <div className="label">
            <img src={percent} className="icon" />
            <p className="level">CM2</p>
            <PrimaryButton
              label="Vers la page"
              className="primary-button"
              onClick={() => navigate("/cm2")}
            />
          </div>
        </div>

        <div
          className={`card ${isTroisiemeActive ? "active" : ""}`}
          onClick={() => handleClick("isTroisiemeActive")}
        >
          <p className="title troisieme">Troisième</p>
          <img src={bg3eme} className="bg-image" />
          <div className="shadow"></div>
          <div className="label">
            <img src={racine} className="icon" />
            <p className="level">Troisième</p>
            <PrimaryButton
              label="Vers la page"
              className="primary-button"
              onClick={() => navigate("/troisieme")}
            />
          </div>
        </div>

        <div
          className={`card ${isPremiereActive ? "active" : ""}`}
          onClick={() => handleClick("isPremiereActive")}
        >
          <p className="title premiere">Première</p>
          <img src={emc2} className="bg-image" />
          <div className="shadow"></div>
          <div className="label">
            <img src={infinity} className="icon" />
            <p className="level">Première</p>
            <PrimaryButton
              label="Vers la page"
              className="primary-button"
              onClick={() => navigate("/premiere")}
            />
          </div>
        </div>

        <div
          className={`card ${isTerminaleActive ? "active" : ""}`}
          onClick={() => handleClick("isTerminaleActive")}
        >
          <p className="title terminale">Términale</p>
          <img src={schooldesk} className="bg-image" />
          <div className="shadow"></div>
          <div className="label">
            <img src={functionFI} className="icon" />
            <p className="level">Términale</p>
            <PrimaryButton
              label="Vers la page"
              className="primary-button"
              onClick={() => navigate("/terminale")}
            />
          </div>
        </div>
      </div>
    </LevelCardListStyled>
  );
}

const LevelCardListStyled = styled.div`
  h3 {
    text-align: center;
    margin-bottom: 10px;
    font-size: 1.5rem;
    font-weight: 500;
  }
  .list-cards-container {
    display: flex;
    justify-content: center;
    max-width: 600px;
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
      border-radius: 20px;
      box-shadow: 0px 4px 15px -10px rgba(0, 0, 0, 0.8);

      .title {
        position: absolute;
        top: 100px;
        font-size: 1.2rem;
        font-weight: 500;
        transform: rotate(-90deg);
      }
      .cm2 {
        left: 3px;
      }
      .troisieme,
      .premiere {
        left: -20px;
      }
      .terminale {
        left: -23px;
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
          height: 35px;
          font-size: 0.7rem;
          padding: 0 15px;
          margin-left: 20px;
          margin-top: 0px;
        }
      }
      &.active {
        flex-grow: 10000;
        background-size: auto 100%;
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
      .shadow {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100px;
        background: linear-gradient(0, #0004, transparent);
      }
    }
  }
`;
