import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ErrorPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
