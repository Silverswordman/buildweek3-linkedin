import { CardText, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { HiOutlinePencil } from "react-icons/hi";
import { LiaPlusSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { HiUsers } from "react-icons/hi2";

const CompetenzeCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  function changeBackground() {
    setIsHovered(true);
  }

  function resetBackground() {
    setIsHovered(false);
  }
  return (
    <Card className="mb-1">
      <Card.Body className="p-4 l">
        <Card.Title>
          <Row>
            <Col lg={6} className="fw-bold ">
              Competenze
            </Col>

            <Col lg={6} className="text-end align-items-center">
              <LiaPlusSolid
                className=" fs-3 text-secondary me-4 "
                style={{ cursor: "pointer" }}
              />

              <HiOutlinePencil
                className=" fs-4 text-secondary  "
                style={{ cursor: "pointer" }}
              />
            </Col>
          </Row>
        </Card.Title>
        <CardText className=" mb-4">
          <Row className="fw-bold mb-1">HTML</Row>
          <Row>
            <Col lg={1}>
              {" "}
              <img
                src="http://placekitten.com/25"
                alt="kitten"
                className="rounded-circle"
              ></img>
            </Col>
            <Col lg={11}>
              <p className=" my-0  ">Competenza confermata da ...</p>
            </Col>
            <Col lg={1}>
              {" "}
              <img
                src="http://placekitten.com/25"
                alt="kitten"
                className="rounded-circle"
              ></img>
            </Col>
            <Col lg={11}>
              <p className=" my-0  ">Competenza confermata da ...</p>
            </Col>
            <Col lg={1}>
              <HiUsers></HiUsers>
            </Col>
            <Col lg={11}>
              <p className=" my-0  ">18 Conferme</p>
            </Col>
          </Row>
        </CardText>
        <CardText className=" mb-4">
          <Row className="fw-bold mb-1">CSS</Row>
          <Row>
            <Col lg={1}>
              {" "}
              <img
                src="http://placekitten.com/25"
                alt="kitten"
                className="rounded-circle"
              ></img>
            </Col>
            <Col lg={11}>
              <p className=" my-0  ">Competenza confermata da ...</p>
            </Col>

            <Col lg={1}>
              <HiUsers></HiUsers>
            </Col>
            <Col lg={11}>
              <p className=" my-0  ">40 Conferme</p>
            </Col>
          </Row>
        </CardText>

        <CardText className=" mb-4">
          <Row className="fw-bold mb-1">Javascript</Row>
          <Row>
            <Col lg={1}>
              {" "}
              <img
                src="http://placekitten.com/25"
                alt="kitten"
                className="rounded-circle"
              ></img>
            </Col>
            <Col lg={11}>
              <p className=" my-0  ">Competenza confermata da ...</p>
            </Col>

            <Col lg={1}>
              <HiUsers></HiUsers>
            </Col>
            <Col lg={11}>
              <p className=" my-0  ">8 Conferme</p>
            </Col>
          </Row>
        </CardText>
      </Card.Body>{" "}
      <Card.Footer
        className={`bg-${
          isHovered ? "secondary-subtle text-dark" : "white"
        } text-center text-secondary  fw-bold`}
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
