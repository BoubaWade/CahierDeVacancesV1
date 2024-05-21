import { useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../../components/reusableUI/PrimaryButton";

export default function Sign() {
  const [signupActived, setSignupActived] = useState(false);
  return (
    <SignStyled>
      <div
        className={signupActived ? "container active" : "container"}
        // id="container"
      >
        <div className="form-container sign-up">
          <form>
            <h2>Créer un compte</h2>
            {/* <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div> */}
            <span>or use your email for registeration</span>
            <input type="text" placeholder="Nom" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Mot de passe" />
            <PrimaryButton label="S'inscrire" className="" onClick={() => {}} />
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h2>Connectez-vous</h2>
            {/* <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div> */}
            <span>Utilise ton email et mot de passe</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Mot de passe" />
            <div className="remember-me-container">
              <span>Se souvenir de moi</span>
              <input type="checkbox" />
            </div>
            <PrimaryButton
              label="Se connecter"
              className=""
              onClick={() => {}}
            />
            <a href="#">Mot de passe oublié ?</a>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Bienvenue !</h1>
              <p>Entrez vos informations personnelles pour vous connectez.</p>
              <PrimaryButton
                label="Connexion"
                className="hidden"
                onClick={() => setSignupActived(false)}
              />
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Inscription !</h1>
              <p>Inscrivez-vous avec vos informations personnelles.</p>
              <PrimaryButton
                label="S'inscrire"
                className="hidden"
                onClick={() => setSignupActived(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </SignStyled>
  );
}
const SignStyled = styled.div`
  background-color: #c9d6ff;
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  .container {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    p {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.3px;
      margin: 20px 0;
    }
    span {
      font-size: 12px;
    }
    a {
      color: #333;
      font-size: 13px;
      text-decoration: none;
      margin: 15px 0 10px;
    }
    /* button {
      background-color: #512da8;
      color: #fff;
      font-size: 12px;
      padding: 10px 30px;
      border: 1px solid transparent;
      border-radius: 8px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      margin-top: 10px;
      cursor: pointer;
    } */
    .hidden {
      background-color: transparent;
      border-color: #fff;
    }
    form {
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0 40px;
      height: 100%;
      h2 {
        margin-bottom: 30px;
      }
      .remember-me-container {
        width: 50%;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        span {
          width: 80%;
          margin: 8px 0;
        }
        input {
          width: 10%;
        }
      }
      span {
        margin-bottom: 20px;
      }
      input {
        background-color: #eee;
        border: none;
        margin: 8px 0;
        padding: 10px 15px;
        font-size: 13px;
        border-radius: 8px;
        width: 100%;
        outline: none;
      }
    }
    /* input {
      background-color: #eee;
      border: none;
      margin: 8px 0;
      padding: 10px 15px;
      font-size: 13px;
      border-radius: 8px;
      width: 100%;
      outline: none;
    } */
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }

  .sign-in {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  .container.active .sign-in {
    transform: translateX(100%);
  }

  .sign-up {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  .container.active .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: move 0.6s;
  }

  @keyframes move {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }
    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }

  .social-icons {
    margin: 20px 0;
  }

  .social-icons a {
    border: 1px solid #ccc;
    border-radius: 20%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
    width: 40px;
    height: 40px;
  }

  .toggle-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    /* border-radius: 150px 0 0 100px; */
    /* border-radius: 100px 0 0 70px; */
    border-radius: 30px 0 0 30px;
    z-index: 1000;
  }

  .container.active .toggle-container {
    transform: translateX(-100%);
    /* border-radius: 0 150px 100px 0; */
    border-radius: 0 30px 30px 0;
  }

  .toggle {
    background-color: #512da8;
    height: 100%;
    /* background: linear-gradient(to right, #5c6bc0, #512da8); */
    background: linear-gradient(to right, #8c6da9, #4d088e);
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
  }

  .container.active .toggle {
    transform: translateX(50%);
  }

  .toggle-panel {
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 30px;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
  }

  .toggle-left {
    transform: translateX(-200%);
  }

  .container.active .toggle-left {
    transform: translateX(0);
  }

  .toggle-right {
    right: 0;
    transform: translateX(0);
  }

  .container.active .toggle-right {
    transform: translateX(200%);
  }
`;
