import styled from "styled-components";
import {
  deleteStripeCustomer,
  deleteSubscription,
} from "../../../../stripe/api";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import SecondaryButton from "../../../../components/reusableUI/SecondaryButton";
import Modal from "../../../../components/reusableUI/Modal/Modal";
import PrimaryButton from "../../../../components/reusableUI/PrimaryButton";
import {
  updateUserEmail,
  updateUserName,
  updateUserPassword,
} from "../../../../supabase/api";
import MiniLoader from "../../../../components/reusableUI/MiniLoader";

export default function Settings() {
  const { user } = useSelector((state: RootState) => state.auth);
  const [nameValue, setNameValue] = useState<string>(user.user_metadata?.name);
  const [emailValue, setEmailValue] = useState<string>(
    user.user_metadata?.email
  );
  const [passwordValue, setPasswordValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (nameValue !== user?.user_metadata?.name) updateUserName(nameValue);
      if (emailValue !== user?.user_metadata?.email)
        updateUserEmail(emailValue);
      if (passwordValue) updateUserPassword(passwordValue);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnsubscribe = async () => {
    await deleteStripeCustomer(user.email);
    await deleteSubscription(user.id);
    console.log(`Désabonnement de ${user.email} enregistré`);
  };
  return (
    <SettingsStyled>
      <h2>Modifier vos paramètres</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </div>
        {!isLoading ? (
          <SecondaryButton
            label="Valider les modifications"
            className="submit-button"
          />
        ) : (
          <MiniLoader />
        )}
      </form>
      <p onClick={() => setOpenModal(true)}>Résilier mon abonnement</p>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        className="modal"
      >
        <h4>Vous voulez vraiment résilier votre abonnement?</h4>
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
      </Modal>
    </SettingsStyled>
  );
}
const SettingsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 20px 20px;
  h2 {
    color: #595858;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 50px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    min-width: 350px;
    height: 320px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    div {
      width: 100%;
      label {
        display: block;
        font-size: 13px;
        font-weight: 500;
        text-align: left;
      }
      input {
        box-sizing: border-box;
        width: 100%;
        padding: 8px 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: white;
        margin-bottom: 15px;
        color: #595858;
        outline-color: #fa755a;
      }
    }
    .submit-button {
      margin-top: 20px;
      padding: 7px 20px;
      border-radius: 5px;
    }
  }
  p {
    font-size: 14px;
    margin-top: 100px;
    cursor: pointer;
  }
  .modal {
    background: rgba(0, 0, 0, 0.95);
    h4 {
      color: #fff;
      margin: 20px auto;
    }
    .unsubscribe-buttons-container {
      margin: 0 auto;
      .confirm,
      .cancel {
        width: 150px;
        padding: 7px;
        margin: 0 10px;
      }
    }
  }
`;
