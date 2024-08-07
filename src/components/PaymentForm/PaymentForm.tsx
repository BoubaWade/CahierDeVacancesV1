import styled from "styled-components";
import CardNumber from "./CardNumber";
import CardExpiryCvc from "./CardExpiryCvc";
import TitleAndEmail from "./TitleAndEmail";
import FormFooter from "./FormFooter";
import usePayment from "../../hooks/usePayment";
import ConfirmSubscription from "../reusableUI/ConfirmSubscription";
import SecondaryButton from "../reusableUI/SecondaryButton";
import { setIsMonthly } from "../../features/Sign/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function PaymentForm() {
  const { isMonthly } = useSelector((state: RootState) => state.auth);
  const priceId = isMonthly
    ? "price_1PX08gC6VxkdBWjhSnn48Lwe"
    : "price_1PkCdmC6VxkdBWjhC1EPNRUZ";
  const dispatch = useDispatch();
  const { handlers, states, setters } = usePayment(priceId);
  const {
    user,
    isButtonDisabled,
    formRef,
    error,
    errorMessage,
    isLoading,
    isSubscripted,
  } = states;
  const { handleChange, handleSubmit } = handlers;
  const { setErrorMessage } = setters;

  if (isSubscripted)
    return <ConfirmSubscription label="Abonnement enregistré !" />;

  return (
    <PaymentFormStyled onSubmit={handleSubmit} ref={formRef}>
      <SecondaryButton
        label="Mensuel"
        className={isMonthly ? "active button" : "button"}
        type="button"
        onClick={() => dispatch(setIsMonthly(true))}
      />
      <SecondaryButton
        label="Annuel"
        className={!isMonthly ? "active button" : "button"}
        type="button"
        onClick={() => dispatch(setIsMonthly(false))}
      />
      <TitleAndEmail user={user} isMonthly={isMonthly} />
      <CardNumber onChange={handleChange} setErrorMessage={setErrorMessage} />
      <CardExpiryCvc
        onChange={handleChange}
        setErrorMessage={setErrorMessage}
      />
      <FormFooter
        isButtonDisabled={isButtonDisabled}
        isLoading={isLoading}
        error={error}
        errorMessage={errorMessage}
      />
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
  .button {
    width: calc(50% - 10px);
    margin: 0 5px;
    padding: 7px 35px;
    border-radius: 5px;
  }
  .active {
    background: #f9f9f9;
    color: #000;
  }
`;
