import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AuthGuard from "./Components/ProtectedRoute/AuthGuard";
import UserGuard from "./Components/ProtectedRoute/UserGuard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route
            path="/login"
            element={
              <AuthGuard>
                <Login />
              </AuthGuard>
            }
          />
          <Route
            path="/dashboard"
            element={
              <UserGuard>
                <Home />
              </UserGuard>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
