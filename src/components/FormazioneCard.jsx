import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { HiOutlinePencil } from "react-icons/hi";
import { LiaPlusSolid } from "react-icons/lia";

const FormazioneCard = () => {
  return (
    <Card className="mb-1 mt-3">
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
        <Card.Text>
          <Row className="mb-2">
            <Col lg={2}>
              {" "}
              <img
                src="http://placekitten.com/75"
                alt="kitten"
                className=""
              ></img>
            </Col>
            <Col lg={10}>
              <p className="fw-bold fs-5 my-0 ">Epicode</p>
              <p className=" my-0 small ">Corso Front-End Web Development</p>
              <p className=" my-0 small text-muted ">Ago 2023 - In Corso</p>
              <p className=" my-0 small ">Votazione 100/100</p>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col lg={2}>
              {" "}
              <img
                src="http://placekitten.com/75"
                alt="kitten"
                className=""
              ></img>
            </Col>
            <Col lg={10}>
              <p className="fw-bold fs-5 my-0 ">Epicode</p>
              <p className=" my-0 small ">Corso Front-End Web Development</p>
              <p className=" my-0 small text-muted ">Ago 2023 - In Corso</p>
              <p className=" my-0 small ">Votazione 100/100</p>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col lg={2}>
              {" "}
              <img
                src="http://placekitten.com/75"
                alt="kitten"
                className=""
              ></img>
            </Col>
            <Col lg={10}>
              <p className="fw-bold fs-5 my-0 ">Epicode</p>
              <p className=" my-0 small ">Corso Front-End Web Development</p>
              <p className=" my-0 small text-muted ">Ago 2023 - In Corso</p>
              <p className=" my-0 small ">Votazione 100/100</p>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FormazioneCard;
