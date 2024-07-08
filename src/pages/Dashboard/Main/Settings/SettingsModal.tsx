import styled from "styled-components";
import Modal from "../../../../components/reusableUI/Modal/Modal";
import { useState } from "react";
import ConfirmSubscription from "../../../../components/reusableUI/ConfirmSubscription";
import SettingsModalContent from "./SettingsModalContent";

type SettingsModalProps = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SettingsModal({
  openModal,
  setOpenModal,
}: SettingsModalProps) {
  const [isUnsubscribe, setIsUnsubscribe] = useState(false);
  const [error, setError] = useState(false);

  return (
    <SettingsModalStyled>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        className="modal"
      >
        {!isUnsubscribe ? (
          <SettingsModalContent
            setOpenModal={setOpenModal}
            setIsUnsubscribe={setIsUnsubscribe}
            setError={setError}
          />
        ) : (
          <ConfirmSubscription label=" Abonnement annulé !" />
        )}
        {error && <p className="error"> Le désabonnement à échoué ! </p>}
      </Modal>
    </SettingsModalStyled>
  );
}

const SettingsModalStyled = styled.div`
  .modal {
    background: rgba(0, 0, 0, 0.95);
    .error {
      font-size: 13px;
      text-align: center;
      color: #fa755a;
      padding-top: 30px;
    }
  }
`;
