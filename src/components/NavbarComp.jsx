import { Form, Nav, Navbar, Button, Row } from "react-bootstrap";
import Logo from "../Assets/logo2.webp";
import { Link, useLocation } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi2";
import { HiDotsHorizontal } from "react-icons/hi";

import {
  BsBriefcaseFill,
  BsChatDotsFill,
  BsFillBellFill,
  BsGrid3X3GapFill,
} from "react-icons/bs";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getJobsListAction,
  resetJobListAction,
  setQueryAction,
} from "../redux/actions";

const NavbarComp = () => {
  const resetQuery = "";
  const dispatch = useDispatch();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (location.pathname.endsWith("/jobs")) {
      dispatch(setQueryAction(query));
    } else {
      console.log("non sei nella pagina giusta");
    }
  };

  useEffect(() => {
    if (location.pathname !== "/jobs") {
      dispatch(setQueryAction(resetQuery));
    }
  }, [location, dispatch]);

  return (
    <Navbar
      bg="white"
      data-bs-theme="light"
      className="  p-0 border-bottom justify-content-center  "
    >
      <Nav className="align-items-baseline">
        {/* NAVBARBRAND */}

        <Link to="/" className="me-2 align-self-center ">
          <img src={Logo} alt="Logo" width={35} />
        </Link>

        {/* SEARCH */}
        <Nav.Item className="align-self-center d-none d-md-block ">
          <Form onSubmit={handleFormSubmit}>
            <InputGroup className="pe-lg-5">
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
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </InputGroup>
          </Form>
        </Nav.Item>
        <Link
          to="/"
          className="nav-link d-flex flex-column align-items-center ps-0 ms-lg-5 me-lg-3"
        >
          <AiFillHome className="fs-4 ms-1  " />
          <span className="small d-none d-lg-block"> Home</span>
        </Link>
        <Link
          to="/"
          className="nav-link d-flex flex-column align-items-center px-lg-3"
        >
          <HiUsers className="fs-4" />{" "}
          <span className="small d-none d-lg-block"> Rete</span>
        </Link>
        <Link
          to="/jobs"
          className="nav-link d-flex flex-column align-items-center px-lg-3"
        >
          <BsBriefcaseFill className="fs-4" />
          <span className="small d-none d-lg-block">Lavoro</span>
        </Link>
        <Link
          to="/"
          className="nav-link d-flex flex-column align-items-center px-lg-3"
        >
          <BsChatDotsFill className="fs-4" />
          <span className="small d-none d-lg-block"> Messaggistica</span>
        </Link>
        <Link
          to="/"
          className="nav-link d-flex flex-column align-items-center px-lg-3"
        >
          <BsFillBellFill className="fs-4" />
          <span className="small d-none d-lg-block"> Notifiche</span>
        </Link>

        <Dropdown className="px-lg-3">
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
            <span className="small d-none d-lg-block"> Tu</span>
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
          className="nav-link d-flex flex-column align-items-center border-start px-lg-3"
        >
          <BsGrid3X3GapFill className="fs-4 d-none d-sm-block" />
          <span className="small d-none d-lg-block"> per le aziende</span>
        </Link>
        <Link className="text-secondary text-center px-lg-3 align-self-center d-none d-sm-block">
          <small>
            Prova Premium <br></br>per 0 EUR
          </small>
        </Link>
        <Dropdown className="d-block d-sm-none" drop="down">
          <Dropdown.Toggle variant="white" id=" menu plus dropdown">
            <HiDotsHorizontal />
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu-end ">
            {" "}
            <div className="d-flex">
              <Link
                to="/"
                className="nav-link d-flex flex-column align-items-center border-start px-lg-3"
              >
                <BsGrid3X3GapFill className="fs-4 " />
                <span className="small d-none d-lg-block"> Per le aziende</span>
              </Link>
              <Link className="text-secondary text-center px-lg-3 align-self-center  ">
                <small>
                  Prova Premium <br></br>per 0 EUR
                </small>
              </Link>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default NavbarComp;
