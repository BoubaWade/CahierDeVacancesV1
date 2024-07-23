import { CardCvcElement, CardExpiryElement } from "@stripe/react-stripe-js";
import React from "react";
import { cardElementOptions } from "./config";
import styled from "styled-components";
import { Event } from "../../Types/layoutTypes";

type Props = {
  onChange: (e: Event) => void;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
};

export default function CardExpiryCvc({ onChange, setErrorMessage }: Props) {
  return (
    <CardExpiryCvcStyled className="expiry-cvc-container">
      <label>
        Date d'expiration
        <CardExpiryElement
          options={cardElementOptions}
          className="stripeElement"
          onChange={onChange}
          onFocus={() => setErrorMessage("")}
        />
      </label>
      <label>
        CVC
        <CardCvcElement
          options={cardElementOptions}
          className="stripeElement"
          onChange={onChange}
          onFocus={() => setErrorMessage("")}
        />
      </label>
    </CardExpiryCvcStyled>
  );
}

const CardExpiryCvcStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  label {
    flex: 1;
    font-size: 13px;
    font-weight: 500;
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
  .stripeElement {
    box-sizing: border-box;
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    margin-bottom: 20px;
  }
`;
