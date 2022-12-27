import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/homepage/Home";
import Signup from "./pages/authentication/Signup";
import Mynotes from "./pages/mynotes/Mynotes";
import Profile from "./pages/profile/Profile";
import Login from "./pages/authentication/Login";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/mynotes" element={<Mynotes />} />
          <Route path="/myprofile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
