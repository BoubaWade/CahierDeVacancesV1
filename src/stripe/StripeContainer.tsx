import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./config";
import PaymentForm from "./PaymentForm";
import styled from "styled-components";

export default function StripeContainer() {
  return (
    <StripeContainerStyled>
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
`;
