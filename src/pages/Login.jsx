import { Col, Container, Row } from "react-bootstrap";
import { LocalForm } from "react-redux-form";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/CustomButtons";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { auth, signInWithGoogle } from "../service/firebase.utils";
import { FormRow } from "../styles/Input.styles";
import { StyledDiv } from "../styles/Login.styles";

const Login = () => {
  const history = useHistory();

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
            <div className="content-box">
              <h2>Log In to Forum</h2>
              <Row className="first-row">
                <Col sm={{ offset: 1, span: 10 }}>
                  <LocalForm
                    initialState={{ email: "", password: "" }}
                    onSubmit={handleSubmit}
                  >
                    <FormRow className="form-group">
                      <Input
                        htmlFor="Email"
                        name="email"
                        type="text"
                        validators={["required", "validEmail"]}
                      />
                    </FormRow>
                    <FormRow className="form-group">
                      <Input
                        htmlFor="Password"
                        name="password"
                        type="password"
                        validators={["required", "validPassword"]}
                      />
                    </FormRow>
                    <div className="text-center">
                      <Button>Log In</Button>
                    </div>
                    <Link to="/forgetPassword">Forget Password?</Link>
                  </LocalForm>
                </Col>
              </Row>
              <Row className="second-row">
                <Col sm={12} md={6}>
                  <Link to="/signup">
                    <AiOutlineMail size="2rem" />
                    <span>Create an Account</span>
                  </Link>
                </Col>
                <Col sm={12} md={6}>
                  <Link onClick={() => signInWithGoogle(history)}>
                    <FcGoogle size="2rem" />
                    <span> Log In with Google</span>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default Login;
