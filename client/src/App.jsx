import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { RecovePass } from "./components/RecovePass";
import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;