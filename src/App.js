import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileSection from "./components/ProfileSection";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";

import "./style.css";
import SettingsProfile from "./components/SettingsProfile";
import { Container } from "react-bootstrap";
import Jobs from "./components/Jobs";
import Home from "./components/Home";
import CompleteProfileList from "./components/CompleteProfiles";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Container id="mainContent" fluid>
        <Routes>
          <Route path="/:key" element={<ProfileSection />} />
          <Route path="/settingsprofile" element={<SettingsProfile />} />
          <Route path="/profile" element={<CompleteProfileList />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
