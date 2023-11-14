import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { HiOutlinePencil } from "react-icons/hi";
import { LiaPlusSolid } from "react-icons/lia";

const Formazione = () => {
  return (
    <Card>
      <Card.Body className="p-4 l">
        <Card.Title>
          <Row>
            <Col lg={6} className="fw-bold ">
              Formazione
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
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Formazione;
