import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileSection from "./components/ProfileSection";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import ProfileList from "./components/ProfileList";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path="/:key" element={<ProfileSection />} />ù
        <Route path="/profile" element={<ProfileList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
