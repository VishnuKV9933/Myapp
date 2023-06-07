import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SignUP from "./Components/SignUP";
import Signin from "./Components/Signin";
import ChangePassword from "./Components/ChangePassword";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Signin />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<SignUP />} />
        <Route exact path="/changepassword" element={<ChangePassword />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

