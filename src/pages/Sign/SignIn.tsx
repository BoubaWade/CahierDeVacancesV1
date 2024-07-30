import SignFormRightSide from "../../components/SignFormRightSide/SignFormRightSide";
import SignInFormContainer from "../../components/SignInFormContainer/SignInFormContainer";

export default function SignIn() {
  return (
    <>
      <SignInFormContainer />
      <SignFormRightSide
        title="Mathématiques !"
        text="Les maths, c'est comme le sport : plus tu en fais, plus tu deviens fort."
      />
    </>
  );
}
