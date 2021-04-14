import { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/CustomButtons";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { signInWithGoogle } from "../service/firebase.utils";

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
    margin: 30px 0;
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

class Login extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render = () => {
    const { email, password } = this.state.account;
    return (
      <StyledDiv>
        <Navbar />
        <Container>
          <Row>
            <Col sm={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
              <div className="content-box">
                <h2>Log In to Forum</h2>
                <Row>
                  <Col sm={{ offset: 1, span: 10 }}>
                    <Form>
                      <Input
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                        type="email"
                      >
                        Email
                      </Input>
                      <Input
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                        type="password"
                      >
                        Password
                      </Input>
                      <div className="text-center">
                        <Button>Log In</Button>
                      </div>
                      <Link to="#">Forget Password?</Link>
                    </Form>
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
}
export default Login;
