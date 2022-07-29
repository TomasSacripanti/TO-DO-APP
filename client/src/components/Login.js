import { useState } from "react";
import "./RegisterLogin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {Form, Button} from "react-bootstrap";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    switch (e.target.id) {
      case "user":
        setUser(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="wrapper">
      <Form className="form">
        <h1>
          Sign In
        </h1>
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
          <Button variant="success" className="btn-success my-3 mx-2">
            Log in
          </Button>
          <Link to="/register" className="btn btn-primary my-3 mx-2">
            Register
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
