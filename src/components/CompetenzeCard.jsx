import { CardText, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { HiOutlinePencil } from "react-icons/hi";
import { LiaPlusSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { HiUsers } from "react-icons/hi2";
import users from "../Assets/1660833954461.png";
import { useLocation } from "react-router-dom";

const CompetenzeCard = () => {
  const { pathname } = useLocation();
  const isMeRoute = pathname === "/me";
  const [isHovered, setIsHovered] = useState(false);

  function changeBackground() {
    setIsHovered(true);
  }

  function resetBackground() {
    setIsHovered(false);
  }
  return (
    <Card className="mb-1 mt-3">
      <Card.Body className="p-4 l">
        <Card.Title>
          <Row>
            <Col lg={6} className="fw-semibold ">
              Competenze
            </Col>

            <Col lg={6} className="text-end align-items-center">
              {isMeRoute && (
                <>
                
                <LiaPlusSolid
                  className=" fs-3 text-secondary me-4 "
                  style={{ cursor: "pointer" }}
                />
  
                <HiOutlinePencil
                  className=" fs-4 text-secondary  "
                  style={{ cursor: "pointer" }}
                />
                </>
              )}
            </Col>
          </Row>
        </Card.Title>
        <div className=" mb-4">
          <Row className="fw-semibold mb-1">HTML</Row>
          <Row>
            <Col lg={1}>
              {" "}
              <img
                src={users}
                alt="users"
                className="rounded-circle"
                width={35}
              ></img>
            </Col>
            <Col lg={11}>
              <p className=" my-0  ">Competenza confermata da ...</p>
            </Col>
            <Col lg={1}>
              {" "}
              <img
                src={users}
                alt="users"
                className="rounded-circle"
                width={35}
              ></img>
            </Col>
            <Col lg={11}>
              <p className=" my-0  ">Competenza confermata da ...</p>
            </Col>
            <Col lg={1}>
              <HiUsers className="ms-2 fs-6"></HiUsers>
            </Col>
            <Col lg={11}>
              <p className=" my-0  ">18 Conferme</p>
            </Col>
          </Row>
        </div>
        <div className=" mb-4">
          <Row className="fw-semibold mb-1">CSS</Row>
          <Row>
            <Col lg={1}>
              {" "}
              <img
                src={users}
                alt="users"
                className="rounded-circle"
                width={35}
              ></img>
            </Col>
            <Col lg={11}>
              <p className=" my-0  ">Competenza confermata da ...</p>
            </Col>

            <Col lg={1}>
              <HiUsers className="ms-2 fs-6"></HiUsers>
            </Col>
            <Col lg={11}>
              <p className=" my-0  ">40 Conferme</p>
            </Col>
          </Row>
        </div>

        <div className=" mb-4">
          <Row className="fw-semibold mb-1">Javascript</Row>
          <Row>
            <Col lg={1}>
              {" "}
              <img
                src={users}
                alt="users"
                className="rounded-circle"
                width={35}
              ></img>
            </Col>
            <Col lg={11}>
              <p className=" my-0  ">Competenza confermata da ...</p>
            </Col>

            <Col lg={1}>
              <HiUsers className="ms-2 fs-6"></HiUsers>
            </Col>
            <Col lg={11}>
              <p className=" my-0  ">8 Conferme</p>
            </Col>
          </Row>
        </div>
      </Card.Body>{" "}
      <Card.Footer
        className={`bg-${
          isHovered ? "#e0e0e0 text-dark" : "white"
        } text-center text-secondary  fw-semibold`}
        style={{ cursor: "pointer" }}
        onMouseEnter={changeBackground}
        onMouseLeave={resetBackground}
      >
        Mostra tutte le competenze <FaArrowRight />
      </Card.Footer>
    </Card>
  );
};

export default CompetenzeCard;
