import { CardImg, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const PersonalProfile = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card>
            <CardImg></CardImg>
            <Card.Body></Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalProfile;
