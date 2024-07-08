import { useSelector } from "react-redux";
import styled from "styled-components";
import PrimaryButton from "../../../../components/reusableUI/PrimaryButton";
import SecondaryButton from "../../../../components/reusableUI/SecondaryButton";
import { RootState } from "../../../../app/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkSubscriptionStatus } from "../../../../stripe/api";

type Props = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SubscriptionButtons({ setOpenModal }: Props) {
  const { user } = useSelector((state: RootState) => state.auth);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const handleCheckSubscriptionStatus = async () => {
    const hasAccess = await checkSubscriptionStatus(user.id);
    setStatus(hasAccess);
  };

  useEffect(() => {
    handleCheckSubscriptionStatus();
  }, []);

  return (
    <SubscriptionButtonsStyled>
      {status ? (
        <SecondaryButton
          label="Résilier mon abonnement"
          className="unsubscribe-button"
          onClick={() => setOpenModal(true)}
        />
      ) : (
        <PrimaryButton
          label="Abonnez-vous"
          className="subscribe-button"
          onClick={() => navigate("/payment")}
        />
      )}
    </SubscriptionButtonsStyled>
  );
}

const SubscriptionButtonsStyled = styled.div`
  .unsubscribe-button,
  .subscribe-button {
    font-size: 14px;
    margin-top: 100px;
    cursor: pointer;
  }
  .unsubscribe-button {
    background: transparent;
    color: #000;
    border: none;
  }
  .subscribe-button {
    padding-top: 6px;
    padding-bottom: 6px;
  }
`;
