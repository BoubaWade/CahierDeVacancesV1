import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./config";
import PaymentForm from "../components/PaymentForm/PaymentForm";
import styled from "styled-components";
import PrimaryButton from "../components/reusableUI/PrimaryButton";
import { useNavigate } from "react-router-dom";

export default function StripeContainer() {
  const navigate = useNavigate();

  return (
    <StripeContainerStyled>
      <PrimaryButton
        label="Retour"
        className="return-button"
        onClick={() => navigate(-1)}
      />
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </StripeContainerStyled>
  );
}
const StripeContainerStyled = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .return-button {
    position: absolute;
    top: 0;
    left: 20px;
    padding: 5px 20px;
  }
`;
