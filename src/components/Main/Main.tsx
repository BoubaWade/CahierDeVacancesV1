import styled from "styled-components";
import fibonacci from "../../assets/fibonacci.jpg";
import emc2 from "../../assets/emc2.jpg";
import calc from "../../assets/calc.jpg";
import tableImage from "../../assets/table.jpg";
import PrimaryButton from "../reusableUI/PrimaryButton";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  return (
    <MainStyled>
      <h1>
        Rejoindre
        <br /> <span> " Les mathématiques de Vacances " </span> <br />
        et prépare ta prochaine classe avec sérénité !
      </h1>
      <div className="buttons-container">
        <PrimaryButton
          label="Connexion"
          className="signIn-button"
          onClick={() => navigate("/connexion")}
        />
        <PrimaryButton
          label="Inscription"
          className="signUp-button"
          onClick={() => navigate("/inscription")}
        />
      </div>
      <div className="imgs-container">
        <div className="img-container">
          <div className="card-overlay">
            <span>CM2</span>
            <div className="labels">
              <span onClick={() => navigate("/cm2/cours")}>COURS</span>
              <span onClick={() => navigate("/cm2/exercices")}>EXERCICES</span>
            </div>
          </div>
          <img src={calc} className="fibonacci-img" />
        </div>
        <div className="img-container">
          <div className="card-overlay">
            <span>4ème</span>
            <div className="labels">
              <span onClick={() => navigate("/quatrieme/cours")}>COURS</span>
              <span onClick={() => navigate("/quatrieme/exercices")}>
                EXERCICES
              </span>
            </div>
          </div>
          <img src={tableImage} className="fibonacci-img" />
        </div>
        <div className="img-container">
          <div className="card-overlay">
            <span>3ème</span>
            <div className="labels">
              <span onClick={() => navigate("/troisieme/cours")}>COURS</span>
              <span onClick={() => navigate("/troisieme/exercices")}>
                EXERCICES
              </span>
            </div>
          </div>

          <img src={tableImage} className="fibonacci-img" />
        </div>
        <div className="img-container">
          <div className="card-overlay">
            <span>Première</span>
            <div className="labels">
              <span onClick={() => navigate("/premiere/cours")}>COURS</span>
              <span onClick={() => navigate("/premiere/exercices")}>
                EXERCICES
              </span>
            </div>
          </div>

          <img src={fibonacci} className="fibonacci-img" />
        </div>
        <div className="img-container">
          <div className="card-overlay">
            <span> Terminale</span>
            <div className="labels">
              <span onClick={() => navigate("/terminale/cours")}>COURS</span>
              <span onClick={() => navigate("/terminale/exercices")}>
                EXERCICES
              </span>
            </div>
          </div>
          <img src={emc2} className="fibonacci-img" />
        </div>
      </div>
    </MainStyled>
  );
}
const MainStyled = styled.main`
  color: #ffff;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 200px;
  align-items: center;
  h1 {
    width: 70%;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
    span {
      color: #8c6da9;
      font-size: 3.8rem;
      font-family: "Indie Flower", cursive;
      font-weight: 700;
      font-style: normal;
    }
  }
  .buttons-container {
    margin-top: 80px;
    .signIn-button,
    .signUp-button {
      font-size: 0.8rem;
      padding: 13px 30px;
      margin: 0 5px;
    }
  }
  .imgs-container {
    width: 80%;
    position: absolute;
    top: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 40px 0;
    .img-container {
      position: relative;
      width: 300px;
      height: 200px;

      margin: 10px;
      border-radius: 3px;
      overflow: hidden;
      cursor: pointer;
      .card-overlay {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
        background: #000;
        opacity: 80%;
        position: absolute;
        .course {
          background-color: #000;
          font-size: 1rem;
          padding: 7px 20px;
        }
        .labels {
          font-size: 1.2rem;
          margin-top: 40px;
          span {
            margin-right: 10px;
            padding: 2px 10px;
            &:hover {
              text-decoration: overline;
            }
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
