import { CardImg, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Activities = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Attività</Card.Title>
              <Card.Text className="text-primary pt-1">20 follower</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Activities;
