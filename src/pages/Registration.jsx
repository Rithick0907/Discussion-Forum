import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Input from "../component/Input";
import Button from "../component/SubmitButton";
import { Styles } from "./Login";

const Registration = () => (
  <Styles>
    <Navbar />
    <Container>
      <Row>
        <Col sm={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <div className="content-box">
            <h2>Sign Up to Forum</h2>
            <Row>
              <Col sm={{ offset: 1, span: 10 }}>
                <Form>
                  <Input name="Name" type="text" />
                  <Input name="Email" type="email" />
                  <Form.Row>
                    <Col>
                      <Input name="Password" type="password" />
                    </Col>
                    <Col>
                      <Input name="Confirm Password" type="password" />
                    </Col>
                  </Form.Row>
                  <Button name="Sign Up" />
                </Form>
              </Col>
            </Row>
            <Row className="second-row">
              <Col sm={12} md={6}>
                <Link className="link" to="#">
                  Log In Email Address
                </Link>
              </Col>
              <Col sm={12} md={6}>
                <Link className="link" to="#">
                  Log In with Google
                </Link>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </Styles>
);

export default Registration;
