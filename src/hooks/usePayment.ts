import {
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../supabase/config";
import {
  createSetupIntent,
  createStripeCustomer,
  createSubscription,
  saveSubscription,
} from "../stripe/api";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Event } from "../Types/layoutTypes";
import { useNavigate } from "react-router-dom";

export default function usePayment() {
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
        navigate(-1);
      } catch (error) {
        console.error("Error subscription:", error);
        if (error === "Email déja utilisé") return true;
        setError(true);
        setErrorMessage("Email déja utilisé !");
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
  return {
    handlers: {
      handleChange,
      handleSubmit,
    },
    states: {
      user,
      isButtonDisabled,
      formRef,
      error,
      errorMessage,
      isLoading,
      isSubscripted,
    },
    setters: {
      setErrorMessage,
    },
  };
}
