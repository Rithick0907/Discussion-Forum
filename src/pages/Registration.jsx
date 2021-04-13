import { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/CustomButtons";
import Input from "../components/Input";
import { StyledDiv } from "./Login";
import Navbar from "../components/Navbar";
import { signInWithGoogle } from "../service/firebase.utils";

class Registration extends Component {
  state = {
    account: {
      name: "",
      email: "",
      createPassword: "",
      confirmPassword: "",
    },
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render = () => {
    const { name, email, createPassword, confirmPassword } = this.state.account;
    return (
      <StyledDiv>
        <Navbar />
        <Container>
          <Row>
            <Col sm={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
              <div className="content-box">
                <h2>Sign Up to Forum</h2>
                <Row>
                  <Col sm={{ offset: 1, span: 10 }}>
                    <Form>
                      <Input
                        name="name"
                        value={name}
                        handleChange={this.handleChange}
                        type="text"
                      >
                        Name
                      </Input>
                      <Input
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                        type="email"
                      >
                        Email
                      </Input>
                      <Form.Row>
                        <Col>
                          <Input
                            name="createPassword"
                            value={createPassword}
                            handleChange={this.handleChange}
                            type="password"
                          >
                            Create Password
                          </Input>
                        </Col>
                        <Col>
                          <Input
                            name="confirmPassword"
                            value={confirmPassword}
                            handleChange={this.handleChange}
                            type="password"
                          >
                            Confirm Password
                          </Input>
                        </Col>
                      </Form.Row>
                      <div className="text-center">
                        <Button>Sign Up</Button>
                      </div>
                    </Form>
                  </Col>
                </Row>
                <Row className="second-row">
                  <Col sm={12} md={6}>
                    <AiOutlineMail size="2rem" />
                    <Link to="/login">Log In With Email</Link>
                  </Col>
                  <Col sm={12} md={6}>
                    <FcGoogle size="2rem" />
                    <Link onClick={signInWithGoogle} to="#Y">
                      Log In with Google
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

export default Registration;
