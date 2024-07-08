import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { supabase } from "../supabase/config";
import {
  createSetupIntent,
  createStripeCustomer,
  createSubscription,
  saveSubscription,
} from "./api";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";
import {
  StripeCardNumberElementChangeEvent,
  StripeCardExpiryElementChangeEvent,
  StripeCardCvcElementChangeEvent,
} from "@stripe/stripe-js";
import ConfirmSubscription from "../components/reusableUI/ConfirmSubscription";
import MiniLoader from "../components/reusableUI/MiniLoader";

type Event =
  | StripeCardNumberElementChangeEvent
  | StripeCardExpiryElementChangeEvent
  | StripeCardCvcElementChangeEvent;

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const priceId = "price_1PX08gC6VxkdBWjhSnn48Lwe";
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [cardNumberComplete, setCardNumberComplete] = useState(false);
  const [expiryComplete, setExpiryComplete] = useState(false);
  const [cvcComplete, setCvcComplete] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubscripted, setIsSubscripted] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (e: Event) => {
    switch (e.elementType) {
      case "cardNumber":
        setCardNumberComplete(e.complete);
        break;
      case "cardExpiry":
        setExpiryComplete(e.complete);
        break;
      case "cardCvc":
        setCvcComplete(e.complete);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setIsButtonDisabled(!(cardNumberComplete && expiryComplete && cvcComplete));
  }, [cardNumberComplete, expiryComplete, cvcComplete]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardNumberElement = elements.getElement(CardNumberElement);
    if (!cardNumberElement) {
      console.error("cardNumberElement not found");
      return;
    }
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user && user.email) {
      setIsLoading(true);
      try {
        const customerId = await createStripeCustomer(user.email);
        const clientSecret = await createSetupIntent(customerId);
        const { error, setupIntent } = await stripe.confirmCardSetup(
          clientSecret,
          {
            payment_method: {
              card: cardNumberElement,
            },
          }
        );
        if (error) {
          // setIsLoading(false);
          console.error("Error confirming card payment:", error);
          return;
        }
        const paymentMethodId = setupIntent.payment_method;
        const subscriptionId = await createSubscription(
          customerId,
          priceId,
          paymentMethodId
        );
        saveSubscription(user.id, subscriptionId);
        setIsSubscripted(true);
        // navigate("/dashboard");
        navigate(-1);
      } catch (error) {
        console.error("Error subscription:", error);
        if (error === "Email déja utilisé") return true;
        setError(true);
        setErrorMessage("Le paiement n'a pas abouti");
        // if (formRef.current) formRef.current.reset();
      } finally {
        setIsLoading(false);
        setCardNumberComplete(false);
        setExpiryComplete(false);
        setCvcComplete(false);
      }
    } else {
      navigate("/sign");
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  if (isSubscripted)
    return <ConfirmSubscription label="Abonnement enregistré !" />;

  return (
    <PaymentFormStyled onSubmit={handleSubmit} ref={formRef}>
      <h1>
        <span>S'abonner à Premium</span> <br /> 15,90 € <span>par mois</span>
      </h1>
      <label htmlFor="email">Votre email</label>
      <input
        type="email"
        id="email"
        defaultValue={user && user.email && user.email}
        disabled
      />
      <div className="card-element-container">
        <label>
          Numéro de carte
          <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-mastercard"></i>
          <CardNumberElement
            options={cardElementOptions}
            className="stripeElement"
            onChange={handleChange}
            onFocus={() => setErrorMessage("")}
          />
        </label>
      </div>
      <div className="expiry-cvc-container">
        <label>
          Date d'expiration
          <CardExpiryElement
            options={cardElementOptions}
            className="stripeElement"
            onChange={handleChange}
            onFocus={() => setErrorMessage("")}
          />
        </label>
        <label>
          CVC
          <CardCvcElement
            options={cardElementOptions}
            className="stripeElement"
            onChange={handleChange}
            onFocus={() => setErrorMessage("")}
          />
        </label>
      </div>
      <label htmlFor="name">Nom du titulaire de la carte</label>
      <input type="text" id="name" />
      <button
        type="submit"
        disabled={isButtonDisabled}
        className="submit-button"
      >
        {!isLoading ? "Payer et s'abonner" : <MiniLoader />}
      </button>
      {error && <p className="error">{errorMessage} </p>}
    </PaymentFormStyled>
  );
}

const PaymentFormStyled = styled.form`
  max-width: 450px;
  margin: 0 auto;
  padding: 20px 30px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  background-color: #fde047;
  /* background: linear-gradient(to right, #fde047, #c2a205); */
  h1 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 50px;
    font-weight: 600;
    span {
      color: #595858;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .stripeElement,
  input {
    box-sizing: border-box;
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    margin-bottom: 20px;
  }
  input#name {
    margin-bottom: 30px;
    outline: none;
  }
  label {
    font-size: 13px;
    font-weight: 500;
    i {
      font-size: 18px;
      margin-left: 5px;
      color: #c2a205;
    }
  }
  .card-element-container,
  .expiry-cvc-container {
    margin-bottom: 20px;
  }
  .expiry-cvc-container {
    display: flex;
    justify-content: space-between;
    label {
      flex: 1;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .submit-button {
    width: 100%;
    background: #000;
    color: #fff;
    font-weight: 500;
    padding: 10px 25px;
    display: block;
    margin: 0 auto 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    &:disabled {
      background-color: #bbb;
      color: rgb(255, 255, 255);
      cursor: not-allowed;
    }
  }
  .error {
    font-size: 13px;
    text-align: center;
    color: #fa755a;
  }
`;
