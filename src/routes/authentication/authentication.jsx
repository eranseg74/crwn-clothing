import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { SignFormsContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <SignFormsContainer>
      <SignInForm />
      <SignUpForm />
    </SignFormsContainer>
  );
};

export default Authentication;
