import { useSelector } from "react-redux";
import {
  deleteStripeCustomer,
  deleteSubscription,
} from "../../../../stripe/api";
import { RootState } from "../../../../app/store";
import PrimaryButton from "../../../../components/reusableUI/PrimaryButton";
import styled from "styled-components";
import { deleteAllToDosFromDatabaseByUser } from "../../../../supabase/api";

type SettingsModalContentProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUnsubscribe: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SettingsModalContent({
  setOpenModal,
  setIsUnsubscribe,
  setError,
}: SettingsModalContentProps) {
  const { user } = useSelector((state: RootState) => state.auth);

  const handleDeleteAllToDos = async (user: any) => {
    try {
      await deleteAllToDosFromDatabaseByUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnsubscribe = async () => {
    try {
      await deleteStripeCustomer(user.email);
      await deleteSubscription(user.id);
      setIsUnsubscribe(true);
      handleDeleteAllToDos(user);
      setTimeout(() => {
        setIsUnsubscribe(false);
        setOpenModal(false);
        window.location.reload();
      }, 2000);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <SettingsModalContentStyled>
      <h4>Vous voulez vraiment résilier votre abonnement ?</h4>
      <div className="unsubscribe-buttons-container">
        <PrimaryButton
          label="Confirmer"
          className="confirm"
          onClick={() => handleUnsubscribe()}
        />
        <PrimaryButton
          label="Annuler"
          className="cancel"
          onClick={() => setOpenModal(false)}
        />
      </div>
    </SettingsModalContentStyled>
  );
}

const SettingsModalContentStyled = styled.div`
  margin: 0 auto;
  h4 {
    color: #fff;
    margin: 20px auto;
  }
  .unsubscribe-buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    .confirm,
    .cancel {
      width: 150px;
      padding: 7px;
      margin: 0 10px;
    }
  }
`;
