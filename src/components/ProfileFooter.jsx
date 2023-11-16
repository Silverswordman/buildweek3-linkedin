import { Container, Row, Col, ListGroup, Form } from "react-bootstrap";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { IoShieldHalf } from "react-icons/io5";
import { useState } from "react";

const { format } = require("date-fns");

const ProfileFooter = () => {
  const [hoveredCol, setHoveredCol] = useState(null);

  const handleMouseEnter = (colIndex) => {
    setHoveredCol(colIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCol(null);
  };

  const getColStyle = (colIndex) => {
    const baseStyle = {
      cursor: "pointer",
    };

    if (colIndex === hoveredCol) {
      return {
        ...baseStyle,
        color: "#007BFF", //primary
        textDecoration: "underline",
      };
    }
    return baseStyle;
  };

  const myDate = new Date();
  const formattedDate = format(myDate, "yyyy");
  return (
    <Container className="my-3 w-75">
      <Row className="justify-content-center ">
        <Col lg={2}>
          {" "}
          <ListGroup>
            <ListGroup.Item
              className="bg-transparent border-0 small py-1"
              style={getColStyle(0)}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              Informazioni
            </ListGroup.Item>
            <ListGroup.Item
              className="bg-transparent border-0 small py-1"
              style={getColStyle(1)}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              Linee Guida della community
            </ListGroup.Item>
            <ListGroup.Item
              className="bg-transparent border-0 small py-3"
              style={getColStyle(2)}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              Privacy e condizioni
            </ListGroup.Item>
            <ListGroup.Item
              className="bg-transparent border-0 small py-1"
              style={getColStyle(3)}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              Informazioni
            </ListGroup.Item>
            <ListGroup.Item
              className="bg-transparent border-0 small py-1"
              style={getColStyle(4)}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              Centro sicurezza
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={2}>
          {" "}
          <ListGroup>
            <ListGroup.Item
              className="bg-transparent border-0 small py-1"
              style={getColStyle(5)}
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
            >
              Accessibilità
            </ListGroup.Item>
            <ListGroup.Item
              className="bg-transparent border-0 small py-1"
              style={getColStyle(6)}
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
            >
              Carriera
            </ListGroup.Item>
            <ListGroup.Item
              className="bg-transparent border-0 small py-3"
              style={getColStyle(7)}
              onMouseEnter={() => handleMouseEnter(7)}
              onMouseLeave={handleMouseLeave}
            >
              Opzioni per gli annunci pubblicitari
            </ListGroup.Item>
            <ListGroup.Item
              className="bg-transparent border-0 small py-1"
              style={getColStyle(8)}
              onMouseEnter={() => handleMouseEnter(8)}
              onMouseLeave={handleMouseLeave}
            >
              Mobile
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={2}>
          {" "}
          <ListGroup>
            <ListGroup.Item
              className="bg-transparent border-0 small py-1"
              style={getColStyle(9)}
              onMouseEnter={() => handleMouseEnter(9)}
              onMouseLeave={handleMouseLeave}
            >
              Talent Solutions
            </ListGroup.Item>
            <ListGroup.Item
              className="bg-transparent border-0 small py-1"
              style={getColStyle(10)}
              onMouseEnter={() => handleMouseEnter(10)}
              onMouseLeave={handleMouseLeave}
            >
              Soluzioni di marketing
            </ListGroup.Item>
            <ListGroup.Item
              className="bg-transparent border-0 small py-3"
              style={getColStyle(11)}
              onMouseEnter={() => handleMouseEnter(11)}
              onMouseLeave={handleMouseLeave}
            >
              Pubblicità
            </ListGroup.Item>
            <ListGroup.Item
              className="bg-transparent border-0 small py-1"
              style={getColStyle(12)}
              onMouseEnter={() => handleMouseEnter(12)}
              onMouseLeave={handleMouseLeave}
            >
              Piccole Imprese
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3} className="ps-0">
          <ListGroup>
            <ListGroup.Item className="bg-transparent border-0  py-1 px-0 ">
              <Row>
                <Col lg={1}>
                  <BsQuestionCircleFill className="fs-5" />
                </Col>
                <Col lg={9} className="pe-0">
                  <span
                    style={getColStyle(13)}
                    onMouseEnter={() => handleMouseEnter(13)}
                    onMouseLeave={handleMouseLeave}
                  >
                    Domande?
                  </span>
                  <p className="small text-muted ">
                    Visita il nostro Centro assistenza
                  </p>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0  py-1 px-0">
              <Row>
                <Col lg={1}>
                  <IoMdSettings className="fs-5" />
                </Col>
                <Col lg={9} className="pe-0 ">
                  <span
                    style={getColStyle(14)}
                    onMouseEnter={() => handleMouseEnter(14)}
                    onMouseLeave={handleMouseLeave}
                  >
                    Gestisci il tuo account e la tua privacy
                  </span>
                  <p className="small text-muted">Vai alle impostazioni</p>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0  py-3 px-0">
              <Row>
                <Col lg={1}>
                  <IoShieldHalf className="fs-5" />
                </Col>
                <Col lg={9} className="pe-0 ">
                  <span
                    style={getColStyle(15)}
                    onMouseEnter={() => handleMouseEnter(15)}
                    onMouseLeave={handleMouseLeave}
                  >
                    Trasparenza sui contenuti consigliati
                  </span>
                  <p className="small text-muted">
                    Scopri di più sui contenuti consigliati.
                  </p>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={2}>
          <p className="small"> Seleziona lingua</p>
          <Form.Select aria-label="Default select example">
            <option>Italiano-(Italiano) </option>
            <option value="1">English-(Inglese)</option>
            <option value="2">Français-(Francese)</option>

            <option value="3">Espanol-(Spagnolo)</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="small text-muted mt-3">
        {" "}
        LinkedIn fake Corporation © {formattedDate}
      </Row>
    </Container>
  );
};
export default ProfileFooter;
