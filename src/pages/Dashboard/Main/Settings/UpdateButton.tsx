import MiniLoader from "../../../../components/reusableUI/MiniLoader";
import SecondaryButton from "../../../../components/reusableUI/SecondaryButton";

type UpdateButtonProps = {
  isLoading: boolean;
};

export default function UpdateButton({ isLoading }: UpdateButtonProps) {
  return (
    <>
      {!isLoading ? (
        <SecondaryButton
          label="Valider les modifications"
          className="submit-button"
        />
      ) : (
        <MiniLoader />
      )}
    </>
  );
}
