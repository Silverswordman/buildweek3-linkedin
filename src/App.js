import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileSection from "./components/ProfileSection";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import ProfileList from "./components/ProfileList";
import "./style.css";
import SettingsProfile from "./components/SettingsProfile";
import { Container } from "react-bootstrap";
import Jobs from "./components/Jobs";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Container id="mainContent" fluid>
        <Routes>
          <Route path="/:key" element={<ProfileSection />} />
          <Route path="/settingsprofile" element={<SettingsProfile />} />
          <Route path="/profile" element={<ProfileList />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
