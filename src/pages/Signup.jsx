import * as Yup from "yup";

import { FormContainer, FormField, SubmitButton } from "../components/form";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithGoogle } from "../service/firebase.utils";

import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../components/Navbar";
import { StyledDiv } from "../styles/Login.styles";
import { passwordValidation } from "../validate";
import { toast } from "react-toastify";

const initialValues = {
  name: "",
  email: "",
  createPassword: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).max(20).label("Name"),
  email: Yup.string().required().email().label("Email"),
  createPassword: Yup.string()
    .required()
    .matches(passwordValidation.regExp, passwordValidation.errorMessage)
    .label("Password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("createPassword"), true], "Password must match")
    .label("Confirm Password"),
});

const Signup = () => {
  const history = useHistory();

  const handleSubmit = async (values) => {
    const { email, createPassword, confirmPassword } = values;

    if (createPassword !== confirmPassword) {
      toast.error("Password doesn't match");
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(email, createPassword);
      history.push("/main");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <StyledDiv>
        <div className="form-container">
          <h1>Sign Up To Forum</h1>
          <FormContainer
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <FormField label="Name" name="name" />
            <FormField label="Email" name="email" />
            <FormField name="createPassword" label="Password" type="password" />
            <FormField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
            />
            <div className="text-center">
              <SubmitButton type="submit" className="my-4" title="Register" />
            </div>
          </FormContainer>
          <div className="last-row">
            <Link to="/login">
              <AiOutlineMail className="mr-2 mb-1" size="2rem" />
              Log In to account
            </Link>
            <Link onClick={() => signInWithGoogle(history)}>
              <FcGoogle className="mr-2 mb-1" size="2rem" />
              Sign with Google
            </Link>
          </div>
        </div>
      </StyledDiv>
    </>
  );
};

export default Signup;
