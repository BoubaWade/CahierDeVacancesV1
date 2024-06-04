import styled from "styled-components";
import CalendarComponent from "../../../../components/reusableUI/CalendarComponent";
import SecondaryButton from "../../../../components/reusableUI/SecondaryButton";

export default function MainHomeDashboard() {
  return (
    <MainHomeDashboardStyled>
      <h1>TABLEAU DE BORD</h1>
      <div className="header">
        <div className="welcome">
          <h3>Bonjour Boubacar !</h3>
          <p>Content de vous voir.</p>
        </div>
        <div className="courses-inProgress">
          <span>15</span>
          <p>Exercice(s) restant(s)</p>
        </div>
        <div className="courses-completed">
          <span>12</span>
          <p>Exercice(s) términé(s)</p>
        </div>
      </div>
      <section>
        <div>
          <div className="todo-done-recently">
            <h3>Récents devoirs</h3>
            <ul>
              <li>
                <span>Théorème de Thalès</span>
                <span>Exercice: 4</span>
                {/* <span>Date</span> */}
              </li>
              <li>
                <span>Trigonomètrie</span>
                <span>Exercice: 1</span>
                {/* <span>Date</span> */}
              </li>
              <li>
                <span>Calcul d'aire et de Volume</span>
                <span>Exercice: 7</span>
                {/* <span>Date</span> */}
              </li>
              <li>
                <span>Théorème de Pythagore</span>
                <span>Exercice: 11</span>
                {/* <span>Date</span> */}
              </li>
              <li>
                <span>Calcul Littéral</span>
                <span>Exercice: 9</span>
                {/* <span>Date</span> */}
              </li>
            </ul>
          </div>
          <div className="infos-bar">
            <SecondaryButton label="Choisir une date pour rajouter des devoirs" />
            <SecondaryButton label="" />
          </div>
        </div>
        <CalendarComponent />
      </section>
    </MainHomeDashboardStyled>
  );
}
const MainHomeDashboardStyled = styled.div`
  max-width: 70%;
  margin: auto;
  /* margin-left: 40px; */
  padding: 40px 0;
  h1 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 40px;
  }
  .header {
    display: flex;
    /* width: 100%; */
    height: 100px;
    justify-content: space-between;
    /* column-gap: 20px; */
    margin-bottom: 20px;
    .welcome {
      background: #f1f2f3;
      width: 60%;
      width: calc(100% - 250px);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 1px 2px 10px -10px rgba(0, 0, 0, 0.8);
      h3 {
        margin-bottom: 5px;
        font-weight: 600;
      }
      p {
        font-size: 0.9rem;
      }
    }
    .courses-completed,
    .courses-inProgress {
      background: #f1f2f3;
      /* width: 20%; */
      width: 150px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      /* column-gap: 10px; */
      border-radius: 8px;
      padding: 10px;
      margin-left: 15px;
      text-align: center;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 2px 2px 10px -10px rgba(0, 0, 0, 0.8);
      span {
        width: 40%;
        font-size: 1.8rem;
        font-weight: 700;
      }
      p {
        width: 60%;
        font-size: 0.7rem;
        font-weight: 500;
      }
    }
  }
  section {
    /* width: 100%; */
    background: #f1f2f3;
    display: flex;
    justify-content: space-between;
    /* column-gap: 20px; */
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    .todo-done-recently {
      width: 460px;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* background: #f1f2f3; */
      background: #fff;
      /* border: 1px solid #d9d7d7; */
      border-radius: 8px;
      margin-right: 20px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0px 2px 10px -10px rgba(0, 0, 0, 0.8);
      h3 {
        font-weight: 700;
        font-size: 1rem;
        margin: 0 0 20px;
      }
      ul {
        width: 100%;
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px 15px;
          span {
            font-size: 0.9rem;
            /* margin-left: 15px; */
          }
        }
      }
    }
    .infos-bar {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid red;
      margin-top: 20px;
      border-radius: 8px;
    }
  }
`;
