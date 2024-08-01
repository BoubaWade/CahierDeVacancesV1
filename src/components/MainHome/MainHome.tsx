import styled from "styled-components";
import logo from "../../../public/logo.png";
import PrimaryButton from "../reusableUI/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsSignInForm } from "../../features/Sign/authSlice";
import Image from "../reusableUI/Image";

export default function MainHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickSignInButton = () => {
    dispatch(setIsSignInForm(true));
    navigate("/sign");
  };
  const handleClickSignUpButton = () => {
    dispatch(setIsSignInForm(false));
    navigate("/sign");
  };

  return (
    <MainHomeStyled>
      <div className="title-container">
        <Image src={logo} className="logo" />
        <h1>
          Rejoindre
          <br /> <span> Les mathématiques de Math.Max </span> <br />
          c'est préparer votre avenir avec sérénité !
        </h1>
        <div className="buttons-container">
          <PrimaryButton
            label="Connexion"
            className="signIn-button"
            onClick={() => handleClickSignInButton()}
          />
          <PrimaryButton
            label="Inscription"
            className="signUp-button"
            onClick={() => handleClickSignUpButton()}
          />
        </div>
      </div>
      <div className="philosophy-container">
        <div className="texts-container">
          <div className="texts">
            <h2>
              Responsabiliser les esprits,
              <br /> transformer l’avenir :
            </h2>
            <p>
              {/* Sur notre plateforme d'apprentissage en ligne, nous pensons que
              chaque élève a le potentiel d'exceller en mathématiques. Notre
              programme complet  */}
              Mise en disposition d'un tableau de bord pour pouvoir plannifier
              et suivre les devoirs de l'élève.
            </p>
          </div>
          <img src="" />
        </div>
        <div className="texts-container">
          <div className="texts">
            <h2>
              Élevez votre niveau en mathématiques : débloquez votre plein
              potentiel
            </h2>
            <p>
              Plongez-vous dans un monde d'exploration et de découverte des
              mathématiques. Notre plateforme e-learning combine technologie de
              pointe et cours interactifs
            </p>
            <button>bouton</button>
          </div>
        </div>
      </div>
      {/* <div className="imgs-container">
        <div className="img-container">
          <div className="card-overlay">
            <span>Sixieme</span>
            <div className="labels">
              <span onClick={() => navigate("/sixieme/cours")}>COURS</span>
              <span onClick={() => navigate("/sixieme/exercices")}>EXERCICES</span>
            </div>
          </div>
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
        </div>
      </div> */}
    </MainHomeStyled>
  );
}
const MainHomeStyled = styled.main`
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title-container {
    background-color: #000205;
    height: calc(100vh - 80px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logo {
      position: relative;
      width: 100px;
      border-radius: 30%;
    }
    h1 {
      width: 70%;
      font-weight: 500;
      font-size: 1.3rem;
      text-align: center;
      position: relative;
      line-height: 50px;
      span {
        color: #fde047;
        font-size: 3rem;
        font-weight: 700;
      }
    }
    .buttons-container {
      margin-top: 80px;
      .signIn-button,
      .signUp-button {
        font-size: 0.8rem;
        padding: 13px 30px;
        margin: 0 5px;
        border-color: #070d1b;
      }
      .signUp-button {
        background: #fff;
      }
    }
  }
  .philosophy-container {
    background: #fff;
    color: #000;
    padding: 50px 20px;
    .texts-container {
      width: 80%;
      display: flex;
      justify-content: center;
      margin: 0 auto 100px;
    }
    .texts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      h2 {
        width: 70%;
      }
      p {
        width: 70%;
      }
    }
    img {
      width: 45%;
      height: 300px;
      max-width: 520px;
      /* border-radius: 7px 100px 100px 7px; */
      border-radius: 5px;
      box-shadow: 0px -2px 2px 5px rgba(237, 236, 236, 0.806);
    }
  }
  /* .imgs-container {
    background: #cbcbcb;
    width: 100%;
    position: absolute;
    top: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
  } */
`;
