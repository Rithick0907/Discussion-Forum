import { Col, Container, Row } from "react-bootstrap";
import { LocalForm } from "react-redux-form";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { StyledDiv } from "./Login";
import Button from "../components/CustomButtons";
import Input, { FormRow } from "../components/Input";
import Navbar from "../components/Navbar";
import { auth, signInWithGoogle } from "../service/firebase.utils";

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
    <StyledDiv>
      <Navbar />
      <Container>
        <Row>
          <Col sm={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <div className="content-box">
              <h2>Forget Password</h2>
              <Row className="first-row">
                <Col sm={{ offset: 1, span: 10 }}>
                  <LocalForm
                    initialState={{ email: "", password: "" }}
                    onSubmit={handleResetPassword}
                  >
                    <FormRow className="form-group">
                      <Input
                        htmlFor="Email"
                        name="email"
                        type="text"
                        validators={["required", "validEmail"]}
                      />
                    </FormRow>
                    <div className="text-center">
                      <Button>Send Me Instructions</Button>
                    </div>
                  </LocalForm>
                </Col>
              </Row>
              <Row className="second-row">
                <Col sm={12} md={6}>
                  <Link to="/signup">
                    <AiOutlineMail size="2rem" />
                    <Link to="/login">Log In With Email</Link>
                  </Link>
                </Col>
                <Col sm={12} md={6}>
                  <Link onClick={signInWithGoogle} to="#">
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

export default ForgetPassword;
