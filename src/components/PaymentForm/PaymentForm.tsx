import styled from "styled-components";
import CardNumber from "./CardNumber";
import CardExpiryCvc from "./CardExpiryCvc";
import TitleAndEmail from "./TitleAndEmail";
import FormFooter from "./FormFooter";
import usePayment from "../../hooks/usePayment";
import ConfirmSubscription from "../reusableUI/ConfirmSubscription";

export default function PaymentForm() {
  const {
    user,
    isButtonDisabled,
    isLoading,
    error,
    isSubscripted,
    handleChange,
    errorMessage,
    setErrorMessage,
    formRef,
    handleSubmit,
  } = usePayment();

  if (isSubscripted)
    return <ConfirmSubscription label="Abonnement enregistré !" />;

  return (
    <PaymentFormStyled onSubmit={handleSubmit} ref={formRef}>
      <TitleAndEmail user={user} />
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
`;
