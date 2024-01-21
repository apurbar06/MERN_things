import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../images/logo.png";
import "./Header.css";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

const Login = (props) => {
  const { displayLinks } = props;
  const history = useHistory();
  const [token, setToken] = useLocalStorage("token")

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setToken("")
      props.history.push("/");
    } catch (error) {}
  };
  console.log(window.location.href);
  return (
    <Navbar
      className="nav-color"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Navbar.Brand onClick={() => history.push("/")}>
        <img src={Logo} className="nav-logo" alt="TweetX logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      {displayLinks && (
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link
              className={
                window.location.href.includes("/feed") ? "active-nav" : ""
              }
              onClick={() => history.push("/feed")}
            >
              <b>Feed</b>
            </Nav.Link>
            <Nav.Link
              className={
                window.location.href.includes("/users") ? "active-nav" : ""
              }
              onClick={() => history.push("/users")}
            >
              <b>Users</b>
            </Nav.Link>
            <Nav.Link
              className={
                window.location.href.includes("/profile") ? "active-nav" : ""
              }
              onClick={() => history.push("/profile")}
            >
              <b>Profile</b>
            </Nav.Link>
            <Nav.Link onClick={handleSubmit}>Sign out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
};

export default Login;
