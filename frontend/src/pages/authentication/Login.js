import axios from "axios";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorMsg from "../../components/ErrorMsg";
import Loader from ".././../components/Loader";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    // const data = { email, password };
    // console.log(data);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };


  
  return (
    <div className="d-flex justify-content-center">
      <div className="loginContainer">
        <h3 className="py-3 login">Login</h3>
        {error && <ErrorMsg message="Entedered wrong details" />}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Control
            type="submit"
            className="bg-primary mt-3"
            value="Login"
          />
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register"> Register Here </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
