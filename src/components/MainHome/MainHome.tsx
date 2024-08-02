import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import TitleContainer from "./TitleContainer";

export default function MainHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <MainHomeStyled>
      <TitleContainer />
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
    </MainHomeStyled>
  );
}
const MainHomeStyled = styled.main`
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  }
`;
