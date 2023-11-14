import { Container, Form, Nav, Navbar, Row, Button } from "react-bootstrap";
import Logo from "../Assets/logo2.webp";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi2";
import {
  BsBriefcaseFill,
  BsChatDotsFill,
  BsFillBellFill,
  BsGrid3X3GapFill,
} from "react-icons/bs";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";

const NavbarComp = () => {
  return (
    <Navbar
      bg="white"
      data-bs-theme="light"
      className="  p-0 border-bottom  justify-content-center"
    >
      <Nav className="align-items-baseline">
        {/* NAVBARBRAND */}

        <Link to="/" className="me-2">
          <img src={Logo} alt="Logo" width={35} />
        </Link>

        {/* SEARCH */}
        <Nav.Item className="align-self-center d-none d-md-block ">
          <InputGroup>
            <InputGroup.Text
              id="searchicon"
              className="bg-secondary-subtle border-end-0 ps-1  "
              size="sm"
            >
              {" "}
              <BiSearchAlt2 className="fs-5" />
            </InputGroup.Text>
            <Form.Control
              className="bg-secondary-subtle border-start-0  "
              type="search"
              placeholder="Cerca"
              aria-label="Search"
              aria-describedby="Search"
              size="sm"
              id="searchtext"
            />
          </InputGroup>
        </Nav.Item>
        <Link to="/" className="nav-link d-flex flex-column align-items-center">
          <AiFillHome className="fs-4" /> <small> Home</small>
        </Link>
        <Link to="/" className="nav-link d-flex flex-column align-items-center">
          <HiUsers className="fs-4" /> <small> Rete</small>
        </Link>
        <Link to="/" className="nav-link d-flex flex-column align-items-center">
          <BsBriefcaseFill className="fs-4" />
          <small> Lavoro</small>
        </Link>
        <Link to="/" className="nav-link d-flex flex-column align-items-center">
          <BsChatDotsFill className="fs-4" />
          <small> Messaggistica</small>
        </Link>
        <Link to="/" className="nav-link d-flex flex-column align-items-center">
          <BsFillBellFill className="fs-4" />
          <small>Notifiche</small>
        </Link>

        <Dropdown>
          <Dropdown.Toggle
            id="profile dropdown"
            variant="white"
            className="d-flex flex-column align-items-center  "
          >
            <img
              src={Logo}
              alt="logo"
              width={25}
              className="rounded-circle"
            ></img>
            <small> Tu</small>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link to="/me" className="text-decoration-none ">
              <div className="d-flex flex-column ">
                Profile
                <Button
                  className="btn-sm fw-bold rounded-pill "
                  variant="outline-primary border-2"
                >
                  Visualizza Profilo
                </Button>
              </div>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-2 ">Account</Dropdown.Item>

            <Dropdown.Item href="#/action-3">Gestisci</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Esci</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Link
          to="/"
          className="nav-link d-flex flex-column align-items-center border-start"
        >
          <BsGrid3X3GapFill className="fs-4" />
          <small> Per le Aziende</small>
        </Link>
        <Link className="wrap">
          <small>Prova Premium per 0 EUR</small>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComp;
