import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Navbar from "../components/Navbar";
import { auth, signInWithGoogle } from "../service/firebase.utils";
import { StyledDiv } from "../styles/Login.styles";
import { FormContainer, FormField, SubmitButton } from "../components/form";

const Login = () => {
  const history = useHistory();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
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
    <StyledDiv>
      <Navbar />
      <Container>
        <Row>
          <Col sm={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <Row className="p-5">
              <Col className="text-center" sm={{ span: 12 }}>
                Log In To Forum
              </Col>
            </Row>
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
              <Link to="/forgetPassword">Forget Password?</Link>
              <div className="text-center">
                <SubmitButton className="my-4" title="Login" />
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

export default Login;
