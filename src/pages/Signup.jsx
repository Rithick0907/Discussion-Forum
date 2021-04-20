import { Col, Container, Row } from "react-bootstrap";
import { LocalForm } from "react-redux-form";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/CustomButtons";
import Input, { FormRow } from "../components/Input";
import {
  required,
  maxLength,
  minLength,
  validEmail,
  validPassword,
} from "../validateRules";
import { StyledDiv } from "./Login";
import Navbar from "../components/Navbar";
import { auth, signInWithGoogle } from "../service/firebase.utils";

const Signup = () => {
  const handleSubmit = async (values) => {
    const { email, createPassword, confirmPassword } = values;

    if (createPassword !== confirmPassword) {
      alert("Password doesn't match");
      return;
    }

    try {
      const result = await auth.createUserWithEmailAndPassword(
        email,
        createPassword
      );
    } catch (err) {
      alert(err.message);
    }
  };

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
                  <LocalForm
                    initialState={{
                      name: "",
                      email: "",
                      createPassword: "",
                      confirmPassword: "",
                    }}
                    onSubmit={(values) => handleSubmit(values)}
                  >
                    <FormRow className="form-group">
                      <Input
                        htmlFor="Name"
                        name="name"
                        type="text"
                        validators={["required", "minLength", "maxLength"]}
                      />
                    </FormRow>
                    <FormRow className="form-group">
                      <Input
                        htmlFor="Email"
                        name="email"
                        type="text"
                        validators={["required", "validEmail"]}
                      />
                    </FormRow>
                    <FormRow className="form-group">
                      <Col className="pl-0">
                        <Input
                          htmlFor="Create Password"
                          name="createPassword"
                          type="password"
                          validators={["required", "validPassword"]}
                        />
                      </Col>
                      <Col className="pr-0">
                        <Input
                          htmlFor="Confirm Password"
                          name="confirmPassword"
                          type="password"
                          validators={["required", "validPassword"]}
                        />
                      </Col>
                    </FormRow>
                    <div className="text-center">
                      <Button>Sign Up</Button>
                    </div>
                  </LocalForm>
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

export default Signup;
