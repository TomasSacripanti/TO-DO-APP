import { useState } from "react";
import "./RegisterLogin.css";
import { Form, Button } from 'react-bootstrap';

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
    <div className="container">
      <Form className="form">
        <Form.Group>
          <Form.Label htmlFor="user"></Form.Label>
          <Form.Control
            type="text"
            id="user"
            name="user"
            value={user}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password"></Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInput}
          />
        </Form.Group>
        <Button variant="primary">Primary</Button>
      </Form>
    </div>
  );
};

export default Login;
