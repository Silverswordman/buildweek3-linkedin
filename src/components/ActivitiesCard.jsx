import { Button, CardFooter, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { HiOutlinePencil } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

const Activities = () => {
  const [isHovered, setIsHovered] = useState(false);

  function changeBackground() {
    setIsHovered(true);
  }

  function resetBackground() {
    setIsHovered(false);
  }
  return (
    <Card>
      <Card.Body className="p-4 l">
        <Card.Title>
          <Row>
            <Col lg={6} className="fw-bold ">
              Attività
            </Col>

            <Col lg={6} className="text-end ">
              <Button
                variant="outlinfe-primary  "
                className="rounded-pill border-1 py-1 px-3 me-3 fw-bold "
              >
                Crea un post
              </Button>{" "}
              <HiOutlinePencil
                className=" fs-4 text-secondary  "
                style={{ cursor: "pointer" }}
              />
            </Col>
          </Row>
        </Card.Title>
        <Card.Text
          className="text-primary   fw-bold small "
          style={{ cursor: "pointer" }}
        >
          20 follower
        </Card.Text>
      </Card.Body>
      <Card.Footer
        className={`bg-${
          isHovered ? "secondary-subtle text-dark" : "white"
        } text-center text-secondary  fw-bold`}
        style={{ cursor: "pointer" }}
        onMouseEnter={changeBackground}
        onMouseLeave={resetBackground}
      >
        Mostra tutte le attività <FaArrowRight />
      </Card.Footer>
    </Card>
  );
};

export default Activities;
