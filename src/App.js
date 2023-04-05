import "App.css";
import "index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "views/Home";
import { Login } from "views/Login";
import { SignUp } from "views/SignUp";
import { Dashboard } from "views/Dashboard";
import { Account } from "views/Account";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/signup" element={<SignUp />} />{" "}
          <Route path="/dashboard" element={<Dashboard />} />{" "}
          <Route path="/Account" element={<Account />} />{" "}
          <Route path="*" element={<h1> Page not found </h1>} />
        </Routes>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
