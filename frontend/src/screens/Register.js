import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SET_TOKEN } from "../store";

const Register = () => {
  const dispatch = useDispatch();

  // States
  const [email, setEmail] = useState("bensony63@gmail.com");
  const [password, setPassword] = useState("boy");
  const [confirmPass, setConfirmPass] = useState("boy");
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  // FUNCTION CALLED ON FORM SUBMIT
  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // DATA TO SEND ALONG WITH POST REQUEST
      const data = { email, password, confirmPass };

      // MAKING API REQUEST
      const apiReq = await axios.post(
        "/api/auth/user/register",
        data
      );
      console.log(apiReq);
      const token = apiReq.data.TOKEN;

      // TODO: STORE THE TOKEN (dispatch)
      dispatch({
        type: SET_TOKEN,
        payload: token,
      });
    } catch (err) {
      // CATCHING ERRORS
      setIsError(true);
      setError(err.response.data.message);
      console.log(err.response.data);
    }
  };

  // RETURNING JSX
  return (
    <div className="jumbotron">
      {isError && (
        <Alert
          variant="danger"
          onClose={() => setIsError(false)}
          dismissible="true"
        >
          {error}
        </Alert>
      )}
      <Form onSubmit={HandleFormSubmit}>
        <h4>CREATE ACCOUNT</h4>
        <Form.Group>
          <Form.Label>Email Address :</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password :</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Pssword :</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPass(e.target.value)}
            value={confirmPass}
          />
        </Form.Group>
        <Button type="submit" variant="outline-info">
          Create Account
        </Button>
        <br /> <br />
        <small>Already Have An Account ? </small>
        <NavLink to="/login">Login</NavLink>
      </Form>
    </div>
  );
};

export default Register;
