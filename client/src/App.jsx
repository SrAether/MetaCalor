import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { RecovePass } from "./components/RecovePass";
import { useState } from "react";

import { AuthProvider } from "./context/AuthContext";

import "./App.css";
import { Aliments } from "./components/Aliments";
import { CaloriesRegister } from "./components/CaloriesRegister";
import { KcalSpend } from "./components/KcalSpend";
import { GlobalRank } from "./components/GlobalRank";
import { MakeDish } from "./components/MakeDish";
import { Nutriologos } from "./components/Nutriologos";
import { Platillo } from "./components/Platillo";
import { Settings } from "./components/Settings";

function App() {
  const [user, setUser] = useState([]);

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setUser={setUser} />} />

            {/* Rutas a las que solo se puede acceder estando log */}
            <Route >
              <Route path="/home" element={<Home />} />
              <Route path="/aliments" element={<Aliments />} />
              <Route path="/registrocalorias" element={<CaloriesRegister />} />
              <Route path="/globalrank" element={<GlobalRank />} />
              <Route path="/kcalspend" element={<KcalSpend />} />
              <Route path="/makedish" element={<MakeDish />} />
              <Route path="/nutriologs" element={<Nutriologos />} />
              <Route path="/platillo" element={<Platillo />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default App;
