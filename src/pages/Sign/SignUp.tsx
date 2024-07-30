import SignFormRightSide from "../../components/SignFormRightSide/SignFormRightSide";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function SignUp() {
  return (
    <>
      <SignUpForm />
      <SignFormRightSide
        title="Confiance !"
        text="La confiance, c'est comme un chemin : plus tu avances, plus tu vas loin."
      />
    </>
  );
}
