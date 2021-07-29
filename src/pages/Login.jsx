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

const Login = () => {
  const history = useHistory();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string()
      .required()
      .matches(passwordValidation.regExp, passwordValidation.errorMessage)
      .label("Password"),
  });

  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      await auth.signInWithEmailAndPassword(email, password);
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
          <h1>Log In To Forum</h1>
          <FormContainer
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <FormField name="email" label="Email" />
            <FormField type="password" name="password" label="Password" />
            <Link className="d-inline-block w-100 my-2" to="/forgetPassword">
              Forget Password?
            </Link>
            <div className="text-center">
              <SubmitButton type="submit" className="my-4" title="Login" />
            </div>
          </FormContainer>
          <div className="last-row">
            <Link to="/signup">
              <AiOutlineMail className="mr-2 mb-1 " size="2rem" />
              Create account
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

export default Login;
