import "App.css";
import "index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "views/Home";
import { Login } from "views/Login";
import { SignUp } from "views/SignUp";
import { Dashboard } from "views/Dashboard";
import { Account } from "views/Account";
import ProtectedRoutes from "./utils/protected_routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<h1> Page not found </h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
