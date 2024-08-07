import styled from "styled-components";

type TitleAndEmailProps = {
  user: any;
  isMonthly: boolean;
};

export default function TitleAndEmail({ user, isMonthly }: TitleAndEmailProps) {
  return (
    <TitleAndEmailStyled>
      {isMonthly ? (
        <h1>
          <span>S'abonner à Premium</span> <br /> 15,90€<span> par mois</span>
        </h1>
      ) : (
        <h1>
          <span>S'abonner pour toute l'année scolaire</span> <br /> 149€
          <span> par an</span>
        </h1>
      )}
      <label htmlFor="email">Votre email</label>
      <input
        type="email"
        id="email"
        defaultValue={user && user.email && user.email}
        disabled
      />
    </TitleAndEmailStyled>
  );
}
const TitleAndEmailStyled = styled.div`
  h1 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 50px;
    font-weight: 600;
    span {
      color: #595858;
      font-size: 14px;
      font-weight: 400;
    }
  }
  label {
    font-size: 13px;
    font-weight: 500;
  }
  input {
    box-sizing: border-box;
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    margin-bottom: 20px;
  }
`;
