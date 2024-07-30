import styled from "styled-components";
import MiniLoader from "../../../../components/reusableUI/MiniLoader";
import SecondaryButton from "../../../../components/reusableUI/SecondaryButton";

type UpdateButtonProps = {
  isLoading: boolean;
};

export default function UpdateButton({ isLoading }: UpdateButtonProps) {
  return (
    <UpdateButtonStyled>
      {!isLoading ? (
        <SecondaryButton
          label="Valider les modifications"
          className="submit-button"
        />
      ) : (
        <MiniLoader />
      )}
    </UpdateButtonStyled>
  );
}
const UpdateButtonStyled = styled.div`
  .submit-button {
    margin-top: 20px;
    padding: 7px 20px;
    border-radius: 5px;
  }
`;
