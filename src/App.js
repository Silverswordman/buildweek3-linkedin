import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavLinkedin from "./Components/Nav-Linkedin";
import Main from "./Components/Main-profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLinkedin />
        <Routes>
          <Route path="/me" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
