import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../Assets/LinkedIn-logo.png";

const { format } = require("date-fns");

const HomeFooter = () => {
  const myDate = new Date();
  const formattedDate = format(myDate, "yyyy");

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

  return (
    <Container>
      <Row className="justify-content-center text-muted small mt-1">
        <Col
          xs={4}
          className=" text-end"
          style={getColStyle(0)}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          Informazioni
        </Col>
        <Col
          xs={4}
          className="text-start"
          style={getColStyle(1)}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          Accessibilità
        </Col>
      </Row>
      <Row className="justify-content-center text-muted small mt-1">
        <Col
          xs={4}
          lg={6}
          className="text-end"
          style={getColStyle(2)}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          Centro Assistenza
        </Col>
        <Col
          xs={4}
          lg={6}
          className=" text-start"
          style={getColStyle(3)}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          Privacy e condizioni
        </Col>
      </Row>
      <Row className="justify-content-center text-muted small mt-1">
        <Col
          xs={6}
          lg={9}
          style={getColStyle(4)}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          Opzioni per gli annunci pubblicitari
        </Col>
      </Row>
      <Row className="justify-content-center text-muted small mt-1">
        <Col
          xs={4}
          lg={6}
          className="text-end"
          style={getColStyle(5)}
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
        >
          Pubblicità
        </Col>
        <Col
          xs={4}
          lg={6}
          className="text-start"
          style={getColStyle(6)}
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={handleMouseLeave}
        >
          Servizi alle Aziende
        </Col>
      </Row>
      <Row className="justify-content-center text-muted small mt-1">
        <Col
          xs={4}
          lg={7}
          className="text-end"
          style={getColStyle(7)}
          onMouseEnter={() => handleMouseEnter(7)}
          onMouseLeave={handleMouseLeave}
        >
          Scarica l'app Linkedin
        </Col>
        <Col
          xs={4}
          lg={3}
          className="text-start"
          style={getColStyle(8)}
          onMouseEnter={() => handleMouseEnter(8)}
          onMouseLeave={handleMouseLeave}
        >
          Altro
        </Col>
      </Row>

      <Row className="small text-muted mt-3 justify-content-center align-items-center">
        <Col xs={2}>
          <img src={logo} alt="logo" width={52}></img>
        </Col>
        <Col xs={8} lg={9} className="text-center">
          LinkedInfake Corporation © {formattedDate}
        </Col>
      </Row>
    </Container>
  );
};

export default HomeFooter;
