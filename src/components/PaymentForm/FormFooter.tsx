import styled from "styled-components";
import MiniLoader from "../reusableUI/MiniLoader";

type FormFooterProps = {
  isButtonDisabled: boolean;
  isLoading: boolean;
  error: boolean;
  errorMessage: string;
};

export default function FormFooter({
  isButtonDisabled,
  isLoading,
  error,
  errorMessage,
}: FormFooterProps) {
  return (
    <FormFooterStyled>
      <label htmlFor="name">Nom du titulaire de la carte</label>
      <input type="text" id="name" />
      <button
        type="submit"
        disabled={isButtonDisabled}
        className="submit-button"
      >
        {!isLoading ? "Payer et s'abonner" : <MiniLoader />}
      </button>
      {error && <p className="error">{errorMessage} </p>}
    </FormFooterStyled>
  );
}
const FormFooterStyled = styled.div`
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
  input#name {
    margin-bottom: 30px;
    outline: none;
  }
  .submit-button {
    width: 100%;
    background: #000;
    color: #fff;
    font-weight: 500;
    padding: 10px 25px;
    display: block;
    margin: 0 auto 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    &:disabled {
      background-color: #bbb;
      color: rgb(255, 255, 255);
      cursor: not-allowed;
    }
  }
  .error {
    font-size: 13px;
    text-align: center;
    color: #e6320e;
  }
`;
