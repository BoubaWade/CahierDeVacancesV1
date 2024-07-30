import styled from "styled-components";
import UpdateButton from "./UpdateButton";

type Props = {
  isLoading: boolean;
  confirmed: boolean;
};

export default function ButtonContainer({ isLoading, confirmed }: Props) {
  return (
    <ButtonContainerStyled>
      {!confirmed ? (
        <UpdateButton isLoading={isLoading} />
      ) : (
        <p className="confirm-message">Modifications enregistrées !</p>
      )}
    </ButtonContainerStyled>
  );
}
const ButtonContainerStyled = styled.div`
  .confirm-message {
    font-size: 15px;
    margin-top: 20px;
  }
`;
