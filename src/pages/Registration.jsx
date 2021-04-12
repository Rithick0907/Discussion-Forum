import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../components/CustomButtons";
import Input from "../components/Input";
import { Styles } from "./Login";
import Navbar from "../components/Navbar";

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
  </Styles>
);

export default Registration;
