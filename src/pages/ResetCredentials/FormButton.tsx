import styled from "styled-components";
import MiniLoader from "../../components/reusableUI/MiniLoader";
import SecondaryButton from "../../components/reusableUI/SecondaryButton";

type FormButtonProps = {
  isLoading: boolean;
};

export default function FormButton({ isLoading }: FormButtonProps) {
  return (
    <FormButtonStyled>
      {!isLoading ? (
        <SecondaryButton
          label="Valider les modifications"
          className="submit-button"
        />
      ) : (
        <MiniLoader />
      )}
    </FormButtonStyled>
  );
}
const FormButtonStyled = styled.div`
  .submit-button {
    display: block;
    margin: 25px auto 0;
    padding: 7px 20px;
    border-radius: 5px;
  }
`;
