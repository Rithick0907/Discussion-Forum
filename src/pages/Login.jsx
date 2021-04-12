import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/CustomButtons";
import Input from "../components/Input";
import Navbar from "../components/Navbar";

export const StyledDiv = styled.div`
  background-color: rgb(245, 245, 248);
  min-height: 700px;
  height: 100vh;

  .container {
    height: 93%;
  }
  .content-box {
    background-color: rgb(255, 255, 255);
    border-radius: 6px;
    padding: 30px 45px 0;
    width: 100%;
  }

  .content-box > h2 {
    color: rgb(107, 109, 124);
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
    margin: 0 -45px;
  }
  .second-row .col-sm-12 {
    border-right: 0;
    border: 1px solid rgb(239, 239, 245);
    color: gray;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 20px;
    text-align: center;
  }

  .second-row .col-sm-12:hover {
    background-color: rgb(32, 189, 175);
    color: rgb(255, 255, 255);
    text-decoration: none;
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
                  <Input type="email">Email</Input>
                  <Input type="password">Password</Input>
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
  </StyledDiv>
);

export default Login;
