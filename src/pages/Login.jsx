import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/CustomButtons";
import Input from "../components/Input";
import Navbar from "../components/Navbar";

export const Styles = styled.div`
  background-color: rgb(245, 245, 248);
  height: 100vh;

  .container {
    height: 100%;
  }
  .content-box {
    background-color: rgb(255, 255, 255);
    border-radius: 6px;
    padding: 30px 45px 0 45px;
    text-align: left;
    width: 100%;
  }

  .content-box > h2 {
    color: rgb(107, 109, 124);
    font-size: 2rem;
    font-weight: 700;
    margin: 25px 0;
    line-height: 28px;
    padding-bottom: 22px;
    text-align: center;
  }
  .row .col-sm-8 {
    display: flex;
    height: inherit;
    align-items: center;
  }
  .row {
    height: 100%;
  }
  .second-row {
    cursor: pointer;
    margin: 0 -45px;
    width: calc(100% + 90px);
  }
  .second-row .col-sm-12 {
    border-right: 0;
    border: 1px solid rgb(239, 239, 245);
    color: gray;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 20px;
    text-align: center;
  }

  .second-row .col-sm-12:hover {
    background-color: rgb(32, 189, 175);
    color: rgb(255, 255, 255);
    text-decoration: none;
  }

  .btn > button {
    margin: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
    width: 100%;
  }
  .col-sm-10 a {
    color: gray;
    display: block;
    margin: 30px 0;
    text-align: center;
    text-decoration: underline;
  }

  .col-sm-10 .btn {
    margin: 20px 0;
  }
`;

const Login = () => (
  <Styles>
    <Navbar />
    <Container>
      <Row>
        <Col sm={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <div className="content-box">
            <h2>Log In to Forum</h2>
            <Row>
              <Col sm={{ offset: 1, span: 10 }}>
                <Form>
                  <Input name="Email" type="email" />
                  <Input name="Password" type="password" />
                  <div className="text-center">
                    <Button>Log In</Button>
                  </div>
                  <Link to="#">Forget Password?</Link>
                </Form>
              </Col>
            </Row>
            <Row className="second-row">
              <Col sm={12} md={6}>
                <Link to="/signup">Create an Account</Link>
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

export default Login;
