import React, { useState } from "react";
import Header from "../components/Header";
import ImageBackground from "../components/ImageBackground";
import Container from "../components/Container";
import { Button, Form, Row, Col, Alert, Spinner } from "react-bootstrap";
import api from "../api";
import "./Signup.css";
import { useLocalStorage } from "usehooks-ts";

const Signup = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useLocalStorage("token")

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValues.password !== formValues.repeatPassword) {
      setError("Password mismatch");
      return;
    }
    try {
      setError("");
      setLoading(true);
      const user = await api.auth.signup({
        userName: formValues.name,
        password: formValues.password,
        email: formValues.email,
      });

      // console.log(user);

      if (user.data.success) {
        const token = user.data.data.token;
        setToken(token)
        props.history.push("/");
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
        <Button variant="primary" onClick={() => props.history.push("/login")}>
          Login
        </Button>
        <h2 className="main-title"> Create Account </h2>
        <Row>
          <Col xs={12} sm={4}>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  value={formValues.name}
                  placeholder="Name"
                  required
                  onChange={(e) => {
                    setFormValues({ ...formValues, name: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  value={formValues.email}
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => {
                    setFormValues({ ...formValues, email: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  value={formValues.password}
                  type="password"
                  placeholder="Password"
                  minLength={7}
                  required
                  onChange={(e) => {
                    setFormValues({ ...formValues, password: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  value={formValues.repeatPassword}
                  type="password"
                  minLength={7}
                  placeholder="Confirm Password"
                  required
                  onChange={(e) => {
                    setFormValues({
                      ...formValues,
                      repeatPassword: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <div className="form-bottom-container">
                <Button variant="primary" type="submit">
                  Signup
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

export default Signup;
