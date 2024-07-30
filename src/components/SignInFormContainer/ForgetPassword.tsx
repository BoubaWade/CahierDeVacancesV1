import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { setIsPasswordRecovery } from "../../features/Sign/authSlice";
import styled from "styled-components";

export default function ForgetPassword() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ForgetPasswordStyled onClick={() => dispatch(setIsPasswordRecovery(true))}>
      Mot de passe oublié ?
    </ForgetPasswordStyled>
  );
}
const ForgetPasswordStyled = styled.span`
  display: block;
  font-size: 12px;
  margin: 25px auto 0;
  cursor: pointer;
`;
