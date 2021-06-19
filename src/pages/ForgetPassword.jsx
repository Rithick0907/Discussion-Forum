import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { FormContainer, FormField, SubmitButton } from "../components/form";
import Navbar from "../components/Navbar";
import { auth, signInWithGoogle } from "../service/firebase.utils";
import { StyledDiv } from "../styles/Login.styles";

const ForgetPassword = () => {
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
  });

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
    <StyledDiv>
      <Navbar />
      <Container>
        <Row>
          <Col sm={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <Row className="p-5">
              <Col className="text-center" sm={{ span: 12 }}>
                Reset Password
              </Col>
            </Row>
            <FormContainer
              initialValues={{
                email: "",
              }}
              onSubmit={handleResetPassword}
              validationSchema={validationSchema}
            >
              <FormField name="email" label="Email" type="email" />
              <div className="text-center">
                <SubmitButton
                  type="submit"
                  className="my-4"
                  title="Send Me Instructions"
                />
              </div>
            </FormContainer>
            <Row className="p-0 no-gutters">
              <Col md={{ span: 6 }}>
                <Link to="/signup">
                  <AiOutlineMail className="mr-2 mb-1" size="2rem" />
                  Create and account
                </Link>
              </Col>
              <Col md={{ span: 6 }}>
                <Link onClick={() => signInWithGoogle(history)}>
                  <FcGoogle className="mr-2 mb-1" size="2rem" />
                  Sign with Google
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default ForgetPassword;
