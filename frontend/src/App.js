import react from "react";
import { Route, Routes } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Registro from "./pages/Registro";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Index/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/registro" element={ <Registro/> } />
    </Routes>
  )
}

export default App;
