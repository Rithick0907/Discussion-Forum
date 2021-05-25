import { Col, Container, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Navbar from "../components/Navbar";
import { auth, signInWithGoogle } from "../service/firebase.utils";
import { FormContainer, FormField, SubmitButton } from "../components/form";
import { StyledDiv } from "../styles/Login.styles";

const Signup = () => {
  const history = useHistory();
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(4).max(20),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
  });

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
    <StyledDiv>
      <Navbar />
      <Container>
        <Row>
          <Col sm={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <Row className="p-5">
              <Col className="text-center" sm={{ span: 12 }}>
                Sign Up To Forum
              </Col>
            </Row>
            <FormContainer
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <FormField name="name" label="Name" type="text" />
              <FormField name="email" label="Email" type="email" />
              <FormField type="password" name="password" label="Password" />
              <div className="text-center">
                <SubmitButton className="my-4" title="Register" />
              </div>
            </FormContainer>
            <Row className="p-0 no-gutters">
              <Col md={{ span: 6 }}>
                <Link to="/login">
                  <AiOutlineMail className="mr-2 mb-1" size="2rem" />
                  Log In to account
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

export default Signup;
