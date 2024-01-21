import React, { useState } from "react";
import Header from "../components/Header";
import ImageBackground from "../components/ImageBackground";
import Container from "../components/Container";
import { Button, Form, Row, Col, Alert, Spinner } from "react-bootstrap";
import "./Signup.css";
import api from "../api";
import { useLocalStorage } from "usehooks-ts";

const Login = (props) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useLocalStorage("token")


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError("");
      setLoading(true);
      const user = await api.auth.login({
        password: formValues.password,
        email: formValues.email,
      });

      // console.log(user);

      if (user.data.success) {
        const token = user.data.data.token;
        setToken(token)
        props.history.push("/feed");
      }
    } catch (error) {
      const msg = error?.response?.data?.message || "Something went wrong";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground>
      <Container>
        <Header />
        <Button
          variant="secondary"
          onClick={() => props.history.push("/signup")}
        >
          Create Account
        </Button>
        <h2 className="main-title"> Login </h2>
        <Row>
          <Col xs={12} sm={4}>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={formValues.email}
                  required
                  onChange={(e) => {
                    setFormValues({ ...formValues, email: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  alue={formValues.password}
                  required
                  onChange={(e) => {
                    setFormValues({ ...formValues, password: e.target.value });
                  }}
                />
              </Form.Group>
              <div className="form-bottom-container">
                <p> Forgot Password ? </p>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>
              <div className="error-loading-container">
                {loading && <Spinner animation="border" variant="primary" />}
                {error && <Alert variant="danger"> {error} </Alert>}
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </ImageBackground>
  );
};

export default Login;
