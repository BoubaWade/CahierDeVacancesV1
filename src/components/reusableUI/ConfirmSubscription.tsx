import styled from "styled-components";

type Props = {
  label: string;
};
export default function ConfirmSubscription({ label }: Props) {
  return (
    <ConfirmSubscriptionStyled>
      {label}
      <br /> <i className="fa-solid fa-check"></i>
    </ConfirmSubscriptionStyled>
  );
}
const ConfirmSubscriptionStyled = styled.div`
  background-color: #f9f9f9;
  background: linear-gradient(to right, #fde047, #c2a205);
  max-width: 400px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-size: 16px;
  text-align: center;
  border-radius: 8px;
  margin: 0 auto;
  i {
    color: green;
    font-size: 20px;
    margin-top: 10px;
  }
`;
