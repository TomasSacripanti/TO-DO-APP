import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Register from "./components/Register"
import "./App.css";

const loggedIn = false;

const App = () => {
  return (
    <div className="main">
      {loggedIn && <Sidebar />}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={loggedIn ? <Navigate replace to="/home" /> : <Navigate replace to="/login" />}>
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
