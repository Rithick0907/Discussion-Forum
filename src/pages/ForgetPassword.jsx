import * as Yup from "yup";

import { FormContainer, FormField, SubmitButton } from "../components/form";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithGoogle } from "../service/firebase.utils";

import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

const initialValues = {
  email: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

const ForgetPassword = () => {
  const history = useHistory();

  const handleResetPassword = async ({ email }) => {
    try {
      await auth.sendPasswordResetEmail(email);
      toast("Check your mail for Reset Password Link");
      history.replace("/login");
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="form-container">
          <h1 className="text-center mt-5">Reset Password</h1>
          <FormContainer
            initialValues={initialValues}
            onSubmit={handleResetPassword}
            validationSchema={validationSchema}
          >
            <FormField name="email" label="Email" />
            <div className="text-center">
              <SubmitButton
                className="my-4 custom-btn--primary"
                title="Send Me Instructions"
              />
            </div>
          </FormContainer>
          <div className="last-row">
            <Link className="link-primary last-row__link" to="/signup">
              <AiOutlineMail className="mr-2 mb-1" size="2rem" />
              Create and account
            </Link>
            <Link
              className="link-primary last-row__link"
              onClick={() => signInWithGoogle(history)}
            >
              <FcGoogle className="mr-2 mb-1" size="2rem" />
              Sign with Google
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
