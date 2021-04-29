import { Col, Container, Row } from "react-bootstrap";
import { LocalForm } from "react-redux-form";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import Button from "../components/CustomButtons";
import Input, { FormRow } from "../components/Input";
import Navbar from "../components/Navbar";
import { auth, signInWithGoogle } from "../service/firebase.utils";

export const StyledDiv = styled.div`
  background-color: var(--bg-color-primary);
  min-height: 700px;
  height: 100vh;

  .container {
    height: 89%;
  }
  .content-box {
    background-color: var(--bg-color-secondary);
    border-radius: 6px;
    box-shadow: 0 0 3px gray;
    overflow: hidden;
    padding: 30px 45px 0;
    width: 100%;
  }

  .content-box > h2 {
    color: var(--font-color);
    font-size: 2rem;
    font-weight: 700;
    line-height: 28px;
    margin: 25px 0;
    padding-bottom: 22px;
    text-align: center;
  }
  .row {
    height: 100%;
  }

  .row .col-sm-8 {
    display: flex;
    height: inherit;
    align-items: center;
  }

  .first-row {
    margin-bottom: 40px;
  }

  .second-row {
    cursor: pointer;
    margin: -2px -46px;
  }
  .second-row .col-sm-12 {
    border-right: 0;
    border: 1px solid rgb(239, 239, 245);
    color: var(--font-color);
    font-size: 1.2rem;
    font-weight: bold;
    padding: 20px;
    text-align: center;
  }

  .second-row .col-sm-12:hover {
    background-color: rgb(32, 189, 175);
    color: var(--bg-color-secondary);
    text-decoration: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .col-sm-10 a {
    color: var(--font-color);
    display: block;
    margin-top: 20px;
    text-align: center;
    text-decoration: underline;
  }

  .col-sm-10 .btn {
    margin: 20px 0;
  }

  .col-sm-12 svg {
    margin-right: 10px;
  }
`;

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
