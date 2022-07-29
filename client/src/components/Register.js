import {useState} from "react";
import "./RegisterLogin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";

const Register = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleInput = (e) => {
    switch (e.target.id) {
      case "user":
        setUser(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "password-repeat":
        setPasswordRepeat(e.target.value);
        break;
      default:
        break;
    }
  };

  const validateForm = (user, password) => {
    if (!user.length >= 4 || !password.length >= 8) {
      throwErrorMessage("Enter valid data!");
      return;
    }
    saveUser(user, password);
  }

  const throwErrorMessage = (msg) => {
    console.error(msg);
  }

  const saveUser = (user, password) => {
    console.log(Axios);
    console.log(`Saving user ${user} at backend`);
  }

  return (
    <div className="wrapper">
      <Form className="form">
        <h1>Register</h1>
        <hr className="w-50" />
        <Form.Group>
          <Form.Label htmlFor="user">User</Form.Label>
          <Form.Control
            type="text"
            id="user"
            name="user"
            value={user}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Repeat Password</Form.Label>
          <Form.Control
            type="password"
            id="password-repeat"
            name="password"
            value={passwordRepeat}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group>
          <Button to="/" variant="success" className="btn-success my-3 mx-2" onClick={validateForm(user, password)}>
            Register
          </Button>
          <Link to="/login" variant="primary" className="btn btn-primary my-3 mx-2">
            Log in
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;
