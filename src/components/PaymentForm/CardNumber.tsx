import { CardNumberElement } from "@stripe/react-stripe-js";
import { cardElementOptions } from "./config";
import { StripeCardNumberElementChangeEvent } from "@stripe/stripe-js";
import styled from "styled-components";

type Event = StripeCardNumberElementChangeEvent;
type Props = {
  onChange: (e: Event) => void;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
};

export default function CardNumber({ onChange, setErrorMessage }: Props) {
  return (
    <CardNumberStyled className="card-element-container">
      <label>
        Numéro de carte
        <i className="fab fa-cc-visa"></i>
        <i className="fab fa-cc-mastercard"></i>
        <CardNumberElement
          options={cardElementOptions}
          className="stripeElement"
          onChange={onChange}
          onFocus={() => setErrorMessage("")}
        />
      </label>
    </CardNumberStyled>
  );
}
const CardNumberStyled = styled.div`
  margin-bottom: 20px;
  label {
    font-size: 13px;
    font-weight: 500;
    i {
      font-size: 18px;
      margin-left: 5px;
      color: #c2a205;
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
  }
`;
