import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../components/CustomButtons";
import Input from "../components/Input";
import { StyledDiv } from "./Login";
import Navbar from "../components/Navbar";

const Registration = () => (
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
                  <Input type="text">Name</Input>
                  <Input type="email">Email</Input>
                  <Form.Row>
                    <Col>
                      <Input type="password">Create Password</Input>
                    </Col>
                    <Col>
                      <Input type="password">Confirm Password</Input>
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
                <Link to="/login">Log In Email Address</Link>
              </Col>
              <Col sm={12} md={6}>
                <Link to="#">Log In with Google</Link>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </StyledDiv>
);

export default Registration;
