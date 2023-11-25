import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { RecovePass } from "./components/RecovePass";
import { useState } from "react";

import { AuthProvider } from "./context/AuthContext";

import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Home page</h1>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/home" element={<h1>hola perras</h1>} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default App;
