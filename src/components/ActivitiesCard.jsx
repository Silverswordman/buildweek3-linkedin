import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { HiOutlinePencil } from "react-icons/hi";
const Activities = () => {
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
                variant="outline-primary"
                className="rounded-pill border-1 py-1 px-3 fw-bold "
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
    </Card>
  );
};

export default Activities;
